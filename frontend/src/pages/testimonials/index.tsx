import { motion, useAnimation, useInView } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import React, { useEffect, useRef } from 'react'
import { setPageMeta } from '../../utils'
import { testimonials } from '../../constants/data'

export function Testimonials() {
  useEffect(() => {
    setPageMeta(
      'Client Testimonials - Success Stories | Honor Tech LLC',
      'Read client testimonials and success stories from businesses that have transformed their operations with Honor Tech LLC custom software solutions.'
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">What Our Clients Say</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          At Honor Tech, we take great pride in the success of our clients.
          <br/>
          Here&apos;s what some of them have to say about working with us
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={animation}
          className="grid md:grid-cols-2 lg:grid-cols-1 gap-8 mb-16"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={animation}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <Quote className="h-8 w-8 text-blue-600 mr-4" />
                <div className="flex-1">
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.content.split('\n').map((line, i, arr) => (
                <React.Fragment key={i}>
                  {line}
                  {i < arr.length - 1 && (
                    <>
                      <br />
                      <br />
                    </>
                  )}
                </React.Fragment>
              ))}"</p>
              <div>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={animation}
          className="bg-[#e0a802] text-black rounded-lg p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Our Success Metrics</h2>
          <motion.div
            variants={animation}
            className="grid md:grid-cols-4 gap-8"
          >
            <motion.div variants={animation}>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-black-100">Client Satisfaction</div>
            </motion.div>
            <motion.div variants={animation}>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-black-100">Projects Completed</div>
            </motion.div>
            <motion.div variants={animation}>
              <div className="text-4xl font-bold mb-2">40%</div>
              <div className="text-black-100">Average Efficiency Gain</div>
            </motion.div>
            <motion.div variants={animation}>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-black-100">Support Available</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
} 