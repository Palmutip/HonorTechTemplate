import { motion, useAnimation, useInView } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useEffect, useRef } from 'react'
import { setPageMeta } from '@/utils'
import { honorTechServices } from "@/constants/data"

export function Services() {
  useEffect(() => {
    setPageMeta(
      'Services - Custom Software Development | Honor Tech LLC',
      'Custom software development services including web applications, POS systems, and enterprise solutions. Streamline your business with our tailored software solutions.'
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We emphasize security, intuitive design, and real-time data processing to ensure 
            seamless integrations and faster decision-making.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={animation}
          className="space-y-20"
        >
          {honorTechServices.map((service, index) => (
            <motion.div 
              key={service.title}
              variants={animation}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center mb-6">
                  <div className="bg-[#e0a802] p-3 rounded-lg mr-4">
                    <service.icon className="h-8 w-8 text-black-600" />
                  </div>
                  <h2 className="text-3xl font-bold">{service.title}</h2>
                </div>
                <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4">Key Features:</h3>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <Badge key={feature} variant="secondary" className="bg-[#e0a802] text-black">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Ideal for:</h3>
                  <p className="text-gray-600">{service.idealFor}</p>
                </div>

                <Button className="bg-[#e0a802] text-black">
                  Learn More
                </Button>
              </div>

              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <Card className="h-full">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <div className="bg-[#e0a802] w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                        <service.icon className="h-12 w-12 text-black" />
                      </div>
                      <CardTitle className="text-2xl mb-4">{service.title}</CardTitle>
                      <CardDescription className="text-base">
                        Custom solutions tailored to your specific business needs
                      </CardDescription>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          variants={animation}
          className="mt-20"
        >
          <Card className="bg-[#e0a802] text-black border-[#e0a802]">
            <CardContent className="p-8 md:p-12 text-center">
              <CardTitle className="text-3xl mb-4 text-black">Ready to Get Started?</CardTitle>
              <CardDescription className="text-xl mb-8 text-black">
                Let's discuss how our custom software solutions can transform your business.
              </CardDescription>
              <Button size="lg" variant="secondary" className="bg-gray-800 text-white hover:bg-gray-700 text-lg px-8 py-4 shadow-lg items-center gap-3">
                Start Your Project
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
} 