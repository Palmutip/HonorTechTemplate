import { motion } from 'framer-motion'
import { Code, Building2, ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useEffect } from 'react'
import { setPageMeta } from '@/utils'

export function Services() {
  useEffect(() => {
    setPageMeta(
      'Services - Custom Software Development | Honor Tech LLC',
      'Custom software development services including web applications, POS systems, and enterprise solutions. Streamline your business with our tailored software solutions.'
    )
  }, [])

  const services = [
    {
      icon: Code,
      title: "Web Applications",
      description: "Our custom web applications help businesses streamline operations, improve productivity, and automate workflows. Whether you need a client portal, internal dashboard, or a specialized workflow system, we build scalable solutions designed for long-term success.",
      features: [
        "Cloud-based platforms",
        "Data-driven reporting tools",
        "Workflow automation",
        "Real-time collaboration",
        "Mobile-responsive design"
      ],
      idealFor: "Businesses needing centralized data systems, real-time collaboration tools, or performance-driven applications."
    },
    {
      icon: ShoppingCart,
      title: "Point of Sale Systems",
      description: "A custom-built Point of Sale (POS) system should be more than just payment processing—it should be the backbone of your entire business workflow. We design fully integrated business management applications that seamlessly incorporate Stripe or similar payment platforms.",
      features: [
        "Cloud-based POS management",
        "Integrated payment processing",
        "Real-time inventory tracking",
        "Location-based scanning",
        "Automated financial reporting"
      ],
      idealFor: "Businesses looking for a custom, all-in-one POS solution that works exactly how they need—without the limitations of traditional POS systems."
    },
    {
      icon: Building2,
      title: "Enterprise Solutions",
      description: "Enterprise businesses require powerful, scalable software that can handle complex workflows, data security, and compliance regulations. We build solutions that integrate seamlessly across departments and automate mission-critical processes.",
      features: [
        "Enterprise Resource Planning (ERP)",
        "AI-driven analytics",
        "Automated workflow systems",
        "Compliance management",
        "Cross-department integration"
      ],
      idealFor: "Large organizations needing automation, process optimization, and AI-driven efficiency improvements."
    }
  ]

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
        <div className="space-y-20">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold">{service.title}</h2>
                </div>
                <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4">Key Features:</h3>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <Badge key={feature} variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Ideal for:</h3>
                  <p className="text-gray-600">{service.idealFor}</p>
                </div>

                <Button className="bg-blue-600 hover:bg-blue-700">
                  Learn More
                </Button>
              </div>

              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <Card className="h-full">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <div className="bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                        <service.icon className="h-12 w-12 text-blue-600" />
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
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <Card className="bg-blue-600 text-white border-blue-600">
            <CardContent className="p-8 md:p-12 text-center">
              <CardTitle className="text-3xl mb-4 text-white">Ready to Get Started?</CardTitle>
              <CardDescription className="text-xl mb-8 text-blue-100">
                Let's discuss how our custom software solutions can transform your business.
              </CardDescription>
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                Start Your Project
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
} 