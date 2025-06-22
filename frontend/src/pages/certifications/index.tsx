import { motion } from 'framer-motion'
import { Award, Shield, CheckCircle, Star } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useEffect } from 'react'
import { setPageMeta } from '@/utils'

export function Certifications() {
  useEffect(() => {
    setPageMeta(
      'Certifications - Honor Tech LLC',
      'View our professional certifications, industry standards compliance, and quality assurance credentials that demonstrate our commitment to excellence in software development.'
    )
  }, [])

  const certifications = [
    {
      title: "ISO 27001 Information Security",
      description: "Certified for information security management systems, ensuring your data is protected with enterprise-grade security measures.",
      icon: Shield,
      status: "Active",
      validUntil: "2025-12-31"
    },
    {
      title: "Microsoft Partner",
      description: "Official Microsoft Partner with expertise in Azure cloud solutions and Microsoft technologies.",
      icon: Star,
      status: "Active",
      validUntil: "2025-12-31"
    },
    {
      title: "AWS Certified Solutions Architect",
      description: "Certified in designing and deploying scalable, reliable, and secure applications on AWS.",
      icon: Award,
      status: "Active",
      validUntil: "2025-12-31"
    },
    {
      title: "Google Cloud Professional",
      description: "Certified in Google Cloud Platform technologies and best practices for cloud-native development.",
      icon: CheckCircle,
      status: "Active",
      validUntil: "2025-12-31"
    }
  ]

  const qualityStandards = [
    "Agile Development Methodology",
    "Test-Driven Development (TDD)",
    "Continuous Integration/Continuous Deployment (CI/CD)",
    "Code Review Standards",
    "Security Best Practices",
    "Performance Optimization",
    "Accessibility Compliance (WCAG 2.1)",
    "Mobile-First Responsive Design"
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
          <div className="flex justify-center mb-6">
            <div className="bg-blue-100 p-4 rounded-full">
              <Award className="h-12 w-12 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Certifications</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional certifications and industry standards that demonstrate our commitment 
            to quality, security, and excellence in software development.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <motion.div 
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <cert.icon className="h-8 w-8 text-blue-600 mr-3" />
                      <CardTitle>{cert.title}</CardTitle>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      {cert.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {cert.description}
                  </CardDescription>
                  <p className="text-sm text-gray-500">
                    Valid until: {new Date(cert.validUntil).toLocaleDateString()}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Quality Standards */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Quality Standards & Best Practices</CardTitle>
              <CardDescription className="text-center">
                We adhere to industry-leading standards and methodologies to ensure 
                the highest quality deliverables for our clients.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {qualityStandards.map((standard) => (
                  <div key={standard} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{standard}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Commitment Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-blue-600 text-white rounded-lg p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Our Commitment to Excellence</h2>
          <p className="text-xl mb-8 text-blue-100">
            These certifications and standards are not just credentials—they represent our 
            ongoing commitment to delivering the highest quality software solutions while 
            maintaining the highest levels of security and reliability.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Compliance</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Security</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Quality Assured</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
