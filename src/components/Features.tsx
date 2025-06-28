import React from 'react'

const Features: React.FC = () => {
  const features = [
    {
      icon: '🤖',
      title: 'AI Agent Networks',
      description: 'Create sophisticated networks of AI agents that can communicate and collaborate seamlessly.'
    },
    {
      icon: '🔗',
      title: 'Smart Connections',
      description: 'Intelligent routing and connection management for optimal agent-to-agent communication.'
    },
    {
      icon: '⚡',
      title: 'Real-time Processing',
      description: 'Lightning-fast processing and response times for mission-critical applications.'
    },
    {
      icon: '🛡️',
      title: 'Secure Protocol',
      description: 'Enterprise-grade security with encrypted communications and access controls.'
    },
    {
      icon: '📊',
      title: 'Analytics Dashboard',
      description: 'Comprehensive monitoring and analytics for network performance and agent behavior.'
    },
    {
      icon: '🔧',
      title: 'Easy Integration',
      description: 'Simple APIs and SDKs for seamless integration with existing systems and workflows.'
    }
  ]

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the advanced capabilities that make GAN the leading platform for intelligent agent connections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card p-8 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features