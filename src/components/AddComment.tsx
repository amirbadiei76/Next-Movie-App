"use client"

import React, { ChangeEvent, ChangeEventHandler, FormEvent, useState } from 'react'


export default function AddComment() {

    const [description, setDescription] = useState('')
    const [name, setName] = useState('')
    const [hasSpoil, setHasSpoil] = useState(false)

    function submitComment (e: FormEvent) {
        e.preventDefault()
        console.log(name)
    }


    return (
        <form
            onSubmit={submitComment}
            className='w-full flex bg-amber-400 h-8'
        >
            <textarea
                value={description}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
            ></textarea>

            <input type="text" value={name} onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />

            <button></button>
        </form>
    )
}
