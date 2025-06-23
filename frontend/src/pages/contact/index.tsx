import { motion, useAnimation, useInView } from 'framer-motion'
import { Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useEffect, useRef } from 'react'
import { setPageMeta } from '@/utils'
import { projectTypes, contactInfo, whyChooseUsContact } from '../../constants/data'

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
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      type="text"
                      placeholder="Your Company"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectType">Project Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a project type" />
                      </SelectTrigger>
                      <SelectContent>
                        {projectTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      rows={5}
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <Button type="submit" className="w-full text-black bg-[#e0a802] hover:bg-[#e0a802]/75">
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
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
                <div key={info.title} className="flex items-start">
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