import { motion, useAnimation, useInView } from 'framer-motion'
import { Brain } from 'lucide-react'
import { Button } from '../../components/ui/button'
import { useEffect, useRef } from 'react'
import { setPageMeta } from '../../utils'
import { aiFeatures, aiSolutions } from '../../constants/data'

export function AI() {
  useEffect(() => {
    setPageMeta(
      'AI Solutions - Artificial Intelligence Services | Honor Tech LLC',
      'Harness the power of AI with our intelligent solutions. Machine learning, process automation, and data analytics to transform your business operations.'
    )
  }, [])

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const animation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: i * 0.1
      }
    }),
  }

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
            <div className="bg-[#e0a802] p-4 rounded-full">
              <Brain className="h-12 w-12 text-black-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">AI-Driven Solutions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Harness the power of artificial intelligence to transform your business operations 
            and gain competitive advantages through intelligent automation and data insights.
          </p>
        </motion.div>

        {/* AI Features */}
        <motion.div 
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={animation}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {aiFeatures.map((feature) => (
            <motion.div key={feature.title} variants={animation} className="text-center">
              <div className="bg-[#e0a802] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-black-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* AI Solutions */}
        <motion.div 
          variants={animation}
          className="bg-gray-50 rounded-lg p-8 md:p-12 mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">AI-Powered Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {aiSolutions.map((solution) => (
              <div key={solution.title}>
                <h3 className="text-xl font-semibold mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-4">
                  {solution.description}
                </p>
                <ul className="space-y-2">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <div className="w-2 h-2 bg-[#e0a802] rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          variants={animation}
          className="bg-[#e0a802] text-black rounded-lg p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Leverage AI?</h2>
          <p className="text-xl mb-8 text-black-100">
            Discover how artificial intelligence can transform your business operations 
            and drive unprecedented growth.
          </p>
          <Button size="lg" variant="secondary" className="bg-gray-800 text-white hover:bg-gray-700 text-lg px-8 py-4 shadow-lg items-center gap-3">
            Explore AI Solutions
          </Button>
        </motion.div>
      </div>
    </div>
  )
} 