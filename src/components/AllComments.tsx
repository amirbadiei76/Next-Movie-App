import React from 'react'
import SingleComment, { TComment } from './SingleComment'

export default function AllComments({ comments }: { comments: TComment[] }) {
  return (
    <div>
        {
            comments.map((item, index) => <SingleComment key={index} comment={item} />)
        }
    </div>
  )
}
