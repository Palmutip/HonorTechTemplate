import { motion } from 'framer-motion'
import { Brain, Zap, Target, TrendingUp } from 'lucide-react'
import { Button } from '../../components/ui/button'
import { useEffect } from 'react'
import { setPageMeta } from '../../utils'

export function AI() {
  useEffect(() => {
    setPageMeta(
      'AI Solutions - Artificial Intelligence Services | Honor Tech LLC',
      'Harness the power of AI with our intelligent solutions. Machine learning, process automation, and data analytics to transform your business operations.'
    )
  }, [])

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-blue-100 p-4 rounded-full">
              <Brain className="h-12 w-12 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">AI-Driven Solutions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Harness the power of artificial intelligence to transform your business operations 
            and gain competitive advantages through intelligent automation and data insights.
          </p>
        </motion.div>

        {/* AI Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
            <p className="text-gray-600">Predictive analytics and pattern recognition</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Process Automation</h3>
            <p className="text-gray-600">Intelligent workflow optimization</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Data Analytics</h3>
            <p className="text-gray-600">Deep insights from your business data</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Performance Optimization</h3>
            <p className="text-gray-600">Continuous improvement through AI</p>
          </motion.div>
        </div>

        {/* AI Solutions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-50 rounded-lg p-8 md:p-12 mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">AI-Powered Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Intelligent Analytics</h3>
              <p className="text-gray-600 mb-4">
                Our AI-driven analytics platform provides deep insights into your business operations, 
                helping you make data-driven decisions and identify opportunities for growth.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Predictive modeling and forecasting
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Real-time data processing
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Automated reporting and dashboards
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Smart Automation</h3>
              <p className="text-gray-600 mb-4">
                Automate repetitive tasks and complex workflows with intelligent systems that 
                learn and adapt to your business processes.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Workflow automation and optimization
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Intelligent document processing
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Customer service automation
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-blue-600 text-white rounded-lg p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Leverage AI?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Discover how artificial intelligence can transform your business operations 
            and drive unprecedented growth.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
            Explore AI Solutions
          </Button>
        </motion.div>
      </div>
    </div>
  )
} 