import { motion } from 'framer-motion'
import { FileText, Scale, AlertTriangle, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useEffect } from 'react'
import { setPageMeta } from '@/utils'

export function Terms() {
  useEffect(() => {
    setPageMeta(
      'Terms of Service - Honor Tech LLC',
      'Read our terms of service and conditions for using Honor Tech LLC software development services. Understand our policies, rights, and obligations.'
    )
  }, [])

  const lastUpdated = "January 1, 2025"

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
              <FileText className="h-12 w-12 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These terms govern your use of Honor Tech LLC services and outline the rights 
            and responsibilities of both parties.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Last updated: {lastUpdated}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Acceptance of Terms */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CardHeader>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3" />
                  <CardTitle>Acceptance of Terms</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  By accessing and using Honor Tech LLC services, you accept and agree to be bound 
                  by the terms and provision of this agreement. If you do not agree to abide by 
                  the above, please do not use this service.
                </p>
                <p className="text-gray-600">
                  These terms apply to all visitors, users, and others who access or use our 
                  services, including but not limited to software development, consulting, 
                  and related services.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Services Description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Services Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Honor Tech LLC provides custom software development services including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Custom web application development</li>
                  <li>Point of Sale (POS) system development</li>
                  <li>Enterprise software solutions</li>
                  <li>AI and machine learning integration</li>
                  <li>Software consulting and architecture</li>
                  <li>System maintenance and support</li>
                  <li>Technical consulting and project management</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Payment Terms */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <div className="flex items-center">
                  <Scale className="h-6 w-6 text-blue-600 mr-3" />
                  <CardTitle>Payment Terms</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Project Payments</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Payment terms are specified in individual project agreements</li>
                    <li>Typically require 50% upfront payment for project initiation</li>
                    <li>Remaining balance due upon project completion and delivery</li>
                    <li>All payments are non-refundable unless otherwise specified</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Late Payments</h3>
                  <p className="text-gray-600">
                    Late payments may result in suspension of services and may incur 
                    additional fees. We reserve the right to charge interest on overdue amounts.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Intellectual Property */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Intellectual Property Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Client Ownership</h3>
                  <p className="text-gray-600 mb-4">
                    Upon full payment, clients own the custom software developed for their 
                    specific project. This includes source code, documentation, and related materials.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Our Rights</h3>
                  <p className="text-gray-600 mb-4">
                    Honor Tech LLC retains rights to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Proprietary frameworks and tools developed internally</li>
                    <li>Reusable code libraries and components</li>
                    <li>Portfolio rights to showcase completed work</li>
                    <li>Technical methodologies and processes</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Third-Party Components</h3>
                  <p className="text-gray-600">
                    Projects may include third-party components subject to their respective 
                    licenses. Clients are responsible for compliance with these licenses.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Confidentiality */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Confidentiality and Non-Disclosure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We are committed to maintaining the confidentiality of your business 
                  information and trade secrets. Our confidentiality obligations include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Protection of proprietary business information</li>
                  <li>Secure handling of sensitive data</li>
                  <li>Non-disclosure of client information to third parties</li>
                  <li>Employee confidentiality agreements</li>
                  <li>Secure development and communication practices</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Limitation of Liability */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card>
              <CardHeader>
                <div className="flex items-center">
                  <AlertTriangle className="h-6 w-6 text-blue-600 mr-3" />
                  <CardTitle>Limitation of Liability</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Honor Tech LLC's liability is limited to the amount paid for the specific 
                  service in question. We are not liable for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Indirect, incidental, or consequential damages</li>
                  <li>Loss of profits, data, or business opportunities</li>
                  <li>Damages resulting from third-party actions or services</li>
                  <li>Issues arising from client-provided requirements or specifications</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  This limitation does not apply to damages caused by gross negligence 
                  or intentional misconduct.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Termination */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Termination</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Either party may terminate this agreement with written notice. 
                  Upon termination:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Client is responsible for payment of work completed to date</li>
                  <li>We will deliver all completed work and materials</li>
                  <li>Confidentiality obligations remain in effect</li>
                  <li>Intellectual property rights are transferred as specified</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  For questions about these Terms of Service, please contact us:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> legal@honortechllc.com</p>
                  <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                  <p><strong>Address:</strong> Honor Tech LLC, United States</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
