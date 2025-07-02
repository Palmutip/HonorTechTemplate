declare module 'react-google-recaptcha' {
  import { Component } from 'react'

  interface ReCAPTCHAProps {
    sitekey: string
    onChange?: (token: string | null) => void
    onExpired?: () => void
    onErrored?: () => void
    ref?: any
    theme?: 'light' | 'dark'
    size?: 'normal' | 'compact' | 'invisible'
    tabindex?: number
    onload?: () => void
    grecaptcha?: any
  }

  export default class ReCAPTCHA extends Component<ReCAPTCHAProps> {
    reset(): void
    execute(): void
    getValue(): string | null
  }
} 