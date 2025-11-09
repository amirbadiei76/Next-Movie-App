"use client"

import React, { useEffect, useState } from 'react'
import SingleComment, { FullComments, TComment } from '../single-comment/SingleComment'
import { useTranslations } from 'next-intl'
import AddComment from '../add-comment/AddComment'

export default function AllComments({ comments }: { comments: FullComments }) {

    const [allComments, setAllComments] = useState(comments)
    const [groupedComments, setGroupedComments] = useState([])
    const [commentResults, setCommentResults] = useState(comments.results)
    const [commentCounts, setCommentCounts] = useState(commentResults.length)

    const t = useTranslations("Movies");

    const getAllCommentCounts = (comments: TComment[]): number => {
        if (comments) {
            if (comments.length === 0) return 0;
            let counts = comments.length;
            comments.forEach((cmt) => counts += getAllCommentCounts(cmt.replies!))
            return counts;
        }
        return 0;
    }

    useEffect(() => {
        const allComments = getAllCommentCounts(commentResults)
        setCommentCounts(allComments)
    }, [])

    const onAddReply = () => {
        setCommentCounts(cnt => cnt + 1)
    }

    const showComments = () => {
        return commentResults.map((item, index) => item.is_active && <SingleComment onAddReply={onAddReply} isReply={false} key={index} comment={item} />)
    }

    function addToArray (comment: TComment) {
        const currentComments = [...commentResults]
        currentComments.push(comment)
        setCommentResults(currentComments)
        onAddReply()
    }
    


    return (
        <div className='flex flex-col'>
            <AddComment comments={comments.results} addRoot={addToArray} />
            <div className='flex gap-4 flex-col rouned-md lg:px-25 md:px-10 sm:px-10 px-5 py-4 pb-8'>
                <strong className='font-roboto rtl:font-vazir text-dark dark:text-light pointer-events-none text-lg tracking-wider'>{t('movie.comments')} ({ commentCounts })</strong>
                {showComments()}
            </div>
        </div>
    )
}
