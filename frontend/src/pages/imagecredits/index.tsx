import { motion, useAnimation, useInView } from 'framer-motion'
import { Image, ExternalLink, Heart } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useEffect, useRef } from 'react'
import { setPageMeta } from '@/utils'
import { imageCredits } from '../../constants/data'

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

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8
    }
  }
}

export function ImageCredits() {
  useEffect(() => {
    setPageMeta(
      'Image Credits - Honor Tech LLC',
      'View the image credits and attributions for the images used on the Honor Tech LLC website.'
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

  const photographers = [
    {
      name: "Unsplash Contributors",
      description: "Professional photographers who share their work freely",
      specialties: ["Business", "Technology", "Office", "Lifestyle"],
      url: "https://unsplash.com/"
    },
    {
      name: "Pexels Community",
      description: "Talented photographers and videographers",
      specialties: ["Corporate", "Modern", "Clean", "Professional"],
      url: "https://www.pexels.com/"
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
          <div className="flex justify-center mb-6">
            <div className="bg-[#e0a802] p-4 rounded-full">
              <Image className="h-12 w-12 text-black-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Image Credits</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are grateful to the talented photographers and artists who have made their 
            work available for use.
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={animation}
          className="max-w-4xl mx-auto space-y-12"
        >
          {imageCredits.map((creditType) => (
            <motion.div key={creditType.type} variants={animation}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{creditType.type}</CardTitle>
                  <CardDescription>
                    Source:{" "}
                    <a 
                      href={creditType.sourceUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-600 hover:underline"
                    >
                      {creditType.source}
                    </a>{" "}
                    ({creditType.license})
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {creditType.items.length > 0 ? (
                    <ul className="space-y-2">
                      {creditType.items.map((item) => (
                        <li key={item.creator} className="flex items-center">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          <a 
                            href={item.creatorUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-gray-700 hover:text-blue-600"
                          >
                            {item.creator}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-600">
                      The icons used throughout the site are from the Lucide icon library, which is 
                      an open-source project. We appreciate the community for their contributions.
                    </p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {/* Photographers Section */}
          <motion.div variants={itemVariants}>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Special Thanks to Photographers</CardTitle>
                <CardDescription>
                  We're grateful to these talented photographers who share their work 
                  with the community and help make the web more beautiful.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {photographers.map((photographer) => (
                    <div key={photographer.name} className="text-center p-4 border border-gray-100 rounded-lg">
                      <h3 className="font-semibold mb-2">{photographer.name}</h3>
                      <p className="text-gray-600 mb-3 text-sm">{photographer.description}</p>
                      <div className="mb-3">
                        <p className="text-xs text-gray-500 mb-1">Specialties:</p>
                        <div className="flex flex-wrap justify-center gap-1">
                          {photographer.specialties.map((specialty) => (
                            <Badge key={specialty} variant="outline" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <a 
                        href={photographer.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:underline text-sm"
                      >
                        Visit Gallery <ExternalLink className="h-4 w-4 ml-1" />
                      </a>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Appreciation Section */}
          <motion.div variants={sectionVariants}>
            <Card className="bg-[#f1d9b5]">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  <Heart className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                <p className="text-gray-600">
                  We deeply appreciate all the creators who make their work available to the community. 
                  Your contributions help us create beautiful, engaging experiences for our users.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
