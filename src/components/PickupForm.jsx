import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, AlertCircle } from 'lucide-react'
import { useForm } from '../hooks/useForm'
import { CONTACT } from '../data'

export default function PickupForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    service: '',
    date: '',
    notes: '',
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
      botcheck: '',
    })
    if (ok) {
      setForm({ name: '', phone: '', address: '', service: '', date: '', notes: '' })
    }
  }

  const set = (key) => (e) => setForm((prev) => ({ ...prev, [key]: e.target.value }))

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-lg">
      <h2 className="font-heading mb-1 text-2xl font-bold text-gray-900">Schedule Free Pickup</h2>
      <p className="mb-6 text-xs text-gray-500">Fill the form and we'll confirm within 30 mins via WhatsApp</p>

      {status === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 flex items-center gap-2 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-600"
        >
          <CheckCircle size={16} />
          {successMsg || 'Pickup request submitted! Hum 30 min mein contact karenge.'}
        </motion.div>
      )}

      {status === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600"
        >
          <AlertCircle size={16} />
          {errMsg || 'Kuch galat hua. Please call karein.'}
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="botcheck" className="hidden" style={{ display: 'none' }} />

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-1 block text-xs text-gray-500">Full Name *</label>
            <input
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={set('name')}
            />
          </div>
          <div>
            <label className="mb-1 block text-xs text-gray-500">Phone Number *</label>
            <input
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              type="tel"
              placeholder="10-digit mobile"
              required
              value={form.phone}
              onChange={set('phone')}
            />
          </div>
        </div>

        <div>
          <label className="mb-1 block text-xs text-gray-500">Pickup Address *</label>
          <textarea
            className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            rows={2}
            placeholder="Tower/flat number ke saath complete address"
            required
            value={form.address}
            onChange={set('address')}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-1 block text-xs text-gray-500">Service Type</label>
            <select
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              value={form.service}
              onChange={set('service')}
            >
              <option value="">Select service</option>
              <option>Laundry - Organic Wash (Rs 110/kg)</option>
              <option>Laundry - Normal Wash (Rs 75/kg)</option>
              <option>Dry Cleaning</option>
              <option>Shoe Cleaning / Spa</option>
              <option>Jacket Cleaning</option>
              <option>Bag Cleaning</option>
              <option>Steam Ironing (Rs 5/pcs)</option>
              <option>Sofa / Carpet Cleaning</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-xs text-gray-500">Preferred Date</label>
            <input
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              type="date"
              min={new Date().toISOString().split('T')[0]}
              value={form.date}
              onChange={set('date')}
            />
          </div>
        </div>

        <div>
          <label className="mb-1 block text-xs text-gray-500">Special Instructions (Optional)</label>
          <input
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            placeholder="e.g. 5kg clothes, delicate sarees, express..."
            value={form.notes}
            onChange={set('notes')}
          />
        </div>

        <motion.button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-blue-600 py-3.5 text-sm font-semibold text-white transition-all hover:bg-blue-700 disabled:opacity-60"
          whileHover={{ scale: loading ? 1 : 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {loading ? 'Submitting...' : 'Request Free Pickup'}
        </motion.button>

        <p className="text-center text-xs text-gray-500">
          Call Now {' '}
          <a href={`tel:${CONTACT.phone1}`} className="text-blue-600 hover:underline">
            {CONTACT.phone1}
          </a>{' '}
          /{' '}
          <a href={`tel:${CONTACT.phone2}`} className="text-blue-600 hover:underline">
            {CONTACT.phone2}
          </a>
        </p>
      </form>
    </div>
  )
}
