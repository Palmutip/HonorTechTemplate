import { motion } from 'framer-motion'
import { Image, ExternalLink, Heart } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useEffect } from 'react'
import { setPageMeta } from '@/utils'

export function ImageCredits() {
  useEffect(() => {
    setPageMeta(
      'Image Credits - Honor Tech LLC',
      'Attribution and credits for images, icons, and visual assets used on the Honor Tech LLC website. We respect and acknowledge the work of talented creators.'
    )
  }, [])

  const imageCredits = [
    {
      category: "Icons and UI Elements",
      items: [
        {
          name: "Lucide React Icons",
          description: "Beautiful & consistent icon toolkit made by the community",
          license: "MIT License",
          author: "Lucide Community",
          url: "https://lucide.dev/",
          usage: "Navigation icons, feature icons, and UI elements throughout the website"
        },
        {
          name: "Heroicons",
          description: "A set of beautiful hand-crafted SVG icons",
          license: "MIT License",
          author: "Tailwind CSS Team",
          url: "https://heroicons.com/",
          usage: "Additional UI icons and decorative elements"
        }
      ]
    },
    {
      category: "Stock Photography",
      items: [
        {
          name: "Unsplash",
          description: "Beautiful free images and photos",
          license: "Unsplash License",
          author: "Various photographers",
          url: "https://unsplash.com/",
          usage: "Background images and hero section visuals"
        },
        {
          name: "Pexels",
          description: "Free stock photos and videos",
          license: "Pexels License",
          author: "Various photographers",
          url: "https://www.pexels.com/",
          usage: "Additional background and decorative images"
        }
      ]
    },
    {
      category: "Graphics and Illustrations",
      items: [
        {
          name: "Custom Graphics",
          description: "Original graphics and illustrations created for Honor Tech LLC",
          license: "Proprietary",
          author: "Honor Tech LLC Design Team",
          url: "",
          usage: "Company logos, custom illustrations, and branded graphics"
        },
        {
          name: "SVG Patterns",
          description: "Subtle background patterns and textures",
          license: "MIT License",
          author: "Various contributors",
          url: "https://www.svgbackgrounds.com/",
          usage: "Background patterns and decorative elements"
        }
      ]
    }
  ]

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
            <div className="bg-blue-100 p-4 rounded-full">
              <Image className="h-12 w-12 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Image Credits</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe in giving proper credit to the talented creators whose work 
            helps make our website beautiful and engaging.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Image Credits by Category */}
          {imageCredits.map((category) => (
            <motion.div 
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">{category.category}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.items.map((item) => (
                    <div key={item.name} className="border-b border-gray-100 pb-6 last:border-b-0">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
                          <p className="text-gray-600 mb-2">{item.description}</p>
                        </div>
                        <Badge variant="secondary" className="ml-4">
                          {item.license}
                        </Badge>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p><strong>Author:</strong> {item.author}</p>
                          <p><strong>Usage:</strong> {item.usage}</p>
                        </div>
                        <div className="text-right">
                          {item.url && (
                            <a 
                              href={item.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-blue-600 hover:underline"
                            >
                              Visit Source <ExternalLink className="h-4 w-4 ml-1" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {/* Photographers Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
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
                        View Portfolio <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* License Information */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle>License Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">MIT License</h3>
                    <p className="text-gray-600 text-sm">
                      Permits commercial use, modification, distribution, and private use. 
                      Requires license and copyright notice to be included in all copies.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Unsplash License</h3>
                    <p className="text-gray-600 text-sm">
                      Allows free use for commercial and noncommercial purposes. 
                      No permission needed, though attribution is appreciated.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Pexels License</h3>
                    <p className="text-gray-600 text-sm">
                      Free to use for commercial and noncommercial purposes. 
                      Attribution is not required but appreciated.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-red-500 mr-2" />
                  <p className="text-lg font-semibold">Thank You to All Contributors!</p>
                </div>
                <p className="text-gray-600 mb-4">
                  If you're a creator whose work appears on our site and you'd like 
                  to be credited differently or have any questions, please contact us.
                </p>
                <a 
                  href="mailto:credits@honortechllc.com" 
                  className="inline-flex items-center text-blue-600 hover:underline"
                >
                  Contact Us About Credits
                </a>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
