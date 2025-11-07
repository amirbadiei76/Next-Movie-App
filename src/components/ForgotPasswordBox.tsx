"use client"

import { Link } from '@/src/i18n/navigation'
import { useLocale, useTranslations } from 'next-intl'
import React, { use, useEffect, useRef, useState } from 'react'

export default function ForgotPasswordBox() {
    const t = useTranslations("Movies")
    const locale = useLocale()


    const [email, setEmail] = useState('')
    const [forgotHasError, setForgotHasError] = useState(false)
    const [forgotError, setFforgotError] = useState('')


    return (
      <form
        className='flex overflow-hidden max-w-[32.5rem]
        mx-8 sm:mx-0 px-8 sm:px-12 py-12 min-w-[90%] sm:min-w-130 
        justify-center items-center flex-col bg-light-second dark:bg-dark-between rounded-2xl'
      >
          <div className='flex justify-center items-center relative w-full'>
              <input
                  type="email"
                  className='w-full peer font-roboto input-base text-theme-black dark:text-theme-white'
                  placeholder=' '
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
              />
              <label className={`absolute text-theme-black dark:text-theme-white top-1/2 left-3 right-auto rtl:right-3 rtl:left-auto peer-focus:top-[-0.125rem] peer-focus:px-2 peer-focus:text-sm peer-focus:bg-light-second peer-focus:dark:bg-dark-between peer-focus:left-4 peer-focus:right-auto peer-focus:rtl:right-4 peer-focus:rtl:left-auto peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:right-auto peer-[:not(:placeholder-shown)]:rtl:right-4 peer-[:not(:placeholder-shown)]:rtl:left-auto transform -translate-y-1/2 pointer-events-none peer-[:not(:placeholder-shown)]:top-[-0.125rem] peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:bg-light-second peer-[:not(:placeholder-shown)]:dark:bg-dark-between font-roboto rtl:font-vazir`}>{t('auth.email')}</label>
          </div>
          <label
                style={{opacity: forgotHasError ? 1 : 0, visibility: forgotHasError ? 'visible' : 'hidden'}}
                className={`min-h-6 translate-y-2 text-error-dark dark:text-error-light font-roboto rtl:font-vazir`}
            >{forgotError}</label> 
            <div className='flex flex-col gap-5 mt-5 w-full'>
                <div className='flex flex-col justify-center items-center gap-5 w-full'>
                    <button className='button-3-base text-theme-black dark:text-theme-white w-full py-2 cursor-pointer'>{t('auth.confirm')}</button>
                    <label className='font-roboto rtl:font-vazir text-theme-black dark:text-theme-white'>{t('auth.have-account')} <Link className='font-roboto rtl:font-vazir text-dark-blue-second dark:text-light-blue-lighter' href={'/login'}>&nbsp;{t('auth.login-now')}</Link></label>
                </div>
            </div>
      </form>
    )
}
