import { motion, useAnimation, useInView } from 'framer-motion'
import { Gift } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { setPageMeta } from '../../utils'
import { howItWorksSteps, referralBenefits, commissionExamples } from '../../constants/data'
import { ReferralForm } from '../../components/referral-form'

export function Referrals() {
  useEffect(() => {
    setPageMeta(
      'Refer & Earn Program - Earn 12% Commission | Honor Tech LLC',
      'Join our referral program and earn 12% commission of the signed contract value. Refer clients to Honor Tech LLC and start earning today.'
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
              <Gift className="h-12 w-12 text-black-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Refer & Earn Program</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Know someone who needs software? Earn 12% of the signed contract value - whether that&apos;s 
            <strong className="text-black-600"> $500 or $50,000</strong> per project. No cap. No fluff. Just results.
          </p>
        </motion.div>

        {/* How It Works */}
        <motion.div 
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={animation}
          className="mb-20"
        >
          <motion.h2 
            variants={animation}
            className="text-3xl font-bold text-center mb-12"
          >
            How It Works
          </motion.h2>
          <motion.div 
            variants={animation}
            className="grid md:grid-cols-3 gap-8"
          >
            {howItWorksSteps.map((step) => (
              <motion.div key={step.title} variants={animation} className="text-center">
                <div className="bg-[#f1d9b5] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-black-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Benefits */}
        <motion.div 
          variants={animation}
          className="bg-gray-50 rounded-lg p-8 md:p-12 mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Program Benefits</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">For You</h3>
              <ul className="space-y-3">
                {referralBenefits.forYou.map((benefit) => (
                  <li key={benefit.highlight} className="flex items-center">
                    <div className="w-2 h-2 bg-[#e0a802] rounded-full mr-3"></div>
                    <span><strong>{benefit.highlight}</strong>{benefit.rest}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">For Your Referrals</h3>
              <ul className="space-y-3">
                {referralBenefits.forReferrals.map((benefit) => (
                  <li key={benefit.highlight} className="flex items-center">
                    <div className="w-2 h-2 bg-[#e0a802] rounded-full mr-3"></div>
                    <span><strong>{benefit.highlight}</strong>{benefit.rest}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Commission Examples */}
        <motion.div 
          variants={animation}
          className="mb-20"
        >
          <motion.h2 
            variants={animation}
            className="text-3xl font-bold text-center mb-12"
          >
            Commission Examples
          </motion.h2>
          <motion.div 
            variants={animation}
            className="grid md:grid-cols-3 gap-8"
          >
            {commissionExamples.map((example) => (
              <motion.div 
                key={example.level} 
                variants={animation} 
                className={`bg-white p-6 rounded-lg shadow-lg text-center ${example.featured ? 'border-2 border-[#e0a802]' : ''}`}
              >
                <h3 className="text-xl font-semibold mb-4">{example.level}</h3>
                <div className="text-3xl font-bold text-black-600 mb-2">{example.value}</div>
                <div className="text-gray-600 mb-4">Project Value</div>
                <div className="text-2xl font-bold text-green-600">{example.commission}</div>
                <div className="text-gray-600">Your Commission</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Join the Program*/}
        <motion.section 
          variants={animation}
          className="py-5"
        >
          <h2 className="text-3xl font-bold text-center mb-4">Join the Program</h2>
          <ReferralForm />
        </motion.section>
      </div>
    </div>
  )
} 