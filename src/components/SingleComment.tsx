"use client"

import React, { useState } from 'react'
import AddComment from './AddComment'

export type TComment = {
  id: string,
  author: TCommentAuthor | null,
  display_name: string,
  text: string,
  is_active: boolean,
  has_spoiler: boolean,
  created_at: string,
  updated_at: string,
  reply_count: number,
  depth: number,
  parent: string | null,
  replies: TComment[]
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




export default function SingleComment({ comment, isReply, parent }: { comment: TComment, isReply: boolean, parent?: TComment | null }) {
  const [showReplay, setShowReplay] = useState(false)
  const [replys, setReplys] = useState(comment.replies)

  return (
    <div className={`flex flex-col gap-4 ${isReply ? 'mr-8' : ''}`}>
      <div className='w-full flex flex-col py-4 px-10 bg-light-between dark:bg-dark-between rounded-lg'>
          {
            parent ?
            <p className='text-theme-black dark:text-theme-white'>Replys to {parent?.display_name}</p>
            : null
          }
          <p className='text-theme-black dark:text-theme-white'>{comment.display_name}</p>
          <p className='text-theme-black dark:text-theme-white'>{comment.text}</p>
          <button onClick={() => setShowReplay(!showReplay)} className=''>Replay</button>
      </div>
      {
        showReplay ?
        <AddComment
          hasCancel
          parent={comment}
          cancelFn={() => setShowReplay(false)}
        />
        : null
      }
      {
        replys.map((item, index) => <SingleComment parent={comment} isReply key={index} comment={item} />)
      }

    </div>
  )
}
