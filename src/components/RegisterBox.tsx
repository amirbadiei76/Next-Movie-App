"use client"
import { Link, useRouter } from '@/i18n/navigation'
import { useLocale, useTranslations } from 'next-intl'
import React, { FormEvent, useEffect, useRef, useState } from 'react'
import { BiCheck } from 'react-icons/bi'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { GoogleGLogo } from './SVGIcons'
import { useMutation, useQuery } from '@tanstack/react-query'
import { registerQuery } from '@/utils/FetchQueries'

export default function RegisterBox() {
    
    const t = useTranslations("Movies")
    const locale = useLocale()
    const router = useRouter()

    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)


    const [registerError, setRegisterError] = useState('')
    const [registerHasError, setRegisterHasError] = useState(true)

    const passwordInputRef = useRef<HTMLInputElement>(null)

    const submitRegister = (e: FormEvent) => {
        e.preventDefault()
        mutation.mutate()
    }

    const mutation = useMutation({
        mutationKey: ['register-res'],
        mutationFn: () => registerQuery(email, password, firstName, lastName),
        onSuccess: () => {
            setRegisterHasError(false)
            setRegisterError("")
            router.replace('/send-email')
        },
        onError: (error) => {
            setRegisterHasError(true)
            setRegisterError(t('auth.email-used-error'))
        }
    })
    

    return (
        <form
            onSubmit={submitRegister}
            className='flex overflow-hidden max-w-[32.5rem]
                mx-8 sm:mx-0 px-8 sm:px-12 py-12 min-w-[90%] sm:min-w-130 
                justify-center items-center flex-col bg-light-second dark:bg-dark-between rounded-2xl'>
            
            <div className='flex flex-col gap-6 w-full'>
                <div className='inline-flex gap-6'>
                    <div className='flex flex-1/2 justify-center items-center relative'>
                        <input
                            type="text"
                            className='w-full peer font-roboto input-base text-theme-black dark:text-theme-white'
                            placeholder=' '
                            onChange={(e) => setFirstName(e.target.value)}
                            value={firstName}
                        />
                        <label className={`absolute text-theme-black dark:text-theme-white top-1/2 left-3 right-auto rtl:right-3 rtl:left-auto peer-focus:top-[-0.125rem] peer-focus:px-2 peer-focus:text-sm peer-focus:bg-light-second peer-focus:dark:bg-dark-between peer-focus:left-4 peer-focus:right-auto peer-focus:rtl:right-4 peer-focus:rtl:left-auto peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:right-auto peer-[:not(:placeholder-shown)]:rtl:right-4 peer-[:not(:placeholder-shown)]:rtl:left-auto transform -translate-y-1/2 pointer-events-none peer-[:not(:placeholder-shown)]:top-[-0.125rem] peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:bg-light-second peer-[:not(:placeholder-shown)]:dark:bg-dark-between font-roboto rtl:font-vazir`}>{t('auth.first-name')}</label>
                    </div>

                    <div className='flex flex-1/2 justify-center items-center relative'>
                        <input
                            type="text"
                            className='w-full peer font-roboto input-base text-theme-black dark:text-theme-white'
                            placeholder=' '
                            onChange={(e) => setLastName(e.target.value)}
                            value={lastName}
                        />
                        <label className={`absolute text-theme-black dark:text-theme-white top-1/2 left-3 right-auto rtl:right-3 rtl:left-auto peer-focus:top-[-0.125rem] peer-focus:px-2 peer-focus:text-sm peer-focus:bg-light-second peer-focus:dark:bg-dark-between peer-focus:left-4 peer-focus:right-auto peer-focus:rtl:right-4 peer-focus:rtl:left-auto peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:right-auto peer-[:not(:placeholder-shown)]:rtl:right-4 peer-[:not(:placeholder-shown)]:rtl:left-auto transform -translate-y-1/2 pointer-events-none peer-[:not(:placeholder-shown)]:top-[-0.125rem] peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:bg-light-second peer-[:not(:placeholder-shown)]:dark:bg-dark-between font-roboto rtl:font-vazir`}>{t('auth.last-name')}</label>
                    </div>
                </div>

                <div className='flex justify-center items-center relative w-full'>
                    <input
                        type="email"
                        className='w-full peer font-roboto input-base text-theme-black dark:text-theme-white'
                        placeholder=' '
                        onChange={(e) => setEmail(e.target.value)}
                        required
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
                    {/* peer-focus:after:content-[''] after:content-['*'] after:text-error-dark dark:after:text-error-light */}
                    <label className={`absolute text-theme-black dark:text-theme-white top-1/2 left-3 right-auto rtl:right-3 rtl:left-auto peer-focus:top-[-0.125rem] peer-focus:px-2 peer-focus:text-sm peer-focus:bg-light-second peer-focus:dark:bg-dark-between peer-focus:left-4 peer-focus:right-auto peer-focus:rtl:right-4 peer-focus:rtl:left-auto peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:right-auto peer-[:not(:placeholder-shown)]:rtl:right-4 peer-[:not(:placeholder-shown)]:rtl:left-auto transform -translate-y-1/2 pointer-events-none peer-[:not(:placeholder-shown)]:top-[-0.125rem] peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:bg-light-second peer-[:not(:placeholder-shown)]:dark:bg-dark-between font-roboto rtl:font-vazir`}>{t('auth.password')}</label>
                </div>
            </div>

            <label
                style={{opacity: registerHasError ? 1 : 0, visibility: registerHasError ? 'visible' : 'hidden'}}
                className={`min-h-6 translate-y-2 text-error-dark dark:text-error-light font-roboto rtl:font-vazir`}
            >{registerError}</label>

            {/*
            <label className='relative font-roboto mt-4 rtl:font-vazir text-theme-black dark:text-theme-white flex self-start justify-center items-center gap-2'>
                <input type="checkbox" className="relative peer shrink-0 appearance-none w-5 h-5 rounded-sm border border-dark dark:border-light mt-1 cursor-pointer 
                hover:bg-light-between-70 hover:dark:bg-dark-second-70
                " />
                <BiCheck
                    className="absolute cursor-pointer text-dark dark:text-light w-5 h-5 mt-0.5 top-0 right-0 opacity-0 peer-checked:opacity-100 peer-checked:text-theme-black peer-checked:dark:text-theme-white"
                />
                {t('auth.remember-me')}
            </label>
            */}
            {/* <label className=''>{t('have-account')}</label> */}
            <div className='flex flex-col gap-5 mt-5 w-full'>
                <div className='flex flex-col justify-center items-center gap-5 w-full'>
                    <button className='button-3-base text-theme-black dark:text-theme-white w-full py-2 cursor-pointer'>{t('auth.signup')}</button>
                    <label className='font-roboto rtl:font-vazir text-theme-black dark:text-theme-white'>{t('auth.have-account')} <Link className='font-roboto rtl:font-vazir text-dark-blue-second dark:text-light-blue-lighter' href={'/login'}>&nbsp;{t('auth.login-now')}</Link></label>
                </div>
                <div className='relative w-full h-5 flex justify-center items-center'>
                    {/* <div className='w-full h-full absolute left-0 top-0 bg-linear-to-l to-light-second dark:to-dark-between via-transparent from-light-second dark:from-dark-between'></div> */}
                    <hr className='h-[0.0625rem] bg-gradient-to-r from-transparent via-dark dark:via-light to-transparent border-0 w-full'/>
                    <label className='absolute top-1/2 -translate-y-1/2 bg-light-second from-40% to-60% text-theme-black dark:text-theme-white dark:bg-dark-between font-roboto rtl:font-vazir px-4'>{t('auth.or')}</label>
                </div>
                <button className='input-base hover:bg-light-between-50 hover:dark:bg-dark-second-70 font-roboto rtl:font-vazir text-theme-black flex justify-center gap-3 items-center dark:text-theme-white w-full py-2 cursor-pointer'>{<GoogleGLogo height={'1.75rem'} />} {t('auth.continue-google')}</button>
            </div>
        </form>
    )
}
