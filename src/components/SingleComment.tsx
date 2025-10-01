import React from 'react'

export type TComment = {
    id: string,
    name: string,
    description: string,
    replyTo: string | null
}


export default function SingleComment({ comment }: { comment: TComment }) {
  return (
    <div>
        {comment.name}
    </div>
  )
}
