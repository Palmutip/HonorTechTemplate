import { motion, useAnimation, useInView } from 'framer-motion'
import { Shield, Eye, Lock, FileText, Phone, Scale } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useEffect, useRef } from 'react'
import { setPageMeta } from '@/utils'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
}

export function Privacy() {
  useEffect(() => {
    setPageMeta(
      'Privacy Policy - Honor Tech LLC',
      'Read the Privacy Policy for Honor Tech LLC. Understand how we collect, use, and protect your personal and business data.'
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

  const lastUpdated = "July 1, 2025"

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
              <Shield className="h-12 w-12 text-black-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your privacy is important to us. This policy describes how Honor Tech LLC collects, 
            uses, and protects your personal information.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Last updated: {lastUpdated}
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={animation}
          className="max-w-4xl mx-auto space-y-8"
        >
          {/* Information We Collect */}
          <motion.div variants={itemVariants}>
            <Card>
              <CardHeader>
                <div className="flex items-center">
                  <Eye className="h-6 w-6 text-[#e0a802] mr-3" />
                  <CardTitle>Information We Collect</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Personal Information</h3>
                  <p className="text-gray-600 mb-4">
                    We may collect personal information such as your name, email address, phone number, 
                    company name, and project details when you:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Contact us through our website forms</li>
                    <li>Request a quote or consultation</li>
                    <li>Sign up for our newsletter</li>
                    <li>Engage in business communications with us</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Technical Information</h3>
                  <p className="text-gray-600">
                    We automatically collect certain technical information including IP addresses, 
                    browser type, operating system, and usage patterns to improve our website 
                    and services.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* How We Use Information */}
          <motion.div variants={itemVariants}>
            <Card>
              <CardHeader>
                <div className="flex items-center">
                  <FileText className="h-6 w-6 text-[#e0a802] mr-3" />
                  <CardTitle>How We Use Your Information</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Provide and improve our software development services</li>
                  <li>Communicate with you about projects and services</li>
                  <li>Send you relevant updates and newsletters (with your consent)</li>
                  <li>Respond to your inquiries and support requests</li>
                  <li>Analyze website usage to improve user experience</li>
                  <li>Comply with legal obligations and protect our rights</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Information Sharing */}
          <motion.div variants={itemVariants}>
            <Card>
              <CardHeader>
                <div className="flex items-center">
                  <Lock className="h-6 w-6 text-[#e0a802] mr-3" />
                  <CardTitle>Information Sharing and Disclosure</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We do not sell, trade, or rent your personal information to third parties. 
                  We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>With your explicit consent</li>
                  <li>To comply with legal requirements or court orders</li>
                  <li>To protect our rights, property, or safety</li>
                  <li>With trusted service providers who assist in our operations (under strict confidentiality agreements)</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Data Security */}
          <motion.div variants={itemVariants}>
            <Card>
              <CardHeader>
                <div className="flex items-center">
                  <Shield className="h-6 w-6 text-[#e0a802] mr-3" />
                  <CardTitle>Data Security</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We implement appropriate technical and organizational security measures to 
                  protect your personal information against unauthorized access, alteration, 
                  disclosure, or destruction.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Technical Measures</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4 text-sm">
                      <li>SSL/TLS encryption</li>
                      <li>Secure data centers</li>
                      <li>Regular security audits</li>
                      <li>Access controls</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Organizational Measures</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4 text-sm">
                      <li>Employee training</li>
                      <li>Confidentiality agreements</li>
                      <li>Data handling policies</li>
                      <li>Incident response procedures</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Your Rights */}
          <motion.div variants={itemVariants}>
            <Card>
              <CardHeader>
                <div className="flex items-center">
                  <Scale className="h-6 w-6 text-[#e0a802] mr-3" />
                  <CardTitle>Your Rights and Choices</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Access and review your personal information</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent for data processing</li>
                  <li>Request data portability</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants}>
            <Card className="bg-[#f1d9b5]">
              <CardHeader>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-black mr-3" />
                  <CardTitle>Contact Us</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-black-600 mb-4">
                  If you have any questions about this Privacy Policy or our data practices, 
                  please contact us:
                </p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> privacy@honortechllc.com</p>
                  <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                  <p><strong>Address:</strong> Honor Tech LLC, United States</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
