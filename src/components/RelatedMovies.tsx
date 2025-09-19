"use client"
import React, { useEffect, useRef, useState } from 'react'
import RelatedCard, { TRelatedCard } from './RelatedCard'

interface IRelatedMovies {
    relatedMovies: TRelatedCard[]
}

export default function RelatedMovies({relatedMovies}: IRelatedMovies) {


    const scrollAmount = 212;
    const scrollDiv = useRef<HTMLDivElement>(null) as React.RefObject<HTMLInputElement>
    const leftDivArrow = useRef<HTMLDivElement>(null)
    const rightDivArrow = useRef<HTMLDivElement>(null)
    const mainScroll = useRef<HTMLDivElement>(null) as React.RefObject<HTMLInputElement>;

    const [scrollLeftAmount, setScrollLeftAmount] = useState<number | undefined>(0)
    // const [isScrolling, setIsScrolling] = useState(false);
    // const [isMouseDown, setIsMouseDown] = useState(false);
    // const mouseCoords = useRef({
    //     startX: 0,
    //     startY: 0,
    //     scrollLeft: 0,
    //     scrollTop: 0
    // });

    // const handleDragStart = (e) => {
    //     if (!scrollDiv.current) return
    //   const slider = scrollDiv.current.children[0].children[0];
    //     const startX = e.pageX - slider.offsetLeft;
    //     const startY = e.pageY - slider.offsetTop;
    //     const scrollLeft = slider.scrollLeft;
    //     const scrollTop = slider.scrollTop;
    //     mouseCoords.current = { startX, startY, scrollLeft, scrollTop }
    //     setIsMouseDown(true)
    //     document.body.style.cursor = "grabbing"
    // }
    // const handleDragEnd = () => {
    //     setIsMouseDown(false)
    //     if (!scrollDiv.current) return
    //     document.body.style.cursor = "default"
    // }
    // const handleDrag = (e) => {
    //     if (!isMouseDown || ! scrollDiv.current) return;
    //     e.preventDefault();
    //     const slider = scrollDiv.current.children[0];
    //     const x = e.pageX - slider.offsetLeft;
    //     const y = e.pageY - slider.offsetTop;
    //     const walkX = (x - mouseCoords.current.startX) * 1.5;
    //     const walkY = (y - mouseCoords.current.startY) * 1.5;
    //     slider.scrollLeft = mouseCoords.current.scrollLeft - walkX;
    //     slider.scrollTop = mouseCoords.current.scrollTop - walkY;
    //     console.log(walkX, walkY)
    // }


    const scrollRight = () => {

        // setScrollLeftAmount(scrollDiv.current!!.scrollLeft)
        scrollDiv.current?.scrollTo({left: scrollDiv.current.scrollLeft + scrollAmount, behavior: 'smooth'})
        // if (scrollDiv.current?.scrollLeft === 0) {
        //     rightDivArrow.current?.classList.add('hide-visibility');
        // } else rightDivArrow.current?.classList.remove('hide-visibility');
        // if (scrollDiv.current.scrollLeft >= -19) {
        //     rightDivArrow.current?.classList.add('hide-visibility');
        // }
        // else rightDivArrow.current?.classList.remove('hide-visibility');

        console.log("Left: " + scrollDiv.current?.scrollLeft)
    }

    useEffect(() => {
        scrollDiv.current?.scrollTo({left: 0})
    }, [])

    // useEffect(() => {
    //     if (scrollDiv.current?.scrollLeft && scrollDiv.current?.scrollLeft < 0) {
    //         rightDivArrow.current?.classList.remove('hide-visibility');
    //     }
    //     else {
    //         rightDivArrow.current?.classList.add('hide-visibility');
    //     }
    // }, [scrollDiv.current?.scrollLeft])

    // useEffect(() => {
    //     console.log(scrollLeftAmount)
    //     if (scrollDiv.current?.scrollLeft === 0) {
    //         rightDivArrow.current?.classList.add('hide-visibility');
    //     } else rightDivArrow.current?.classList.remove('hide-visibility');
    // }, [scrollLeftAmount, scrollDiv.current?.scrollLeft])

    const scrollLeft = () => {
        // if (scrollDiv.current.scrollLeft <= 0) {
        //     rightDivArrow.current?.classList.remove('hide-visibility');
        // }
        
        // if (scrollDiv.current!!) {
        //     console.log('Left: ', scrollDiv.current.scrollLeft)
        //     console.log('Width: ', scrollDiv.current.scrollWidth)
        // }

        // scrollDiv.current?.addEventListener('scroll', (e) => {
        //     console.log(e)
        // })

        
        // if (scrollDiv.current?.scrollLeft === 0) {
        //     rightDivArrow.current?.classList.add('hide-visibility');
        // } else rightDivArrow.current?.classList.remove('hide-visibility');
        // if (scrollDiv.current?.scrollLeft) 
        // setScrollLeftAmount(scrollDiv.current!!.scrollLeft)
        scrollDiv.current?.scrollTo({left: scrollDiv.current.scrollLeft - scrollAmount, behavior: 'smooth'})
    
        console.log("Left: " + scrollDiv.current?.scrollLeft)
    }

    useEffect(() => {
        if (scrollDiv.current?.scrollLeft) {
            
        }
    }, [scrollDiv.current])
    

    return (
        <div
            className='relative mt-4 w-full overflow-auto min-h-100 z-[2]'
        >
            <div ref={leftDivArrow} onClick={scrollLeft} className='absolute hover:from-40% z-[1] hover:cursor-pointer flex items-center justify-center w-12 h-90 bg-linear-to-r from-light dark:from-dark to-transparent left-0'>
                <i className='bi pr-6 bi-chevron-left z-[1] text-center block w-12 h-full align-middle leading-90 hover:text-dark-second hover:dark:text-light-second text-2xl text-dark dark:text-light'></i>
                <div></div>
            </div>
            <div ref={rightDivArrow} onClick={scrollRight} className={`absolute hover:from-40% z-[1] hover:cursor-pointer flex items-center justify-center w-12 h-90 bg-linear-to-l from-light dark:from-dark to-transparent right-0`}>
                <i className={`bi pl-6 bi-chevron-right z-[1] text-center block w-12 h-full align-middle leading-90 hover:text-dark-second hover:dark:text-light-second text-2xl text-dark dark:text-light`}></i>
            </div>
            <div ref={scrollDiv} className='min-h-full scroll-hide w-full overflow-x-scroll scroll-smooth scroll-snap-x'>
                <div ref={mainScroll} className='min-w-max px-2 scroll-hide min-h-82 z-0 inline-block scroll-snap-x'>
                    {
                        relatedMovies.map((relatedItem, index) => {
                            return (
                                <RelatedCard key={relatedItem.id} {...relatedItem} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
