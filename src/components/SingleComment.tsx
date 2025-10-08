"use client"

import React, { useEffect, useState } from 'react';
import AddComment from './AddComment';
import { useTranslations } from 'next-intl';
import { BiDislike, BiLike, BiSolidDislike, BiSolidLike } from 'react-icons/bi'

export type TComment = {
  id: string,
  author?: TCommentAuthor | null,
  display_name: string,
  text: string,
  is_active: boolean,
  has_spoiler: boolean,
  created_at?: string,
  updated_at: string,
  reply_count: number,
  depth: number,
  parent: string | null,
  replies?: TComment[]
}

export type FullComments = {
  count: number,
  next: number | null,
  previous: number | null,
  total_pages: number,
  current_page: number,
  page_size: number,
  results: TComment[]
}

export type TCommentAuthor = {
  id: number,
  username: string | null,
  email: string | null,
  full_name: string | null
}




export default function SingleComment({ comment, isReply, parent, onAddReply }: { comment: TComment, isReply: boolean, parent?: TComment | null, onAddReply: () => void }) {
  const [showReplay, setShowReplay] = useState(false)
  const [replys, setReplys] = useState(comment.replies);
  const [showSpoil, setShowSpoil] = useState(false);
  const [liked, setLiked] = useState(false)
  const [likedNumber, setLikedNumber] = useState(0)
  const [disliked, setdisLiked] = useState(false)
  const [dislikedNumber, setdisLikedNumber] = useState(0)

  const t = useTranslations("Movies")

  function addReply (name: string, hasSpoiler: boolean, description: string) {
    if (replys) {
      const newReplys = [...replys]
      const newComment = {
        display_name: name,
        has_spoiler: hasSpoiler,
        text: description,
        created_at: new Date().toString(),
        depth: comment.depth <= 1 ? (comment.depth + 1) : 2,
        id: (Math.random() * 1000).toString() ,
        parent: comment.id,
        is_active: true,
        updated_at: new Date().toString(),
        reply_count: comment.reply_count + 1
      };
      newReplys.push(newComment)
      setReplys(newReplys)
    }
    else {
      const newReplys = []
      const newComment = {
        display_name: name,
        has_spoiler: hasSpoiler,
        text: description,
        created_at: new Date().toString(),
        depth: comment.depth <= 1 ? (comment.depth + 1) : 2,
        id: (Math.random() * 1000).toString() ,
        parent: comment.id,
        is_active: true,
        updated_at: new Date().toString(),
        reply_count: comment.reply_count + 1
      };
      newReplys.push(newComment)
      setReplys(newReplys)
    }
    setShowReplay(false)
  }

  function toggleLike () {
    setLiked((liked: boolean) => !liked)

    setLikedNumber((likes: number) => !liked ? likes + 1 : likes - 1)
    // setLikedNumber((likes: number) => likes + 1)
    // movie.ratings.site.like = likedNumber;
    
    // if (!liked) {
    //     setLikedNumber((likes: number) => likes - 1)
    //     movie.ratings.site.like = likedNumber;
    // }

    if (disliked) {
        setdisLiked(false)
        setdisLikedNumber((dislikes: number) => dislikes - 1)
    }
  }

  function toggleDislike () {
    setdisLiked((disliked: boolean) => !disliked)

    setdisLikedNumber((dislikes: number) => !disliked ? dislikes + 1 : dislikes - 1)

    if (liked) {
        setLiked(false)
        setLikedNumber((likes: number) => likes - 1)
    }
  }




  return (
    <div className={`flex flex-col flex-1 gap-4 relative ${(isReply && parent && (parent?.depth <= 1 && comment.depth <= 2)) ? 'mr-8' : ''} `}>
      <div className={`relative w-full flex gap-4 flex-col sm:flex-row items-start py-4 px-10 bg-light-between dark:bg-dark-between rounded-lg`}>
          <div className='flex flex-col flex-1 gap-2'>
            {
              parent ?
              <p className='text-theme-black dark:text-theme-white font-roboto rtl:font-vazir'>{t('movie.reply-to')} {parent?.display_name}</p>
              : null
            }
            <p className='relative text-theme-black dark:text-theme-white font-vazir'>{comment.display_name}</p>
            <div className='relative min-w-full max-w-0 min-h-full'>
              {
                comment.has_spoiler ?
                <button
                  onClick={() => setShowSpoil(true)}
                  className={`font-roboto text-theme-black dark:text-theme-white button-base top-1/2 w-max -translate-y-1/2 ${comment.text.length > 10 ? 'translate-x-1/2 right-1/2' : 'right-0'}  bg-light-blue-second border-b-light-blue-second dark:bg-other-blue-light dark:border-b-other-blue-light px-4 py-1.5 rtl:font-vazir text-sm absolute min-w-fit z-[3] ${!showSpoil ? 'block cursor-help' : 'hidden cursor-default'} `}
                >{t('movie.has-spoil')}</button>
                : null
              }
              <div className={`flex justify-center items-center w-full min-h-full ${comment.has_spoiler && !showSpoil ? 'cursor-help' : 'cursor-default' } ${comment.has_spoiler && !showSpoil ? 'blur-sm' : 'blur-none'}`}>
                <p className={`text-theme-black rtl:rtl ltr:ltr dark:text-theme-white wrap-break-word font-vazir pointer-events-none w-full`}>{comment.text}</p>
              </div>
            </div>
          </div>
          <div className='flex flex-row justify-between items-center w-full sm:w-auto gap-3 sm:gap-4 sm:flex-col'>
              <div className={`rounded-full overflow-hidden w-48 h-10 lg:mt-0 flex items-center justify-between`}>
                <div onClick={toggleLike} className='flex w-1/2 h-full hover:dark:bg-other-blue-dark hover:bg-light-blue-between bg-light-blue-second dark:bg-other-blue px-2.5 hover:cursor-pointer gap-1.5 justify-center items-center rtl:pl-2.5 rtl:pr-5 pl-5 pr-2.5'>
                    {   liked ?
                        <BiSolidLike className='text-theme-black dark:text-theme-white pointer-events-none text-xl' /> :
                        <BiLike className='text-theme-black dark:text-theme-white pointer-events-none text-xl' />
                    }
                    <label className='text-lg text-theme-black dark:text-theme-white rtl:font-vazir font-roboto pointer-events-none'>{likedNumber}</label>
                </div>
                <div className='bg-light-blue-between dark:bg-other-blue-dark w-[0.0625rem] h-full' ></div>
                <div onClick={toggleDislike} className='flex w-1/2 h-full hover:dark:bg-other-blue-dark hover:bg-light-blue-between bg-light-blue-second dark:bg-other-blue px-2.5 hover:cursor-pointer gap-1.5 justify-center items-center rtl:pl-5 rtl:pr-2.5 pl-2.5 pr-5'>
                    {   disliked ?
                        <BiSolidDislike className='text-theme-black dark:text-theme-white pointer-events-none text-xl' /> :
                        <BiDislike className='text-theme-black dark:text-theme-white pointer-events-none text-xl' />
                    }
                    <label className='text-lg text-theme-black dark:text-theme-white rtl:font-vazir font-roboto pointer-events-none'>{dislikedNumber}</label>
                </div>
            </div>
            <button
              onClick={() => setShowReplay(true)}
              className='button-input-base text-sm sm:text-base hover:bg-light-70 hover:dark:bg-dark-second-70 text-theme-black dark:text-theme-white hover:cursor-pointer w-auto sm:w-full'
            >{t('movie.reply-comment')}</button>
          </div>
      </div>
      {
        showReplay ?
        <AddComment
            hasCancel
            addComment={(name, hasSpoiler, description) => {
                addReply(name, hasSpoiler, description);
                onAddReply()
              }
            }
              
            parent={comment}
            cancelFn={() => setShowReplay(false)}
            addRoot={() => null}
          />
        : null
      }
      {
        replys?.map((item, index) => item.is_active && <SingleComment onAddReply={onAddReply} parent={comment} isReply={true} key={index} comment={item} />)
      }

    </div>
  )
}
