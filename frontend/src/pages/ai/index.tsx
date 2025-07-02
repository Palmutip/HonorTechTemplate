import { motion, useAnimation, useInView } from 'framer-motion'
import { Brain } from 'lucide-react'
import { Button } from '../../components/ui/button'
import { useEffect, useRef } from 'react'
import { setPageMeta } from '../../utils'
import { aiFeatures, aiSolutions } from '../../constants/data'
import { Link } from "react-router-dom";

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
          className="bg-gray-50 rounded-lg p-8 md:p-12"
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

        {/* AI in Your Next Application */}
        <motion.section 
          variants={animation}
          id="web-applications" 
          className="py-5"
        >
          <div className="mx-[40px]">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                AI in Your Next Application
              </h2>
              <p className="text-justify text-lg text-gray-600 mb-3">
                At Honor Tech LLC, we understand that AI is transforming how businesses operate, and we&apos;re committed to helping you harness its power. Whether you&apos;re looking to enhance user experiences, streamline processes, or analyze large datasets, we can integrate AI capabilities tailored to your specific needs.              
              </p>
              <p className="text-justify text-lg text-gray-600 mb-3">
                We utilize established AI frameworks, such as those provided by OpenAI, and work with tools in the .NET and JavaScript ecosystems to implement intelligent solutions. Our approach prioritizes flexibility, allowing us to choose the best-fit technologies for each project.
              </p>
              <p className="text-justify text-lg text-gray-600 mb-3">
                For .NET-based applications, we leverage libraries like Microsoft.Extensions.AI to seamlessly integrate AI services into software. These tools enable us to design applications that adapt to your business challenges and scale efficiently.
              </p>
              <p className="text-justify text-lg text-gray-600 mb-3">
                In web-based and cross-platform environments, we explore lightweight AI libraries and APIs that deliver real-time processing capabilities for tasks like predictive analytics, natural language understanding, and image recognition. By tailoring our approach, we ensure your applications benefit from the latest advancements in AI without unnecessary overhead.
              </p>
              <p className="text-justify text-lg text-gray-600 mb-3">
                Our priority is delivering solutions that are not only powerful but also ethical and secure. For sensitive domains, such as judiciary or government datasets, we work with strict safeguards to ensure proprietary or protected data is never exposed in AI models. Where necessary, we implement containerized or externalized AI processes to maintain data integrity and compliance.
              </p>
          </div>
        </motion.section>

        {/* Honor Tech LLC Usage of AI */}
        <motion.section 
          variants={animation}
          id="point-of-sale" 
          className="py-5 bg-gray-50 mb-16"
        >
          <div className="mx-[40px]">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Honor Tech LLC Usage of AI
              </h2>
              <p className="text-justify text-lg text-gray-600 mb-3">
                At Honor Tech, AI serves as a tool to enhance our development processes—not replace them. We combine the speed and efficiency of AI-driven development with the expertise and oversight of our experienced engineers. This ensures every project benefits from cutting-edge innovation without compromising on quality or accuracy.
              </p>
              <p className="text-justify text-lg text-gray-600 mb-3">
                We use AI to streamline repetitive tasks, assist with large-scale data analysis, and accelerate timelines. However, every line of code is reviewed and refined by our developers, ensuring that the final product reflects our commitment to excellence.
              </p>
              <p className="text-justify text-lg text-gray-600 mb-3">
                Choosing Honor Tech LLC means working with a team that values transparency and adaptability. Whether your project requires AI-powered insights or traditional development methodologies, we deliver quality work tailored to your goals and challenges. Our expertise spans years of software development, ensuring we provide robust solutions no matter the tools involved.
              </p>
          </div>
        </motion.section>

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
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="bg-gray-800 text-white hover:bg-gray-700 text-lg px-8 py-4 shadow-lg items-center gap-3">
              Start Your Project
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
} 