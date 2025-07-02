import { motion, useAnimation, useInView } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useEffect, useRef } from 'react'
import { setPageMeta } from '@/utils'
import { contactInfo, whyChooseUsContact } from '../../constants/data'
import { ContactForm } from '../../components/contact-form'

export function Contact() {
  useEffect(() => {
    setPageMeta(
      'Contact Us - Get in Touch | Honor Tech LLC',
      'Ready to transform your business with custom software solutions? Contact Honor Tech LLC today for a free consultation and quote.'
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business with custom software solutions? 
            Get in touch with our team today.
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={animation}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Contact Form */}
          <motion.div variants={animation}>
            <ContactForm />
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            variants={animation}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                We're here to help you bring your software vision to life. 
                Reach out to us through any of the channels below.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.title} className="flex items-center">
                  <div className="bg-[#e0a802] p-3 rounded-lg mr-4">
                    <info.icon className="h-6 w-6 text-black-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                    <p className="text-gray-600">{info.details}</p>
                    <p className="text-sm text-gray-500">{info.note}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Why Choose Us */}
            <Card>
              <CardHeader>
                <CardTitle>Why Choose Honor Tech?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {whyChooseUsContact.map((reason) => (
                    <li key={reason} className="flex items-center">
                      <div className="w-2 h-2 bg-[#e0a802] rounded-full mr-3"></div>
                      {reason}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
} 