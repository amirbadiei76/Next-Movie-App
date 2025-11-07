"use client"
import { useLocale, useTranslations } from 'next-intl'
import React, { FormEvent, useEffect, useRef, useState } from 'react'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { loginQuery } from '@/src/utils/FetchQueries'
import { useMutation, useQuery } from '@tanstack/react-query'
import { GoogleGLogo } from '@/src/components/SVGIcons';
import { BiCheck } from 'react-icons/bi';
import { Link } from '@/src/i18n/navigation';

export default function LoginBox() {

    const t = useTranslations("Movies")
    const locale = useLocale()

    

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const [loginError, setLoginError] = useState('')
    const [loginHasError, setLoginHasError] = useState(true)

    const passwordInputRef = useRef<HTMLInputElement>(null)

    const mutation = useMutation({
        mutationKey: ['login-res'],
        mutationFn: () => loginQuery(email, password),
        onSuccess: () => {
            setLoginHasError(false)
            setLoginError("")
        },
        onError: (error) => {
            setLoginHasError(true)
            // setLoginError(t('auth.email-used-error'))
        }
    })

    const submitLogin = (e: FormEvent) => {
        e.preventDefault()
        console.log(email, password)
        mutation.mutate()
    }


    return (
        <form
            onSubmit={submitLogin}
            className='flex overflow-hidden max-w-[32.5rem]
            mx-8 sm:mx-0 px-8 sm:px-12 py-12 min-w-[90%] sm:min-w-130 
            justify-center items-center flex-col bg-light-second dark:bg-dark-between rounded-2xl'
            >
            
            <div className='flex flex-col gap-6 w-full'>
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
                <div className='flex justify-center items-center relative w-full'>
                    <input
                        ref={passwordInputRef}
                        type={showPassword ? 'text' : 'password'}
                        className={`w-full peer font-roboto input-base text-theme-black dark:text-theme-white ${ locale === 'fa' ? 'pl-8.5' : 'pr-8.5' }`}
                        placeholder=' '
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    <div
                        className={`absolute top-1/2 -translate-y-1/2 right-3 left-auto rtl:left-3 rtl:right-auto hover:cursor-pointer`}
                        onClick={() => setShowPassword(show => !show)}
                    >
                        {
                            showPassword ?
                            <BsEyeSlash style={{opacity: password.length > 0 ? 1 : 0, visibility: password.length > 0 ? 'visible' : 'hidden'}} className={`text-2xl text-theme-black dark:text-theme-white`} /> :
                            <BsEye style={{opacity: password.length > 0 ? 1 : 0, visibility: password.length > 0 ? 'visible' : 'hidden'}} className={`text-2xl text-theme-black dark:text-theme-white`} />
                        }
                    </div>
                    <label className={`absolute text-theme-black dark:text-theme-white top-1/2 left-3 right-auto rtl:right-3 rtl:left-auto peer-focus:top-[-0.125rem] peer-focus:px-2 peer-focus:text-sm peer-focus:bg-light-second peer-focus:dark:bg-dark-between peer-focus:left-4 peer-focus:right-auto peer-focus:rtl:right-4 peer-focus:rtl:left-auto peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:right-auto peer-[:not(:placeholder-shown)]:rtl:right-4 peer-[:not(:placeholder-shown)]:rtl:left-auto transform -translate-y-1/2 pointer-events-none peer-[:not(:placeholder-shown)]:top-[-0.125rem] peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:bg-light-second peer-[:not(:placeholder-shown)]:dark:bg-dark-between font-roboto rtl:font-vazir`}>{t('auth.password')}</label>
                </div>
            </div>

            <label className='relative font-roboto mt-4 rtl:font-vazir text-theme-black dark:text-theme-white flex self-start justify-center items-center gap-2'>
                <input type="checkbox" className="relative peer shrink-0 appearance-none w-5 h-5 rounded-sm border border-dark dark:border-light mt-1 cursor-pointer 
                hover:bg-light-between hover:dark:bg-dark-second
                " />
                <BiCheck
                    className="absolute pointer-events-none text-dark dark:text-light w-5 h-5 mt-0.5 top-0 rtl:right-0 rtl:left-auto left-0 right-auto opacity-0 peer-checked:opacity-100 peer-checked:text-theme-black peer-checked:dark:text-theme-white"
                />
                {t('auth.remember-me')}
            </label>
            <label
                style={{opacity: loginHasError ? 1 : 0, visibility: loginHasError ? 'visible' : 'hidden'}}
                className={`min-h-6 translate-y-2 text-error-dark dark:text-error-light font-roboto rtl:font-vazir`}
            >{loginError}</label>
            <div className='flex flex-col gap-5 mt-5 w-full'>
                <div className='flex flex-col justify-center items-center gap-5 w-full'>
                    <button className='button-3-base text-theme-black dark:text-theme-white w-full py-2 cursor-pointer'>{t('auth.signin')}</button>
                    <div className='flex flex-col items-center gap-2.5 w-full'>
                        <label className='font-roboto rtl:font-vazir text-theme-black dark:text-theme-white'>{t('auth.dont-have-account')} <Link className='font-roboto rtl:font-vazir text-dark-blue-second dark:text-light-blue-lighter' href={'/register'}>&nbsp;{t('auth.register-now')}</Link></label>
                        <label className='font-roboto rtl:font-vazir text-theme-black dark:text-theme-white'>{t('auth.forgot-password')} <Link className='font-roboto rtl:font-vazir text-dark-blue-second dark:text-light-blue-lighter' href={'/forgot-password'}>&nbsp;{t('auth.new-password')}</Link></label>
                    </div>
                </div>
                <div className='relative w-full h-5 flex justify-center items-center'>
                    <hr className='h-[0.0625rem] bg-gradient-to-r from-transparent via-dark dark:via-light to-transparent border-0 w-full'/>
                    <label className='absolute top-1/2 -translate-y-1/2 bg-light-second from-40% to-60% text-theme-black dark:text-theme-white dark:bg-dark-between font-roboto rtl:font-vazir px-4'>{t('auth.or')}</label>
                </div>
                <button className='button-input-base flex justify-center gap-3 items-center dark:text-theme-white w-full py-2 cursor-pointer'>{<GoogleGLogo height={'1.75rem'} />} {t('auth.login-google')}</button>
            </div>
        </form>
    )
}
