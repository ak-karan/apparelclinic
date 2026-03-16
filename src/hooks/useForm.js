
import { useState } from 'react'

export function useForm(formType) {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)
  const [errMsg, setErrMsg] = useState('')

  const submit = async (data) => {
    setLoading(true)
    setStatus(null)
    setErrMsg('')
    
    try {
      // Web3Forms API
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // Replace with your actual key
          subject: `New ${formType} request from Apparel Clinic`,
          from_name: 'Apparel Clinic Website',
          ...data
        })
      })
      
      const result = await response.json()
      
      if (result.success) {
        setStatus('success')
        return true
      } else {
        setStatus('error')
        setErrMsg(result.message || 'Something went wrong')
        return false
      }
    } catch (error) {
      setStatus('error')
      setErrMsg('Network error. Please try again.')
      return false
    } finally {
      setLoading(false)
    }
  }

  return { submit, loading, status, errMsg }
}