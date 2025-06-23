import { motion, useAnimation, useInView } from 'framer-motion'
import { AlertTriangle, Home, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { setPageMeta } from '@/utils'

export function NotFound() {
  const navigate = useNavigate()

  useEffect(() => {
    setPageMeta(
      '404 Not Found - Honor Tech LLC',
      'The page you are looking for does not exist. Navigate back to the Honor Tech LLC homepage.'
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
    <div className="min-h-screen flex items-center justify-center">
      <motion.div 
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={animation}
        className="text-center"
      >
        <motion.div variants={animation} className="flex justify-center mb-6">
          <div className="bg-[#e0a802] p-4 rounded-full">
            <AlertTriangle className="h-12 w-12 text-black-600" />
          </div>
        </motion.div>
        
        <motion.h1 
          variants={animation} 
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          404 - Page Not Found
        </motion.h1>
        
        <motion.p 
          variants={animation} 
          className="text-xl text-gray-600 max-w-xl mx-auto mb-8"
        >
          The page you are looking for does not exist. It might have been moved or deleted.
        </motion.p>
        
        <motion.div 
          variants={animation} 
          className="flex justify-center gap-4"
        >
          <Button variant="outline" onClick={() => navigate(-1)}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
          <Button asChild className="bg-[#e0a802] text-black hover:bg-[#e0a802]/75">
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Go to Homepage
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
} 