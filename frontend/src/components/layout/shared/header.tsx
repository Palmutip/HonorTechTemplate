import { useState } from "react"
import { Link } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import '../../../assets/styles/header.css'
import logo from "/src/assets/img/logob2.png"
import { mainMenu } from "@/constants/data"

export function Header() {
  const [open, setOpen] = useState(false)
  
  return (
    <div className="w-full flex justify-between standard-header ">
      <div className="logo">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Honor Tech LLC - Custom Software Development Company" width="230" height="60" />
        </Link>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-6 items-center">
        {mainMenu.map((item) => (
          <Link
            key={item}
            to={item === "Home" ? "/" :`/${item.toLowerCase()}/`}
            className="font-medium text-black hover:text-muted-foreground"
          >
            {item}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant="ghost" className="h-[42px] w-auto size-auto" onClick={() => setOpen(!open)} aria-label="Open navigation menu">
              <Menu className="h-[42px] w-auto size-auto" />
            </Button>
          </PopoverTrigger>

          <AnimatePresence>
            {open && (
              <PopoverContent align="center" side="bottom" className="w-screen mt-2 border-none shadow-none bg-transparent p-0">
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0, paddingBlock: "20px" }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col items-center gap-7 bg-white shadow-md rounded-md"
                >
                  {mainMenu.map((item) => (
                    <Link
                      key={item}
                      to={item === "Home" ? "/" :`/${item.toLowerCase()}/`}
                      className="text-base font-medium text-black hover:text-yellow-600"
                      onClick={() => setOpen(false)} // Close the menu on item click
                    >
                      {item}
                    </Link>
                  ))}
                </motion.div>
              </PopoverContent>
            )}
          </AnimatePresence>
        </Popover>
      </div>
    </div>
  )
}
