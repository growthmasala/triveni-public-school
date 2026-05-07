'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'

type FormData = { name: string; phone: string; email: string; subject: string; message: string }

const subjects = ['Admission Enquiry','Fee Information','Transport Routes','Academic Information','Schedule a Campus Visit','Parent Concern','Other']

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = async (data: FormData) => {
    await fetch('https://formspree.io/f/REPLACE_WITH_FORMSPREE_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    setSubmitted(true)
    reset()
  }

  if (submitted) return (
    <div className="bg-white rounded-lg p-12 shadow-md border border-border text-center">
      <i className="ri-checkbox-circle-fill text-5xl text-accent block mb-4" />
      <h3 className="font-urbanist font-extrabold text-xl text-[#1A1A2A] mb-2">Message Sent!</h3>
      <p className="text-muted">Our team will get back to you within 24 hours.</p>
    </div>
  )

  const inputCls = (err?: boolean) =>
    `w-full px-[18px] py-3.5 border-[1.5px] rounded-sm font-inter text-[15px] text-[#1A1A2A] bg-white outline-none transition-all duration-300 placeholder:text-muted focus:border-accent focus:shadow-[0_0_0_4px_rgba(236,126,52,0.12)] ${err ? 'border-red-400' : 'border-border'}`

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-lg p-12 shadow-md border border-border">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <div>
          <label className="block font-urbanist font-semibold text-sm text-[#1A1A2A] mb-2">Your Name *</label>
          <input {...register('name', { required: true })} className={inputCls(!!errors.name)} placeholder="Full name" />
        </div>
        <div>
          <label className="block font-urbanist font-semibold text-sm text-[#1A1A2A] mb-2">Phone / WhatsApp *</label>
          <input {...register('phone', { required: true })} className={inputCls(!!errors.phone)} placeholder="+91 97407 01861" />
        </div>
      </div>
      <div className="mb-5">
        <label className="block font-urbanist font-semibold text-sm text-[#1A1A2A] mb-2">Email Address</label>
        <input {...register('email')} type="email" className={inputCls()} placeholder="your@email.com" />
      </div>
      <div className="mb-5">
        <label className="block font-urbanist font-semibold text-sm text-[#1A1A2A] mb-2">Subject *</label>
        <select {...register('subject', { required: true })} className={inputCls(!!errors.subject)}>
          <option value="">Select a topic</option>
          {subjects.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>
      <div className="mb-6">
        <label className="block font-urbanist font-semibold text-sm text-[#1A1A2A] mb-2">Message *</label>
        <textarea {...register('message', { required: true })} rows={5} className={`${inputCls(!!errors.message)} resize-y min-h-[130px]`} placeholder="How can we help you?" />
      </div>
      <button type="submit" className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-urbanist font-semibold text-[17px] py-4 rounded-pill transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
        <i className="ri-send-plane-line" /> Send Message
      </button>
    </form>
  )
}
