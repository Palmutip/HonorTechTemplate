import { motion, useAnimation, useInView } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Code, Building2, ShoppingCart, ArrowLeft, Lightbulb } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { setPageMeta } from '@/utils'
import { coverHomePage } from "@/constants/data"
import { Link } from "react-router-dom";

export function Home() {
  useEffect(() => {
    setPageMeta(
      'Honor Tech LLC - Custom Software Development Company',
      'Custom software solutions for businesses. Web applications, POS systems, and enterprise solutions. Transform your business with our tailored software development services.'
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

  // Carousel state for infinite/fade
  const [index, setIndex] = useState(0)
  const handlePrev = () => setIndex((prev) => (prev === 0 ? coverHomePage.length - 1 : prev - 1))
  const handleNext = () => setIndex((prev) => (prev === coverHomePage.length - 1 ? 0 : prev + 1))

  useEffect(() => {
    const interval = setInterval(handleNext, 5000)
    return () => clearInterval(interval)
  }, [index])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-12 text-center bg-gray-50"
      >
        <h1
          className="text-4xl font-bold text-gray-900 mb-4">
          Software That Grows Your Business
        </h1>
        <p className="text-lg font-semibold text-gray-800 max-w-xl mx-auto" >
          Custom-built solutions to optimize workflows, automate processes, and enhance business efficiency.
        </p>
        <div className="mt-6">
          <Link to="/contact">
            <Button
              className="bg-[#d7a31d] text-black hover:bg-[#e0a802] text-lg px-6 py-3 border-none">
              Start a Project
            </Button>
          </Link>
        </div>
      </motion.section>

      {/* Carousel */}
      <section className="relative">
        <div className="mx-auto">
          <div className="relative mx-auto h-96">
            {coverHomePage.map((slide, i) => (
              <motion.div
                key={slide.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: i === index ? 1 : 0 }}
                transition={{ duration: 0.6 }}
                className={`absolute inset-0 w-full h-full ${i === index ? 'z-10' : 'z-0 pointer-events-none'}`}
                style={{ pointerEvents: i === index ? 'auto' : 'none' }}
              >
                <img
                  src={slide.img}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
                <Link
                  to={slide.href}
                  className="absolute left-1/2 -translate-x-1/2 bottom-8 w-[85%]"
                  tabIndex={i === index ? 0 : -1}
                >
                  <Button
                    size="lg"
                    className="w-full bg-gray-800/75 text-white hover:bg-gray-700/50 text-lg px-8 py-4 shadow-lg flex items-center gap-3"
                  >
                    {slide.label}
                  </Button>
                </Link>
              </motion.div>
            ))}
            {/* Carousel Controls */}
            <Button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-gray-800/50 hover:bg-gray-800/70 rounded-md p-2"
              aria-label="Previous"
              type="button"
            >
              <ArrowLeft className="text-white" />
            </Button>
            <Button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-gray-800/50 hover:bg-gray-800/70 rounded-md p-2"
              aria-label="Next"
              type="button"
            >
              <ArrowRight className="text-white" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <motion.section 
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={animation}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div variants={animation}>
              <Card className="h-full hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center">
                    <Code className="h-8 w-8 text-[#e0a802] mr-3" />
                    <CardTitle>Web Applications</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Custom mobile-friendly web applications for business efficiency.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={animation}>
              <Card className="h-full hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center">
                    <Building2 className="h-8 w-8 text-[#e0a802] mr-3" />
                    <CardTitle>Enterprise Solutions</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Enterprise software solutions and workflow automation.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={animation}>
              <Card className="h-full hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center">
                    <ShoppingCart className="h-8 w-8 text-[#e0a802] mr-3" />
                    <CardTitle>Point of Sale</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Advanced Point of Sale Systems with integrated payment processing.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Service Sections */}
      <div className="container mx-auto px-4">
        
        {/* Web Applications */}
        <motion.section 
          variants={animation}
          id="web-applications" 
          className="py-5"
        >
          <div className="mx-[40px]">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Web Applications
              </h2>
              <p className="text-lg text-gray-600 mb-3">
                Our custom web applications help businesses streamline operations, improve productivity, and automate workflows. Whether you need a client portal, internal dashboard, or a specialized workflow system, we build scalable solutions designed for long-term success.
              </p>
              <p className="text-lg text-gray-600 mb-3">
                We emphasize security, intuitive design, and real-time data processing to ensure seamless integrations and faster decision-making. Our expertise includes cloud-based platforms, data-driven reporting tools, and workflow automation to enhance efficiency.
              </p>
              <div className="flex items-start gap-2 text-lg text-gray-600 mb-3">
                <Lightbulb className="text-black-400 mt-1" size={20} />
                <div>
                  <strong>Ideal for: </strong><br />
                </div>
              </div>
              <p className="text-lg text-gray-600 mb-2">
                Businesses needing centralized data systems, real-time collaboration tools, or performance-driven applications.
              </p>
          </div>
        </motion.section>

        {/* Point of Sale */}
        <motion.section 
          variants={animation}
          id="point-of-sale" 
          className="py-5 bg-gray-50"
        >
          <div className="mx-[40px]">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Point of Sale Systems
              </h2>
              <p className="text-lg text-gray-600 mb-3">
                A custom-built Point of Sale (POS) system should be more than just payment processing—it should be the backbone of your entire business workflow. At Honor Tech LLC, we design fully integrated business management applications that seamlessly incorporate Stripe or similar payment platforms, while also handling inventory tracking, location-based scanning, and real-time reporting tailored to your specific needs.
              </p>
              <p className="text-lg text-gray-600 mb-3">
                Rather than locking you into a proprietary POS, we build scalable, cloud-based applications that let you manage sales, inventory, and customer interactions from one unified system—without hidden transaction fees or restrictive vendor contracts. You maintain full control, while your customers' transactions flow securely through trusted payment processors like Stripe.
              </p>
              <div className="text-lg text-gray-600 mb-3">
                <p>
                  ✔️ Cloud-based POS – Manage multiple locations, employees, and sales data from anywhere.
                </p><p>
                  ✔️ Integrated payment processing – Stripe and other processors seamlessly built into your workflow.
                </p><p>
                  ✔️ Real-time inventory & location scanning – Ensure accuracy and streamline operations.
                </p><p>
                  ✔️ Automated sales & financial reporting – Gain deep insights to optimize your business strategy.
                </p>
              </div>
              <div className="flex items-start gap-2 text-lg text-gray-600 mb-3">
                <Lightbulb className="text-black-400 mt-1" size={20} />
                <div>
                  <strong>Ideal for: </strong><br />
                </div>
              </div>
              <div className="flex items-start gap-2 text-lg text-gray-600 mb-3">
                <ul>
                    <li>
                      Businesses looking for a custom, all-in-one POS solution that works exactly how they need—without the limitations of traditional POS systems.
                    </li>
                    <li>
                      Companies that want a fully integrated sales, inventory, and payment system while keeping payment processing costs passed directly to customers.
                    </li>
                </ul>
              </div>
          </div>
        </motion.section>

        {/* Enterprise Solutions */}
        <motion.section 
          variants={animation}
          id="enterprise-solutions" 
          className="py-5"
        >
          <div className="mx-[40px]">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Enterprise Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-3">
                Enterprise businesses require powerful, scalable software that can handle complex workflows, data security, and compliance regulations. We build solutions that integrate seamlessly across departments and automate mission-critical processes.
              </p>
              <div className="text-lg text-gray-600 mb-3">
                <ul>
                    <li>Enterprise Resource Planning (ERP) for full-scale business management.</li>
                    <li>AI-driven analytics for smarter business insights.</li>
                    <li>Automated workflow systems to eliminate bottlenecks.</li>
                </ul>
              </div>
              <div className="flex items-start gap-2 text-lg text-gray-600 mb-3">
                <Lightbulb className="text-black-400 mt-1" size={20} />
                <div>
                  <strong>Ideal for: </strong><br />
                </div>
              </div>
              <p className="text-lg text-gray-600 mb-2">
                Large organizations needing automation, process optimization, and AI-driven efficiency improvements.
              </p>
          </div>
        </motion.section>
      </div>     

      {/* About Section */}
      <motion.section 
        variants={animation}
        className="container mx-auto mb-10 px-4"
      >
        <div className="mx-20 my-5 bg-gray-50 items-start gap-2 text-lg mb-3 text-center rounded-[12px] border border-[#ddd] shadow-lg">
          <div className="px-20 pt-10">
          <h2 className="text-3xl md:text-2xl font-bold mb-3">
            Who We Are
          </h2>
          <p className="text-lg text-gray-600 mb-5">
            Honor Tech LLC is dedicated to helping businesses integrate modern technologies that streamline workflows and boost productivity. Our team of experts tailors solutions to match the unique demands of your industry, ensuring optimal results and a clear return on investment. From small-scale custom applications to enterprise-level software architectures, we tackle challenges big or small.
          </p>
          </div>
          <div className="px-20">
          <h2 className="text-3xl md:text-2xl font-bold mb-3">
            What We Do
          </h2>
          <p className="text-lg text-gray-600 mb-5">
            Our specialties range from designing scalable cloud environments to implementing robust cybersecurity practices. We also offer ongoing support and maintenance to keep your systems running smoothly. With years of industry expertise, our goal is to provide transformative technology solutions that empower your business to reach new heights.
          </p>
          </div>
          <div className="px-20 pb-10">
          <h2 className="text-3xl md:text-2xl font-bold mb-3">
            Our Value Proposition
          </h2>
          <p className="text-lg text-gray-600 mb-5">
            By choosing Honor Tech, you're partnering with a team that values transparency, efficiency, and innovation. We focus on tangible outcomes, making sure every solution we propose directly contributes to the success of your operations. Let us help you discover new efficiencies and drive growth through cutting-edge tech solutions.
          </p>
          </div>
        </div>
      </motion.section>

      {/* Referrals */}
      <motion.section 
        variants={animation}
        className="container text-center"
      >
        <div className="p-4 bg-[#d7a31d] text-dark rounded shadow-sm">
            <h3 className="text-3xl md:text-2xl font-bold">
              Know someone who needs software?
            </h3>
            <p className="mb-3">
              Earn 12% of the project value - whether that's <strong>$500 or $50,000</strong> per project. No cap. No fluff. Just results.
            </p>
            <Link to="/referrals">
              <Button
                className="bg-gray-800 text-white hover:bg-gray-700 text-lg px-8 py-4 shadow-lg items-center gap-3">
                Refer &amp; Earn
              </Button>
            </Link>
        </div>
      </motion.section>

      {/* Value Proposition */}
      <motion.section 
        variants={animation}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              variants={animation}
              className="text-3xl md:text-4xl font-bold mb-8"
            >
              Trusted U.S.-Based Custom Software Company
            </motion.h2>
            <motion.p 
              variants={animation}
              className="text-lg text-gray-600 mb-8"
            >
              Known for blending affordable rates with American oversight, Honor Tech is ideal for businesses 
              that want reliable software, real communication, and support that doesn't disappear after delivery.
            </motion.p>
            <motion.div
              variants={animation}
              className="grid mb-8 md:grid-cols-3 gap-6"
            >
              <motion.div variants={animation}>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#e0a802] mb-2">100%</div>
                      <div className="text-gray-600">U.S. Based</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={animation}>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#e0a802] mb-2">24/7</div>
                      <div className="text-gray-600">Support</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={animation}>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#e0a802] mb-2">100%</div>
                      <div className="text-gray-600">Quality Guaranteed</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
            <motion.p
              variants={animation}
              className="text-lg text-left text-gray-600 mb-8">
              We offer high-quality development without the inflated agency price tag. Known for blending affordable rates with American oversight, Honor Tech is ideal for businesses that want reliable software, real communication, and support that doesn't disappear after delivery. Every project includes thorough testing, transparent progress updates, and guaranteed quality backed by real U.S. leadership. If you need a dependable partner for custom apps, process automation, or system integrations (without overpaying or outsourcing blindly), Honor Tech is where smart companies turn.
            </motion.p>
          </div>
        </div>
      </motion.section>
    </div>
  )
}