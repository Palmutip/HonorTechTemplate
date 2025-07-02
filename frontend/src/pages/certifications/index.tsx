import { motion, useAnimation, useInView } from 'framer-motion'
import { Award, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useEffect, useRef } from 'react'
import { setPageMeta } from '@/utils'
import { certifications, qualityStandards } from '../../constants/data'

export function Certifications() {
  useEffect(() => {
    setPageMeta(
      'Certifications - Honor Tech LLC',
      'View our professional certifications, industry standards compliance, and quality assurance credentials that demonstrate our commitment to excellence in software development.'
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
              <Award className="h-12 w-12 text-black-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Certifications</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Honor Tech LLC is proud to be a verified and registered business with multiple state and federal entities. These credentials demonstrate our commitment to transparency, reliability, and excellence in service delivery.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div 
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={animation}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {certifications.map((cert) => (
            <motion.div 
              key={cert.title}
              variants={animation}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <cert.icon className="h-8 w-8 text-[#e0a802] mr-3" />
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
                  
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Meaning */}
        <motion.section 
          variants={animation}
          id="web-applications" 
          className="py-5"
        >
          <div className="mx-[40px]">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                What Does This Mean?
              </h2>
              <p className="text-lg text-gray-600 mb-3">
                Being a verified and registered business ensures our partners and clients that we meet rigorous standards for credibility and compliance. Our credentials signify:
              </p>
              <div className="text-lg text-gray-600 mb-3">
                <p>
                  ✔️ Reliable financial health and transparency
                </p><p>
                  ✔️ Eligibility for federal, state, and corporate contracts
                </p><p>
                  ✔️ Recognition as a trusted business partner
                </p>
              </div>
          </div>
        </motion.section>

        {/* Quality Standards */}
        <motion.div 
          variants={animation}
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
          variants={animation}
          className="bg-[#e0a802] text-black rounded-lg p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Our Commitment to Excellence</h2>
          <p className="text-xl mb-8 text-black-100">
            These certifications and standards are not just credentials—they represent our 
            ongoing commitment to delivering the highest quality software solutions while 
            maintaining the highest levels of security and reliability.
          </p>
          <motion.div 
            variants={animation}
            className="grid md:grid-cols-3 gap-6"
          >
            <motion.div variants={animation}>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-black-100">Compliance</div>
            </motion.div>
            <motion.div variants={animation}>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-black-100">Security</div>
            </motion.div>
            <motion.div variants={animation}>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-black-100">Quality Assured</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
