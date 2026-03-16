<<<<<<< HEAD
import { useState } from 'react'

export function useForm(type) {
=======

import { useState } from 'react'

export function useForm(formType) {
>>>>>>> c7196ace7f15e8d0bf9a368520ebf09835ded31a
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)
  const [errMsg, setErrMsg] = useState('')

  const submit = async (data) => {
    setLoading(true)
    setStatus(null)
<<<<<<< HEAD
    
    try {
      // Temporary mailto fallback
      const mailtoLink = `mailto:akashkaran83@gmail.com?subject=${type} Form Submission&body=${Object.entries(data).map(([k, v]) => `${k}: ${v}`).join('%0A')}`
      window.location.href = mailtoLink
      
      setStatus('success')
      return true
    } catch (error) {
      setStatus('error')
      setErrMsg('Submission failed. Please try again.')
=======
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
>>>>>>> c7196ace7f15e8d0bf9a368520ebf09835ded31a
      return false
    } finally {
      setLoading(false)
    }
  }

  return { submit, loading, status, errMsg }
}