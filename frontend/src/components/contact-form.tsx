import { useState } from 'react'
import { useFormValidation } from '../routes/hooks'
import { isValidEmail } from '../utils'
import { Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { referralSources } from '../constants/data'
import { apiService } from '../services/api'
import ReCAPTCHA from 'react-google-recaptcha'

interface ContactFormData {
    firstName: string
    email: string
    referralSource: string
    message: string
}

const validationSchema = {
    firstName: (value: string) => {
        if (!value.trim()) return 'First name is required'
        if (value.trim().length < 2) return 'First name must be at least 2 characters'
        return null
    },
    email: (value: string) => {
        if (!value.trim()) return 'Email is required'
        if (!isValidEmail(value)) return 'Please enter a valid email address'
        return null
    },
    referralSource: (value: string) => {
        if (!value.trim()) return 'Please select how you heard about us'
        return null
    },
    message: (value: string) => {
        if (!value.trim()) return 'Message is required'
        if (value.trim().length < 60) return 'Message must be at least 60 characters'
        return null
    }
}


export function ContactForm() {
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
    } = useFormValidation<ContactFormData>(
        { firstName: '', email: '', referralSource: '', message: '' },
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
            setTouched({ firstName: true, email: true, referralSource: true, message: true })
            return
        }

        setIsSubmitting(true)
        setSubmitError(null)

        try {
            const formData = {
                ...values,
                recaptchaToken
            }

            await apiService.submitContact(formData)
            setSubmitSuccess(true)
        } catch (error) {
            console.error('Contact submission error:', error)
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
            <Card>
                <CardContent className="text-center py-8">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <div className="text-green-600 text-6xl mb-4">✓</div>
                        <h3 className="text-xl font-semibold text-green-800 mb-2">
                            Message Sent Successfully!
                        </h3>
                        <p className="text-green-700">
                            Thank you for contacting us. We'll get back to you within 24 hours.
                        </p>
                    </div>
                </CardContent>
            </Card>
        )
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="firstName">First Name *</Label>
                            <Input
                                id="firstName"
                                type="text"
                                value={values.firstName}
                                onChange={(e) => handleChange('firstName', e.target.value)}
                                onBlur={() => handleBlur('firstName')}
                                placeholder="John"
                                className={errors.firstName && touched.firstName ? 'border-red-500' : ''}
                            />
                            {errors.firstName && touched.firstName && (
                                <p className="text-sm text-red-600">{errors.firstName}</p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input
                                id="lastName"
                                type="text"
                                placeholder="Doe"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                            id="email"
                            type="email"
                            value={values.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                            onBlur={() => handleBlur('email')}
                            placeholder="john@example.com"
                            className={errors.email && touched.email ? 'border-red-500' : ''}
                        />
                        {errors.email && touched.email && (
                            <p className="text-sm text-red-600">{errors.email}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="PhoneNumber">Phone Number</Label>
                        <Input
                            id="PhoneNumber"
                            type="tel"
                            placeholder="Your phone number"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                            id="company"
                            type="text"
                            placeholder="Your company name"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="referralSource">How did you hear about us? *</Label>
                        <Select
                            value={values.referralSource}
                            onValueChange={(value) => handleChange('referralSource', value)}
                        >
                            <SelectTrigger className={errors.referralSource && touched.referralSource ? 'border-red-500' : ''}>
                                <SelectValue placeholder="How did you hear about us?" />
                            </SelectTrigger>
                            <SelectContent>
                                {referralSources.map((type) => (
                                    <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        {errors.referralSource && touched.referralSource && (
                            <p className="text-sm text-red-600">{errors.referralSource}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                            id="message"
                            rows={5}
                            value={values.message}
                            onChange={(e) => handleChange('message', e.target.value)}
                            onBlur={() => handleBlur('message')}
                            placeholder="Tell us how we can assist you... (minimum 60 characters)"
                            className={errors.message && touched.message ? 'border-red-500' : ''}
                        />
                        <div className="flex justify-between items-center">
                            {errors.message && touched.message && (
                                <p className="text-sm text-red-600">{errors.message}</p>
                            )}
                            <p className="text-sm text-gray-500 ml-auto">
                                {values.message.length}/60 characters
                            </p>
                        </div>
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
                        className="w-full text-black bg-[#e0a802] hover:bg-[#e0a802]/75"
                    >
                        <Send className="h-5 w-5 mr-2" />
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}