import React from 'react'

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About GAN
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              GAN (Generative Agent Network) represents the next evolution in AI connectivity. 
              Our platform enables seamless communication between intelligent agents, creating 
              a distributed network of AI entities that can collaborate, share knowledge, and 
              solve complex problems together.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Built with cutting-edge technology and designed for scalability, GAN empowers 
              organizations to harness the collective intelligence of multiple AI agents, 
              unlocking new possibilities in automation, decision-making, and problem-solving.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">1000+</div>
                <div className="text-gray-600">Active Agents</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">99.9%</div>
                <div className="text-gray-600">Uptime</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Choose GAN?</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Advanced AI networking protocols
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Scalable cloud infrastructure
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Enterprise-grade security
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  24/7 support and monitoring
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About