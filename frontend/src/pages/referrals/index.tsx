import { motion } from 'framer-motion'
import { Gift, Users, DollarSign, ArrowRight } from 'lucide-react'
import { Button } from '../../components/ui/button'
import { useEffect } from 'react'
import { setPageMeta } from '../../utils'

export function Referrals() {
  useEffect(() => {
    setPageMeta(
      'Refer & Earn Program - Earn 12% Commission | Honor Tech LLC',
      'Join our referral program and earn 12% commission on every project. Refer clients to Honor Tech LLC and start earning today.'
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
              <Gift className="h-12 w-12 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Refer & Earn Program</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Know someone who needs software? Earn 12% of the project value - whether that's 
            <strong className="text-blue-600"> $500 or $50,000</strong> per project. No cap. No fluff. Just results.
          </p>
        </motion.div>

        {/* How It Works */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Refer a Client</h3>
              <p className="text-gray-600">
                Connect us with someone who needs custom software solutions
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. We Deliver</h3>
              <p className="text-gray-600">
                Our team builds and delivers the custom solution
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. You Earn</h3>
              <p className="text-gray-600">
                Receive 12% of the project value as your commission
              </p>
            </div>
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-50 rounded-lg p-8 md:p-12 mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Program Benefits</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">For You</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <strong>12% commission</strong> on every project
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <strong>No cap</strong> on earnings potential
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <strong>No upfront costs</strong> or investment required
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <strong>Ongoing commissions</strong> for maintenance contracts
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">For Your Referrals</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <strong>Custom software solutions</strong> tailored to their needs
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <strong>U.S.-based development</strong> with quality assurance
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <strong>Ongoing support</strong> and maintenance
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <strong>Competitive pricing</strong> without hidden fees
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Commission Examples */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Commission Examples</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Small Project</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">$5,000</div>
              <div className="text-gray-600 mb-4">Project Value</div>
              <div className="text-2xl font-bold text-green-600">$600</div>
              <div className="text-gray-600">Your Commission</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center border-2 border-blue-600">
              <h3 className="text-xl font-semibold mb-4">Medium Project</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">$25,000</div>
              <div className="text-gray-600 mb-4">Project Value</div>
              <div className="text-2xl font-bold text-green-600">$3,000</div>
              <div className="text-gray-600">Your Commission</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Large Project</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">$100,000</div>
              <div className="text-gray-600 mb-4">Project Value</div>
              <div className="text-2xl font-bold text-green-600">$12,000</div>
              <div className="text-gray-600">Your Commission</div>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Start Earning?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join our referral program and start earning commissions on every successful project.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
            Refer & Earn
          </Button>
        </motion.div>
      </div>
    </div>
  )
} 