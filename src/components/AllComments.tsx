"use client"

import React, { useEffect, useState } from 'react'
import SingleComment, { FullComments, TComment } from './SingleComment'
import { useTranslations } from 'next-intl'

export default function AllComments({ comments }: { comments: FullComments }) {

    const [allComments, setAllComments] = useState(comments)
    const [groupedComments, setGroupedComments] = useState([])

    const t = useTranslations("Movies");

    const getAllCommentCounts = (comments: TComment[]): number => {
        if (comments.length === 0) return 0;
        let counts = comments.length;
        comments.forEach((cmt) => counts += getAllCommentCounts(cmt.replies))
        return counts;
    }


    return (
        <div className='flex gap-4 flex-col rouned-md lg:px-25 md:px-10 sm:px-10 px-5 py-4 pb-8'>
            <strong className='font-roboto rtl:font-vazir text-dark dark:text-light pointer-events-none text-lg tracking-wider'>{t('movie.comments')} ({ getAllCommentCounts(comments.results) })</strong>
            {
                comments.results.map((item, index) => <SingleComment parent={null} isReply={false} key={index} comment={item} />)
            }
        </div>
    )
}
