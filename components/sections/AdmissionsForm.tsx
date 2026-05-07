'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'

type FormData = {
  parent_name: string
  phone: string
  email: string
  child_name: string
  child_age: string
  grade: string
  locality: string
  message: string
}

const grades = ['Grade I','Grade II','Grade III','Grade IV','Grade V','Grade VI','Grade VII','Grade VIII']

export default function AdmissionsForm() {
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
      <h3 className="font-urbanist font-extrabold text-xl text-[#1A1A2A] mb-2">Enquiry Received!</h3>
      <p className="text-muted">Our admissions team will contact you within 24 hours.</p>
    </div>
  )

  const inputCls = (err?: boolean) =>
    `w-full px-[18px] py-3.5 border-[1.5px] rounded-sm font-inter text-[15px] text-[#1A1A2A] bg-white outline-none transition-all duration-300 placeholder:text-muted focus:border-accent focus:shadow-[0_0_0_4px_rgba(236,126,52,0.12)] ${err ? 'border-red-400' : 'border-border'}`

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-lg p-12 shadow-md border border-border">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <div>
          <label className="block font-urbanist font-semibold text-sm text-[#1A1A2A] mb-2">Parent / Guardian Name *</label>
          <input {...register('parent_name', { required: true })} className={inputCls(!!errors.parent_name)} placeholder="Your full name" />
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <div>
          <label className="block font-urbanist font-semibold text-sm text-[#1A1A2A] mb-2">Child&apos;s Name *</label>
          <input {...register('child_name', { required: true })} className={inputCls(!!errors.child_name)} placeholder="Child's full name" />
        </div>
        <div>
          <label className="block font-urbanist font-semibold text-sm text-[#1A1A2A] mb-2">Child&apos;s Date of Birth / Age *</label>
          <input {...register('child_age', { required: true })} className={inputCls(!!errors.child_age)} placeholder="e.g. 15 Jan 2018" />
        </div>
      </div>
      <div className="mb-5">
        <label className="block font-urbanist font-semibold text-sm text-[#1A1A2A] mb-2">Grade Applying For *</label>
        <select {...register('grade', { required: true })} className={inputCls(!!errors.grade)}>
          <option value="">Select a grade</option>
          {grades.map(g => <option key={g} value={g}>{g}</option>)}
        </select>
      </div>
      <div className="mb-5">
        <label className="block font-urbanist font-semibold text-sm text-[#1A1A2A] mb-2">Your Locality / Area</label>
        <input {...register('locality')} className={inputCls()} placeholder="e.g. Bagalagunte, Mallasandra, Nagasandra..." />
      </div>
      <div className="mb-6">
        <label className="block font-urbanist font-semibold text-sm text-[#1A1A2A] mb-2">Anything you&apos;d like to ask?</label>
        <textarea {...register('message')} rows={4} className={`${inputCls()} resize-y min-h-[120px]`} placeholder="Your questions or additional information..." />
      </div>
      <button type="submit" className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-urbanist font-semibold text-[17px] py-4 rounded-pill transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
        <i className="ri-send-plane-line" /> Send Enquiry
      </button>
      <p className="text-center text-muted text-[13px] mt-3">
        Or call us directly: <a href="tel:+918028397648" className="text-accent font-semibold">080 2839 7648</a>
      </p>
    </form>
  )
}
