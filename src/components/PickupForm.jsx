import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, AlertCircle } from 'lucide-react'
import { useForm } from '../hooks/useForm'
import { CONTACT } from '../data'

export default function PickupForm() {
  const [form, setForm] = useState({
    name: '', phone: '', address: '', service: '', date: '', notes: '',
  })
  const { submit, loading, status, errMsg, successMsg } = useForm('pickup')

const handleSubmit = async (e) => {
    e.preventDefault()
    const ok = await submit({
      name: form.name,
      phone: form.phone,
      pickup_address: form.address,
      service_type: form.service || 'Not specified',
      preferred_date: form.date || 'Flexible',
      special_instructions: form.notes || 'None',
      botcheck: ''  // Honeypot
    })
    if (ok) setForm({ name: '', phone: '', address: '', service: '', date: '', notes: '' })
  }

  const set = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }))

  return (
    <div className="rounded-2xl p-7 shadow-lg bg-white border border-gray-200">
      <h2 className="font-heading text-2xl font-bold mb-1 text-gray-900">
        Schedule Free Pickup
      </h2>
      <p className="text-xs mb-6 text-gray-500">
        Fill the form — we'll confirm within 30 mins via WhatsApp
      </p>

      {/* Success Message */}
      {status === 'success' && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 px-4 py-3 rounded-xl text-sm flex items-center gap-2 bg-green-50 border border-green-200 text-green-600"
        >
          <CheckCircle size={16} />
          {successMsg || 'Pickup request submitted! Hum 30 min mein contact karenge.'}
        </motion.div>
      )}

      {/* Error Message */}
      {status === 'error' && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 px-4 py-3 rounded-xl text-sm flex items-center gap-2 bg-red-50 border border-red-200 text-red-600"
        >
          <AlertCircle size={16} />
          {errMsg || 'Kuch galat hua. Please call karein.'}
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Honeypot - Hidden field for spam protection */}
        <input type="text" name="botcheck" className="hidden" style={{ display: 'none' }} />

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-xs mb-1 block text-gray-500">Full Name *</label>
            <input 
              className="w-full px-4 py-3 rounded-xl text-sm border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" 
              placeholder="Apna naam daalo" 
              required
              value={form.name} 
              onChange={set('name')} 
            />
          </div>
          <div>
            <label className="text-xs mb-1 block text-gray-500">Phone Number *</label>
            <input 
              className="w-full px-4 py-3 rounded-xl text-sm border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" 
              type="tel" 
              placeholder="10-digit mobile" 
              required
              value={form.phone} 
              onChange={set('phone')} 
            />
          </div>
        </div>

        <div>
          <label className="text-xs mb-1 block text-gray-500">Pickup Address *</label>
          <textarea 
            className="w-full px-4 py-3 rounded-xl text-sm border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none resize-none transition-all" 
            rows={2} 
            placeholder="Tower/flat number ke saath complete address" 
            required
            value={form.address} 
            onChange={set('address')} 
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-xs mb-1 block text-gray-500">Service Type</label>
            <select 
              className="w-full px-4 py-3 rounded-xl text-sm border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all bg-white" 
              value={form.service} 
              onChange={set('service')}
            >
              <option value="">Select service</option>
              <option>Laundry – Organic Wash (₹110/kg)</option>
              <option>Laundry – Normal Wash (₹75/kg)</option>
              <option>Dry Cleaning</option>
              <option>Shoe Cleaning / Spa</option>
              <option>Jacket Cleaning</option>
              <option>Bag Cleaning</option>
              <option>Steam Ironing (₹5/pcs)</option>
              <option>Sofa / Carpet Cleaning</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="text-xs mb-1 block text-gray-500">Preferred Date</label>
            <input 
              className="w-full px-4 py-3 rounded-xl text-sm border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" 
              type="date" 
              min={new Date().toISOString().split('T')[0]}
              value={form.date} 
              onChange={set('date')} 
            />
          </div>
        </div>

        <div>
          <label className="text-xs mb-1 block text-gray-500">Special Instructions (Optional)</label>
          <input 
            className="w-full px-4 py-3 rounded-xl text-sm border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" 
            placeholder="e.g. 5kg clothes, delicate sarees, express..."
            value={form.notes} 
            onChange={set('notes')} 
          />
        </div>

        <motion.button 
          type="submit" 
          disabled={loading}
          className="w-full py-3.5 rounded-xl font-semibold text-sm transition-all disabled:opacity-60 bg-blue-600 text-white hover:bg-blue-700"
          whileHover={{ scale: loading ? 1 : 1.02 }} 
          whileTap={{ scale: 0.98 }}
        >
          {loading ? '⏳ Submitting...' : '🚚 Request Free Pickup'}
        </motion.button>

        <p className="text-center text-xs text-gray-500">
          Ya directly call karein:{' '}
          <a href={`tel:${CONTACT.phone1}`} className="text-blue-600 hover:underline">{CONTACT.phone1}</a>
          {' '}/{' '}
          <a href={`tel:${CONTACT.phone2}`} className="text-blue-600 hover:underline">{CONTACT.phone2}</a>
        </p>
      </form>
    </div>
  )
}
