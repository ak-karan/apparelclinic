<<<<<<< HEAD
import { useState } from 'react'
import { CONTACT } from '../data'

const ENDPOINTS = {
  pickup: import.meta.env.VITE_PICKUP_FORM_ENDPOINT?.trim() || '/api/pickup',
  contact: import.meta.env.VITE_CONTACT_FORM_ENDPOINT?.trim() || '/api/contact',
}

function buildEmailMessage(formType, data) {
  if (formType === 'pickup') {
    return [
      'New pickup request',
      `Name: ${data.name || '-'}`,
      `Phone: ${data.phone || '-'}`,
      `Address: ${data.pickup_address || '-'}`,
      `Service: ${data.service_type || '-'}`,
      `Preferred date: ${data.preferred_date || '-'}`,
      `Instructions: ${data.special_instructions || '-'}`,
    ].join('\n')
  }

  return [
    'New contact enquiry',
    `Name: ${data.name || '-'}`,
    `Phone: ${data.phone || '-'}`,
    `Service: ${data.service_required || '-'}`,
    `Message: ${data.message || '-'}`,
  ].join('\n')
}

function buildEmailSubject(formType, data) {
  if (formType === 'pickup') {
    return `Pickup Request from ${data.name || 'Website Visitor'}`
  }

  return `Contact Enquiry from ${data.name || 'Website Visitor'}`
}

function openEmailFallback(formType, data) {
  const subject = encodeURIComponent(buildEmailSubject(formType, data))
  const body = encodeURIComponent(buildEmailMessage(formType, data))
  const url = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`
  window.location.href = url
}
=======
// src/hooks/useForm.js
import { useState } from 'react'
>>>>>>> 18afc02104a17f47e0666bbfa449ac03fefd4821

export function useForm(formType) {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)
  const [errMsg, setErrMsg] = useState('')
<<<<<<< HEAD
  const [successMsg, setSuccessMsg] = useState('')
=======
>>>>>>> 18afc02104a17f47e0666bbfa449ac03fefd4821

  const submit = async (data) => {
    setLoading(true)
    setStatus(null)
    setErrMsg('')
<<<<<<< HEAD
    setSuccessMsg('')

    const endpoint = ENDPOINTS[formType]

    try {
=======
    
    try {
      const endpoint = formType === 'pickup' ? '/api/pickup' : '/api/contact'
      
>>>>>>> 18afc02104a17f47e0666bbfa449ac03fefd4821
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
<<<<<<< HEAD
        body: JSON.stringify(data),
      })

      let result = null
      try {
        result = await response.json()
      } catch {
        result = null
      }

      if (response.ok && result?.success !== false) {
        setStatus('success')
        setSuccessMsg(result?.message || 'Form submitted successfully.')
        return true
      }

      setStatus('error')
      setErrMsg(result?.message || `Request failed with status ${response.status}.`)
      return false
    } catch {
      openEmailFallback(formType, data)
      setStatus('success')
      setSuccessMsg('Mail app opened because the email server is not reachable.')
      return true
=======
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
>>>>>>> 18afc02104a17f47e0666bbfa449ac03fefd4821
    } finally {
      setLoading(false)
    }
  }

<<<<<<< HEAD
  return { submit, loading, status, errMsg, successMsg }
}
=======
  return { submit, loading, status, errMsg }
}
>>>>>>> 18afc02104a17f47e0666bbfa449ac03fefd4821
