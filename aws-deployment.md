# AWS Deployment Guide for GAN

This guide covers multiple AWS deployment options for your GAN project.

## Option 1: AWS S3 + CloudFront (Recommended for Static Sites)

### Prerequisites
- AWS CLI installed and configured
- AWS account with appropriate permissions

### Steps

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Create S3 bucket**
   ```bash
   aws s3 mb s3://your-gan-bucket-name --region us-east-1
   ```

3. **Configure bucket for static website hosting**
   ```bash
   aws s3 website s3://your-gan-bucket-name --index-document index.html --error-document index.html
   ```

4. **Upload files**
   ```bash
   aws s3 sync dist/ s3://your-gan-bucket-name --delete
   ```

5. **Set bucket policy for public access**
   Create a file `bucket-policy.json`:
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "PublicReadGetObject",
         "Effect": "Allow",
         "Principal": "*",
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::your-gan-bucket-name/*"
       }
     ]
   }
   ```

   Apply the policy:
   ```bash
   aws s3api put-bucket-policy --bucket your-gan-bucket-name --policy file://bucket-policy.json
   ```

6. **Create CloudFront distribution (Optional but recommended)**
   - Go to AWS CloudFront console
   - Create distribution with S3 bucket as origin
   - Configure custom error pages to redirect to index.html for SPA routing

## Option 2: AWS Amplify (Easiest Option)

1. **Install Amplify CLI**
   ```bash
   npm install -g @aws-amplify/cli
   ```

2. **Initialize Amplify**
   ```bash
   amplify init
   ```

3. **Add hosting**
   ```bash
   amplify add hosting
   ```
   Choose "Amazon CloudFront and S3"

4. **Deploy**
   ```bash
   amplify publish
   ```

## Option 3: AWS EC2 with Docker

### Dockerfile
```dockerfile
FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### nginx.conf
```nginx
events {
    worker_connections 1024;
}

http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    server {
        listen 80;
        server_name localhost;
        root /usr/share/nginx/html;
        index index.html;

        location / {
            try_files $uri $uri/ /index.html;
        }
    }
}
```

### Deploy to EC2
1. Launch EC2 instance
2. Install Docker
3. Build and run container:
   ```bash
   docker build -t gan-app .
   docker run -d -p 80:80 gan-app
   ```

## Option 4: AWS ECS with Fargate

1. **Create ECR repository**
   ```bash
   aws ecr create-repository --repository-name gan-app
   ```

2. **Build and push Docker image**
   ```bash
   aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <account-id>.dkr.ecr.us-east-1.amazonaws.com
   docker build -t gan-app .
   docker tag gan-app:latest <account-id>.dkr.ecr.us-east-1.amazonaws.com/gan-app:latest
   docker push <account-id>.dkr.ecr.us-east-1.amazonaws.com/gan-app:latest
   ```

3. **Create ECS cluster, task definition, and service through AWS Console**

## Environment Variables for Production

Create a `.env.production` file:
```
VITE_API_URL=https://your-api-domain.com
VITE_APP_ENV=production
```

## Security Considerations

1. **HTTPS**: Always use HTTPS in production
2. **CORS**: Configure proper CORS headers
3. **CSP**: Implement Content Security Policy
4. **Environment Variables**: Never commit sensitive data

## Monitoring and Logging

- Use AWS CloudWatch for monitoring
- Set up AWS X-Ray for distributed tracing
- Configure AWS WAF for web application firewall

## Cost Optimization

- Use S3 + CloudFront for lowest cost static hosting
- Consider AWS Lambda@Edge for dynamic content
- Set up CloudWatch billing alerts

Choose the deployment option that best fits your needs and budget!