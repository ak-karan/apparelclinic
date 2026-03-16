// src/hooks/useForm.js
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
      const endpoint = formType === 'pickup' ? '/api/pickup' : '/api/contact'
      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
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