import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Card, CardContent } from './ui/card'
import { useFormValidation } from '../routes/hooks'
import { isValidEmail } from '../utils'
import { apiService } from '../services/api'
import ReCAPTCHA from 'react-google-recaptcha'

interface ReferralFormData {
  name: string
  email: string
}

const validationSchema = {
  name: (value: string) => {
    if (!value.trim()) return 'Name is required'
    if (value.trim().length < 2) return 'Name must be at least 2 characters'
    return null
  },
  email: (value: string) => {
    if (!value.trim()) return 'Email is required'
    if (!isValidEmail(value)) return 'Please enter a valid email address'
    return null
  }
}

export function ReferralForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    isValid,
    setTouched
  } = useFormValidation<ReferralFormData>(
    { name: '', email: '' },
    validationSchema
  )

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token)
    setSubmitError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!recaptchaToken) {
      setSubmitError('Please complete the reCAPTCHA verification')
      return
    }

    if (!isValid()) {
      // Mark all fields as touched to show errors
      setTouched({ name: true, email: true })
      return
    }

    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const formData = {
        ...values,
        recaptchaToken
      }

      await apiService.submitReferral(formData)
      setSubmitSuccess(true)
    } catch (error) {
      console.error('Referral submission error:', error)
      setSubmitError(
        error instanceof Error 
          ? error.message 
          : 'We had trouble processing your request. Please try again later.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-8"
      >
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <div className="text-green-600 text-6xl mb-4">✓</div>
          <h3 className="text-xl font-semibold text-green-800 mb-2">
            Thanks for joining!
          </h3>
          <p className="text-green-700">
            We'll be in touch shortly with your referral link and program details.
          </p>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md mx-auto"
    >
      <Card>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                value={values.name}
                onChange={(e) => handleChange('name', e.target.value)}
                onBlur={() => handleBlur('name')}
                placeholder="Your full name"
                className={errors.name && touched.name ? 'border-red-500' : ''}
              />
              {errors.name && touched.name && (
                <p className="text-sm text-red-600">{errors.name}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={values.email}
                onChange={(e) => handleChange('email', e.target.value)}
                onBlur={() => handleBlur('email')}
                placeholder="your.email@example.com"
                className={errors.email && touched.email ? 'border-red-500' : ''}
              />
              {errors.email && touched.email && (
                <p className="text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div className="flex justify-center">
              <ReCAPTCHA
                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'}
                onChange={handleRecaptchaChange}
              />
            </div>

            {submitError && (
              <div className="bg-red-50 border border-red-200 rounded-md p-3">
                <p className="text-sm text-red-600">{submitError}</p>
              </div>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#e0a802] hover:bg-[#e0a802]/90 text-black font-semibold"
            >
              {isSubmitting ? 'Joining...' : 'Join & Get My Link'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
} 