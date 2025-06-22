import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { useEffect } from 'react'
import { setPageMeta } from '../../utils'

export function Testimonials() {
  useEffect(() => {
    setPageMeta(
      'Client Testimonials - Success Stories | Honor Tech LLC',
      'Read client testimonials and success stories from businesses that have transformed their operations with Honor Tech LLC custom software solutions.'
    )
  }, [])

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "Honor Tech transformed our business operations with their custom software solution. The team was professional, responsive, and delivered exactly what we needed. Our efficiency has increased by 40% since implementation.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Operations Manager, Retail Solutions",
      content: "The POS system they built for us is incredible. It's intuitive, reliable, and has streamlined our entire sales process. The integration with our payment processors was seamless.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Director of IT, Enterprise Corp",
      content: "Working with Honor Tech was a game-changer for our enterprise. Their AI-driven analytics platform has given us insights we never had before. The ROI was immediate and substantial.",
      rating: 5
    },
    {
      name: "David Thompson",
      role: "Founder, StartupXYZ",
      content: "As a startup, we needed a partner who could scale with us. Honor Tech delivered a solution that grows with our business. Their ongoing support has been invaluable.",
      rating: 5
    },
    {
      name: "Lisa Wang",
      role: "CTO, Manufacturing Co.",
      content: "The workflow automation system they implemented has eliminated bottlenecks we didn't even know we had. Our production efficiency has improved dramatically.",
      rating: 5
    },
    {
      name: "Robert Davis",
      role: "VP of Operations, Service Industry",
      content: "Honor Tech's custom web application has revolutionized how we serve our clients. The real-time collaboration features have made remote work seamless for our team.",
      rating: 5
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Testimonials</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our clients about how Honor Tech has transformed their businesses 
            with custom software solutions.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <Quote className="h-8 w-8 text-blue-600 mr-2" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.content}"
              </p>
              <div>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-blue-600 text-white rounded-lg p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Our Success Metrics</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">40%</div>
              <div className="text-blue-100">Average Efficiency Gain</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 