'use client'

import { useChat } from '@ai-sdk/react'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { DefaultChatTransport } from 'ai'
import type { UIMessage } from 'ai'

const QUICK_REPLIES = [
  { label: '🎓 Admissions Process', text: 'How do I apply for admission?' },
  { label: '📚 Programs & Grades', text: 'What grades and programs does the school offer?' },
  { label: '🚌 Transport Routes', text: 'Does the school have bus transport?' },
  { label: '📞 Contact & Hours', text: 'What are the school office hours and contact details?' },
  { label: '💰 Fee Structure', text: 'What are the school fees?' },
  { label: '🔬 Teaching Methods', text: "What makes Triveni's teaching approach different?" },
]

const WELCOME = `Hi there! 👋 I'm **Vidya**, your Triveni Public School assistant. I can help you with admissions, programs, fees, transport and more.

What would you like to know?`

function ChatIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 2C8.268 2 2 7.82 2 15c0 3.13 1.18 6 3.14 8.22L3.5 28.5l5.8-1.56A14.4 14.4 0 0 0 16 28c7.732 0 14-5.82 14-13S23.732 2 16 2Z" fill="white" fillOpacity="0.95"/>
      <path d="M10 13h12M10 17h8" stroke="#272D66" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="24" cy="8" r="4" fill="#EC7E34"/>
      <path d="M22.5 8l1 1 2-2" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function getMessageText(msg: UIMessage): string {
  return msg.parts
    .filter(p => p.type === 'text')
    .map(p => p.text)
    .join('')
}

function FormatText({ text }: { text: string }) {
  const lines = text.split('\n')
  return (
    <>
      {lines.map((line, i) => {
        const parts = line.split(/(\*\*[^*]+\*\*)/)
        const formatted = parts.map((part, j) =>
          part.startsWith('**') && part.endsWith('**')
            ? <strong key={j} className="font-semibold text-[#1A1A2A]">{part.slice(2, -2)}</strong>
            : <span key={j}>{part}</span>
        )
        if (line.startsWith('- ') || line.startsWith('• ')) {
          return <li key={i} className="ml-4 list-disc">{formatted}</li>
        }
        if (line.trim() === '') return <br key={i} />
        return <p key={i} className="mb-1 last:mb-0">{formatted}</p>
      })}
    </>
  )
}

// Detect touch device — used to skip auto-focus (avoids keyboard popup on open)
function isTouchDevice(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(pointer: coarse)').matches
}

export default function SchoolChatbot() {
  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [quickRepliesUsed, setQuickRepliesUsed] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: '/api/chat' }),
  })
  const isLoading = status === 'submitted' || status === 'streaming'

  // Auto-focus only on desktop — on mobile, keyboard popup on open is bad UX
  useEffect(() => {
    if (open && !isTouchDevice()) {
      setTimeout(() => inputRef.current?.focus(), 300)
    }
  }, [open])

  // Scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  const handleSend = (e?: React.FormEvent) => {
    e?.preventDefault()
    const text = inputValue.trim()
    if (!text || isLoading) return
    setInputValue('')
    sendMessage({ text })
  }

  const handleQuickReply = (text: string) => {
    setQuickRepliesUsed(true)
    sendMessage({ text })
  }

  const showQuickReplies = messages.length === 0 && !quickRepliesUsed

  return (
    <>
      {/* Chat Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            style={{
              // Safe area: panel sits above the toggle button, which itself clears the home indicator
              bottom: 'max(88px, calc(88px + env(safe-area-inset-bottom)))',
            }}
            className="fixed right-3 sm:right-6 z-50 w-[calc(100vw-24px)] sm:w-95 flex flex-col rounded-2xl shadow-2xl overflow-hidden border border-border bg-white"
            // 100dvh for mobile browsers (URL bar aware), fallback to 100vh
            // Subtract header (~68px) + input (~80px) + gap (~88px from bottom)
            // We use inline style for dvh since Tailwind arbitrary might not cover dvh in all builds
          >
            {/* Constrain height responsively */}
            <style>{`
              .chat-panel-height {
                max-height: min(calc(100dvh - 180px), 560px);
              }
              @supports not (height: 100dvh) {
                .chat-panel-height {
                  max-height: min(calc(100vh - 180px), 560px);
                }
              }
            `}</style>

            {/* Header */}
            <div className="bg-primary px-4 py-3.5 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                  <ChatIcon size={22} />
                </div>
                <div>
                  <p className="font-urbanist font-bold text-white text-[15px] leading-tight">Vidya</p>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <p className="text-white/70 text-[11px]">Triveni School Assistant · Online</p>
                  </div>
                </div>
              </div>
              {/* Larger close button — 44px touch target */}
              <button
                onClick={() => setOpen(false)}
                style={{ touchAction: 'manipulation' }}
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                aria-label="Close chat"
              >
                <i className="ri-close-line text-xl" />
              </button>
            </div>

            {/* Messages — overscroll-contain prevents page scroll bleed on iOS */}
            <div className="chat-panel-height flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-[#F7F8FB] overscroll-contain">

              {/* Welcome */}
              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                  <ChatIcon size={16} />
                </div>
                <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm max-w-[85%] text-sm leading-[1.65] text-body">
                  <FormatText text={WELCOME} />
                </div>
              </div>

              {/* Quick reply chips */}
              {showQuickReplies && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-wrap gap-2 pl-10"
                >
                  {QUICK_REPLIES.map(qr => (
                    <button
                      key={qr.text}
                      onClick={() => handleQuickReply(qr.text)}
                      style={{ touchAction: 'manipulation' }}
                      className="text-[12px] font-medium bg-white border border-border text-primary px-3 py-2 rounded-pill hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 cursor-pointer"
                    >
                      {qr.label}
                    </button>
                  ))}
                </motion.div>
              )}

              {/* Conversation */}
              {messages.map(m => {
                const text = getMessageText(m)
                if (!text) return null
                return (
                  <div key={m.id} className={`flex items-start gap-2.5 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                    {m.role === 'assistant' ? (
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                        <ChatIcon size={16} />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0 mt-0.5 text-white text-[10px] font-bold">
                        You
                      </div>
                    )}
                    <div className={[
                      'px-4 py-3 rounded-2xl shadow-sm max-w-[80%] text-sm leading-[1.65]',
                      m.role === 'user' ? 'bg-primary text-white rounded-tr-sm' : 'bg-white text-body rounded-tl-sm',
                    ].join(' ')}>
                      {m.role === 'assistant'
                        ? <div className="space-y-0.5"><FormatText text={text} /></div>
                        : text
                      }
                    </div>
                  </div>
                )
              })}

              {/* Typing indicator */}
              {isLoading && (
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <ChatIcon size={16} />
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3.5 shadow-sm">
                    <div className="flex gap-1 items-center">
                      {[0, 1, 2].map(i => (
                        <span key={i} className="w-2 h-2 rounded-full bg-muted animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="shrink-0 border-t border-border bg-white px-3 py-3">
              <form onSubmit={handleSend} className="flex gap-2 items-center">
                <input
                  ref={inputRef}
                  value={inputValue}
                  onChange={e => setInputValue(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && !e.shiftKey && handleSend()}
                  placeholder="Ask me anything about Triveni..."
                  disabled={isLoading}
                  inputMode="text"
                  // fontSize 16px prevents iOS Safari from auto-zooming the page
                  style={{ fontSize: '16px', touchAction: 'manipulation' }}
                  className="flex-1 px-4 py-2.5 rounded-full border border-border focus:outline-none focus:border-primary bg-[#F7F8FB] disabled:opacity-50 transition-colors"
                />
                {/* 44px touch target for accessibility */}
                <button
                  type="submit"
                  disabled={isLoading || !inputValue.trim()}
                  style={{ touchAction: 'manipulation' }}
                  className="w-11 h-11 rounded-full bg-primary hover:bg-primary-dark flex items-center justify-center text-white transition-colors disabled:opacity-40 shrink-0 cursor-pointer"
                  aria-label="Send"
                >
                  <i className="ri-send-plane-fill text-base" />
                </button>
              </form>
              <a
                href="https://wa.me/918023721148"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 mt-2 text-[11px] text-muted hover:text-[#25D366] transition-colors py-1"
              >
                <i className="ri-whatsapp-line text-[13px]" />
                Prefer WhatsApp? Chat with us directly
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button — safe area aware for iPhone home indicator */}
      <motion.button
        onClick={() => setOpen(o => !o)}
        style={{
          touchAction: 'manipulation',
          // Clears iPhone home indicator (~34px) — max(24px, 24px + safe-area)
          bottom: 'max(24px, calc(24px + env(safe-area-inset-bottom)))',
        }}
        className="fixed right-4 sm:right-6 z-50 w-15 h-15 rounded-full bg-primary shadow-lg flex items-center justify-center cursor-pointer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label={open ? 'Close school assistant' : 'Open school assistant'}
      >
        {!open && <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-25" />}
        <AnimatePresence mode="wait">
          {open ? (
            <motion.i key="close" className="ri-close-line text-white text-2xl"
              initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}
            />
          ) : (
            <motion.div key="icon"
              initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}
            >
              <ChatIcon size={28} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  )
}
