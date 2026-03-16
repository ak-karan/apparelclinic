import { useState } from 'react'

export function useForm(type) {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)
  const [errMsg, setErrMsg] = useState('')

  const submit = async (data) => {
    setLoading(true)
    setStatus(null)
    
    try {
      // Temporary mailto fallback
      const mailtoLink = `mailto:akashkaran83@gmail.com?subject=${type} Form Submission&body=${Object.entries(data).map(([k, v]) => `${k}: ${v}`).join('%0A')}`
      window.location.href = mailtoLink
      
      setStatus('success')
      return true
    } catch (error) {
      setStatus('error')
      setErrMsg('Submission failed. Please try again.')
      return false
    } finally {
      setLoading(false)
    }
  }

  return { submit, loading, status, errMsg }
}