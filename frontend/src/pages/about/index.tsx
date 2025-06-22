import { motion } from 'framer-motion'
import { Users, Target, Award, Globe } from 'lucide-react'
import { useEffect } from 'react'
import { setPageMeta } from '../../utils'

export function About() {
  useEffect(() => {
    setPageMeta(
      'About Honor Tech LLC | History and who we are - Honor Tech LLC',
      'Learn about Honor Tech LLC, our mission, values, and commitment to delivering custom software solutions that help businesses grow and succeed.'
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Who We Are</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Honor Tech LLC is dedicated to helping businesses integrate modern technologies 
            that streamline workflows and boost productivity.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              Our team of experts tailors solutions to match the unique demands of your industry, 
              ensuring optimal results and a clear return on investment.
            </p>
            <p className="text-lg text-gray-600">
              From small-scale custom applications to enterprise-level software architectures, 
              we tackle challenges big or small.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">What We Do</h2>
            <p className="text-lg text-gray-600 mb-6">
              Our specialties range from designing scalable cloud environments to implementing 
              robust cybersecurity practices.
            </p>
            <p className="text-lg text-gray-600">
              We also offer ongoing support and maintenance to keep your systems running smoothly. 
              With years of industry expertise, our goal is to provide transformative technology 
              solutions that empower your business to reach new heights.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
              <p className="text-gray-600">Working together to deliver exceptional results</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">Pushing boundaries with cutting-edge technology</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-gray-600">Delivering excellence in every project</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-600">Serving clients worldwide with local expertise</p>
            </div>
          </div>
        </motion.div>

        {/* Value Proposition */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-blue-50 rounded-lg p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Our Value Proposition</h2>
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto">
            By choosing Honor Tech, you're partnering with a team that values transparency, 
            efficiency, and innovation. We focus on tangible outcomes, making sure every solution 
            we propose directly contributes to the success of your operations. Let us help you 
            discover new efficiencies and drive growth through cutting-edge tech solutions.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
