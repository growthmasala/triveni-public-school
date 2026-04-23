'use client'

import dynamic from 'next/dynamic'

// ssr:false must live inside a Client Component
const SchoolChatbot = dynamic(() => import('./SchoolChatbot'), { ssr: false })

export default function ChatbotLoader() {
  return <SchoolChatbot />
}
