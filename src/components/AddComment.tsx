"use client"

import { useTranslations } from 'next-intl'
import React, { ChangeEvent, ChangeEventHandler, FormEvent, useState } from 'react';
import { TComment } from './SingleComment';

export interface IAddComment {
    hasCancel?: boolean,
    cancelFn?: () => void,
    addComment?: (name: string, hasSpoiler: boolean, description: string) => void,
    addRoot: (comment: TComment) => void,
    parent?: TComment | null,
    comments?: TComment[]
    
}


export default function AddComment({ hasCancel = false, cancelFn, parent, addComment, addRoot, comments } : IAddComment) {

    const [description, setDescription] = useState('')
    const [name, setName] = useState('')
    const [hasSpoiler, sethasSpoiler] = useState(false)
    const [allComments, setAllComments] = useState(comments)

    const t = useTranslations("Movies");

    function addToRoot () {
        if (allComments) {
            const addedComment = {
              display_name: name,
              has_spoiler: hasSpoiler,
              text: description,
              created_at: new Date().toString(),
              depth: 0,
              id: (Math.random() * 1000).toString() ,
              parent: null,
              is_active: true,
              updated_at: new Date().toString(),
              reply_count: 0
            };
            addRoot(addedComment)
          }
          else {
            const addedComment = {
              display_name: name,
              has_spoiler: hasSpoiler,
              text: description,
              created_at: new Date().toString(),
              depth: 0,
              id: (Math.random() * 1000).toString() ,
              parent: null,
              is_active: true,
              updated_at: new Date().toString(),
              reply_count: 0
            };
            addRoot(addedComment)
        }
        resetCommentBox()
    }

    function resetCommentBox () {
        setName('')
        setDescription('')
        sethasSpoiler(false)
    }


    return (
        <div className={`relative  py-4 pb-8 ${hasCancel ? 'w-full px-0' : 'lg:px-25 md:px-10 sm:px-10 px-5'}  `}>
                <strong className={`pointer-events-none text-dark text-lg tracking-wider transition-padding dark:text-light absolute bg-light dark:bg-dark px-3 top-0.5 transition-item-none
                        rtl:font-vazir rtl:right-13 left-13 sm:rtl:right-20 sm:left-20 md:rtl:right-20 md:left-20 lg:rtl:right-33 lg:left-33 rtl:left-auto right-auto font-roboto`}
                    >{ hasCancel ? (t('movie.reply-to') + parent?.display_name) : t('movie.leave-comment') }</strong>

                <div className='border-[0.001rem] border-dark-second flex gap-4.5 flex-col dark:border-light-second p-8 rounded-md'>
                    <div
                        className='w-full flex flex-1 flex-col md:flex-row min-h-20 sm:gap-6 gap-4'
                    >
                        <div className={`flex w-full order-2 md:order-1 items-start flex-col sm:flex-1/3 gap-4`}>
                            <div className='flex flex-col relative w-full justify-center'>
                                <input
                                    className='input-base w-full peer font-roboto text-theme-black dark:text-theme-white'
                                    type="text"
                                    required
                                    placeholder=' '
                                    value={name}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                                />
                                <label className={`absolute text-theme-black dark:text-theme-white top-1/2 left-3 right-auto rtl:right-3 rtl:left-auto peer-focus:top-[0.125rem] peer-focus:px-2 peer-focus:text-sm peer-focus:bg-light peer-focus:dark:bg-dark peer-focus:left-4 peer-focus:right-auto peer-focus:rtl:right-4 peer-focus:rtl:left-auto peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:right-auto peer-[:not(:placeholder-shown)]:rtl:right-4 peer-[:not(:placeholder-shown)]:rtl:left-auto transform -translate-y-1/2 pointer-events-none peer-[:not(:placeholder-shown)]:top-[0.125rem] peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:bg-light peer-[:not(:placeholder-shown)]:dark:bg-dark font-roboto rtl:font-vazir`}>{t('movie.your-name')}</label>
                            </div>

                            <label className="flex justify-between w-full items-center cursor-pointer gap-4">
                                <span className="ms-3 font-roboto rtl:font-vazir text-theme-black dark:text-theme-white">{t('movie.has-spoil')}</span>
                                <input type="checkbox" value="" className="sr-only peer" checked={hasSpoiler} disabled />
                                <div onClick={() => sethasSpoiler((spoiler) => !spoiler)} className="relative w-11 h-6 bg-light-second rounded-full peer dark:bg-dark-between peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-theme-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-theme-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-light-blue-second dark:peer-checked:bg-light-blue"></div>
                            </label>

                            <div className='justify-center items-center flex gap-5 w-full sm:w-auto'>
                                <button
                                    onClick={() => (parent && addComment) ? addComment(name, hasSpoiler, description) : addToRoot()}
                                    className='button-base px-8 py-1 h-full flex-1/2'
                                >{t('movie.submit-comment')}</button>
                                {
                                    hasCancel ?
                                    <button onClick={cancelFn} className='button-base bg-error-light flex-1/2 h-full dark:bg-error-dark border-none px-8 py-1'>{t('movie.cancel-comment')}</button>
                                    : null
                                }
                            </div>
                        </div>


                        <div className='flex justify-center order-1 md:order-2 items-center relative flex-2/3 min-h-full'>
                            <textarea
                                placeholder=' '
                                required
                                title=''
                                className='flex flex-1/2 min-h-full input-base peer font-roboto text-theme-black dark:text-theme-white'
                                value={description}
                                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
                            ></textarea>
                            <label className={`absolute text-theme-black dark:text-theme-white top-5 left-3 right-auto rtl:right-3 rtl:left-auto peer-focus:top-[0.125rem] peer-focus:px-2 peer-focus:text-sm peer-focus:bg-light peer-focus:dark:bg-dark peer-focus:left-4 peer-focus:right-auto peer-focus:rtl:right-4 peer-focus:rtl:left-auto peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:right-auto peer-[:not(:placeholder-shown)]:rtl:right-4 peer-[:not(:placeholder-shown)]:rtl:left-auto transform -translate-y-1/2 pointer-events-none peer-[:not(:placeholder-shown)]:top-[0.125rem] peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:bg-light peer-[:not(:placeholder-shown)]:dark:bg-dark font-roboto rtl:font-vazir`}>{t('movie.comment-here')}</label>
                        </div>

                    </div>
                </div>
            </div>
        
    )
}