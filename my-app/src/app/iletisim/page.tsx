'use client'

import React from 'react';
import { useState, useEffect } from 'react'
import Header from '@/app/components/header'
import Footer from '@/app/components/footer'
import emailjs from '@emailjs/browser';

class ErrorBoundary extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true }
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.log('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <h1>Bir şeyler yanlış gitti.</h1>
    }

    return this.props.children
  }
}

export default function Iletisim() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')
  const [errors, setErrors] = useState<{[key: string]: string}>({})

  const validateForm = () => {
    let formErrors: {[key: string]: string} = {};
    
    if (!name.trim()) {
      formErrors.name = 'İsim gereklidir';
    }
    
    if (!email.trim()) {
      formErrors.email = 'E-posta gereklidir';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = 'Geçerli bir e-posta adresi giriniz';
    }
    
    if (!message.trim()) {
      formErrors.message = 'Mesaj gereklidir';
    }
    
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return;
    }
    
    setStatus('Gönderiliyor...')

    try {
      const result = await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        { name, email, message },
        'YOUR_PUBLIC_KEY'
      );

      console.log('EmailJS result:', result);
      setStatus('Mesajınız başarıyla gönderildi!')
      setName('')
      setEmail('')
      setMessage('')
    } catch (error) {
      console.error('EmailJS error:', error)
      setStatus('Bir hata oluştu. Lütfen daha sonra tekrar deneyin.')
    }
  }

  return (
    <ErrorBoundary>
      <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
        <Header />
        <main className="flex-grow container mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">İletişim</h1>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Benimle iletişime geçmek için aşağıdaki yöntemleri kullanabilirsiniz:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6">
              <li>E-posta: <a href="mailto:ornek@email.com" className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">ornek@email.com</a></li>
              <li>Twitter: <a href="https://twitter.com/kullaniciadiniz" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">@kullaniciadiniz</a></li>
              <li>LinkedIn: <a href="https://www.linkedin.com/in/kullaniciadiniz" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">LinkedIn Profilim</a></li>
            </ul>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">Adınız</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
                  required
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">E-posta Adresiniz</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
                  required
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">Mesajınız</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className={`w-full px-3 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
                  required
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Gönder
              </button>
            </form>
            {status && <p className="mt-4 text-green-500 dark:text-green-400">{status}</p>}
          </div>
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  )
}
