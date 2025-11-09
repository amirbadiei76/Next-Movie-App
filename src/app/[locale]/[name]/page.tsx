import React, { useEffect } from 'react'
// import dDark from '@/assets/images/d-dark.png'
// import betterCallSaul from '@/assets/images/better-call-saul.jpg'
// import breakingBad from '@/assets/images/breaking-bad.jpg'
// import got from '@/assets/images/game-of-thrones.jpg'
// import griselda from '@/assets/images/griselda.jpg'
// import penguin from '@/assets/images/penguin.jpg'
// import rickAndMorty from '@/assets/images/rick-and-morty.jpg'
// import shogun from '@/assets/images/shogun.jpg'
// import squidGame from '@/assets/images/squid-game.jpg'
// import succession from '@/assets/images/succession.jpg'
// import handsmaidTale from '@/assets/images/the-handsmaid-tale.jpg'
// import theStudio from '@/assets/images/the-studio.jpg'
// import theBear from '@/assets/images/the-bear.jpg'

import { FaClock, FaStar } from 'react-icons/fa6';
import GenreItem from '@/src/components/not-shared/movie-details/genre-item/GenreItem';
import Container from '@/src/components/shared/container/Container';
import { convertDurationToHour, convertDurationToMinute } from '@/src/utils/Converter';
import DownloadFilesDropDown from '@/src/components/not-shared/movie-details/download-dropdown/DownloadFilesDropDown';
import { getTranslations } from 'next-intl/server';
import { FaHeart, FaRegClock } from 'react-icons/fa';
import { IMDBIcon, MicIcon, SubIcon } from '@/src/components/shared/svg-icons/SVGIcons';
import { SlCalender } from 'react-icons/sl';
import { MdLanguage } from 'react-icons/md';
import { SiTicktick } from 'react-icons/si';

// import cover from '@/assets/images/mobland_cover.jpg'
// import poster from '@/assets/images/mobland_poster.webp'
import MovieDropdownItem from '@/src/components/not-shared/movie-details/movie-dropdown-item/MovieDropdownItem';
import SiteFooter from '@/src/components/shared/footer/SiteFooter';
import RelatedMovies from '@/src/components/not-shared/movie-details/related-movies/RelatedMovies'
import { BiDislike, BiLike, BiSolidDislike, BiSolidLike } from 'react-icons/bi'
import MovieRateContainer from '@/src/components/not-shared/movie-details/movie-like-dislike/MovieRateContainer'
import AddComment from '@/src/components/shared/comments/add-comment/AddComment'
import AllComments from '@/src/components/shared/comments/all-comments/AllComments'
import ShowMovieRate from '@/src/components/not-shared/movie-details/movie-rate/ShowMovieRate'
import AddWatchList from '@/src/components/not-shared/movie-details/add-watchlist/AddWatchList'

interface IMovieDetailProps {
    params: Promise<{name: string, locale: string}>,
    searchParams: Promise<{}>
}

export default async function MovieDetail({params}: IMovieDetailProps) {
    const {name, locale} = await params;
    const t = await getTranslations('Movies')

    const movie = {
        id: '1',
        title: 'Inception',
        description: 'Lorem ipsum dolor, sit amet vitae minus, ipsum voluptatum consequatur repudiandae. Suscipit culpa sunt asperiores rerum excepturi. Sunt id voluptas aliquam perspiciatis harum hic, quisquam maxime voluptatum eaque itaque? Est? 1',
        year: '2022',
        poster: '/assets/images/mobland_poster.webp',
        cover: '/assets/images/mobland_cover.jpg',
        hasSub: true,
        hasDub: true,
        liked: false,
        disliked: false,
        duration: 8180,
        ratings: {
            rotten: {
                votes: 20,
                rate: 10
            },
            meta: {
                votes: 30,
                rate: 90
            },
            imdb: {
                votes: 89,
                rate: 4.8
            },
            auditions: {
                votes: 50,
                rate: 37
            },
            site: {
                like: 21,
                dislike: 12,
            }
        },
        release: '2022/12/11',
        screening: '2023/01/12',
        language: [
            'en',
            'de'
        ],
        age: 'R+',
        countries: [
            'British',
            'Irish',
            'Germany'
        ],
        genres: [
            'Action',
            'Thriller',
            'Si-Fi'
        ],
        directors: [
            'Guy Ritchie'
        ],
        actors: [
            'Tom Hardy',
            'Pierce Brosnan',
            'Joanne Froggatt'
        ],
        movieState: 'continued',
        isMovie: false,
        original_link: {
            q_1080: {
                url: '#',

            },
            q_720: {
                url: '#',

            },
            q_480: {
                url: '#',

            },
            q_360: {
                url: '#',

            },
        },
        sub_link: {
            q_1080: {
                url: '#',
                size: '1.4GB'
            },
            q_720: {
                url: '#',
                size: '810MB'
            },
            q_480: {
                url: '#',
                size: '650MB'
            },
            q_360: {
                url: '#',
                size: '470MB'
            },
        },
        dub_link: {
            q_1080: {
                url: '#',
                size: '1.5GB'
            },
            q_720: {
                url: '#',
                size: '820MB'
            },
            q_480: {
                url: '#',
                size: '640MB'
            },
            q_360: {
                url: '#',
                size: '470MB'
            },
        },
        original_links: {
            q_1080: [
                {
                    ep: '1',
                    url: '#',
                    size: '1.2GB'
                },
                {
                    ep: '2',
                    url: '#',
                    size: '1.4GB'
                },
                {
                    ep: '3',
                    url: '#',
                    size: '2.0GB'
                },
                {
                    ep: '4',
                    url: '#',
                    size: '2.0GB'
                },
                {
                    ep: '5',
                    url: '#',
                    size: '2.0GB'
                },
                {
                    ep: '6',
                    url: '#',
                    size: '2.0GB'
                },
                {
                    ep: '7',
                    url: '#',
                    size: '2.0GB'
                },
                {
                    ep: '8',
                    url: '#',
                    size: '2.0GB'
                },
                {
                    ep: '9',
                    url: '#',
                    size: '2.0GB'
                },
                {
                    ep: '10',
                    url: '#',
                    size: '2.0GB'
                },
            ],
            q_720: [
                {
                    ep: '1',
                    url: '#',
                    size: '720MB'
                },
                {
                    ep: '2',
                    url: '#',
                    size: '700MB'
                },
                {
                    ep: '3',
                    url: '#',
                    size: '780MB'
                },
                {
                    ep: '4',
                    url: '#',
                    size: '690MB'
                },
                {
                    ep: '5',
                    url: '#',
                    size: '708MB'
                },
                {
                    ep: '6',
                    url: '#',
                    size: '708MB'
                },
                {
                    ep: '7',
                    url: '#',
                    size: '708MB'
                },
                {
                    ep: '8',
                    url: '#',
                    size: '708MB'
                },
                {
                    ep: '9',
                    url: '#',
                    size: '708MB'
                },
                {
                    ep: '10',
                    url: '#',
                    size: '708MB'
                },
                {
                    ep: '11',
                    url: '#',
                    size: '708MB'
                },
                {
                    ep: '12',
                    url: '#',
                    size: '708MB'
                },
                {
                    ep: '13',
                    url: '#',
                    size: '708MB'
                },
                {
                    ep: '14',
                    url: '#',
                    size: '708MB'
                },
                {
                    ep: '15',
                    url: '#',
                    size: '708MB'
                },
            ],
            q_480: [
                {
                    ep: '1',
                    url: '#',
                    size: '620MB'
                },
                {
                    ep: '2',
                    url: '#',
                    size: '600MB'
                },
                {
                    ep: '3',
                    url: '#',
                    size: '680MB'
                },
            ],
            q_360: [
                {
                    ep: '1',
                    url: '#',
                    size: '420MB'
                },
                {
                    ep: '2',
                    url: '#',
                    size: '400MB'
                },
                {
                    ep: '3',
                    url: '#',
                    size: '480MB'
                },
            ]
        },
        dub_links: {
            q_1080: [
                {
                    ep: '1',
                    url: '#',
                    size: '1.2GB'
                },
                {
                    ep: '2',
                    url: '#',
                    size: '1.4GB'
                },
                {
                    ep: '3',
                    url: '#',
                    size: '2.0GB'
                },
            ],
            q_720: [
                {
                    ep: '1',
                    url: '#',
                    size: '720MB'
                },
                {
                    ep: '2',
                    url: '#',
                    size: '700MB'
                },
                {
                    ep: '3',
                    url: '#',
                    size: '780MB'
                },
            ],
            q_360: [
                {
                    ep: '1',
                    url: '#',
                    size: '420MB'
                },
                {
                    ep: '2',
                    url: '#',
                    size: '400MB'
                },
                {
                    ep: '3',
                    url: '#',
                    size: '480MB'
                },
            ]
        },
        sub_links: {
            q_1080: [
                {
                    ep: '1',
                    url: '#',
                    size: '1.2GB'
                },
                {
                    ep: '2',
                    url: '#',
                    size: '1.4GB'
                },
                {
                    ep: '3',
                    url: '#',
                    size: '2.0GB'
                },
            ],
            q_720: [
                {
                    ep: '1',
                    url: '#',
                    size: '720MB'
                },
                {
                    ep: '2',
                    url: '#',
                    size: '700MB'
                },
                {
                    ep: '3',
                    url: '#',
                    size: '780MB'
                },
            ],
            q_480: [
                {
                    ep: '1',
                    url: '#',
                    size: '620MB'
                },
                {
                    ep: '2',
                    url: '#',
                    size: '600MB'
                },
                {
                    ep: '3',
                    url: '#',
                    size: '680MB'
                },
            ]
        },
        related: [
            {
                id: '1',
                year: '2015',
                imdb: 9,
                title: 'Better Call Saul',
                hasSub: false,
                hasDub: true,
                image: '/assets/images/better-call-saul.jpg'
            },
            {
                id: '2',
                year: '2008',
                imdb: 9.5,
                title: 'Breaking Bad',
                hasSub: true,
                hasDub: true,
                image: '/assets/images/breaking-bad.jpg'
            },
            {
                id: '3',
                year: '2011',
                imdb: 9,
                title: 'Game of Throns',
                hasSub: true,
                hasDub: false,
                image: '/assets/images/game-of-thrones.jpg'
            },
            {
                id: '4',
                year: '2024',
                imdb: 7,
                title: 'Griselda',
                hasSub: true,
                hasDub: false,
                image: '/assets/images/griselda.jpg'
            },
            {
                id: '5',
                year: '2024',
                imdb: 8.6,
                title: 'The Penguin',
                hasSub: true,
                hasDub: true,
                image: '/assets/images/penguin.jpg'
            },
            {
                id: '6',
                year: '2013',
                imdb: 9.1,
                title: 'Rick and Morty',
                hasSub: true,
                hasDub: false,
                image: '/assets/images/rick-and-morty.jpg'
            },
            {
                id: '7',
                year: '2024',
                imdb: 8.6,
                title: 'Shōgun',
                hasSub: true,
                hasDub: false,
                image: '/assets/images/shogun.jpg'
            },
            {
                id: '8',
                year: '2021',
                imdb: 8,
                title: 'Squid Game',
                hasSub: true,
                hasDub: true,
                image: '/assets/images/squid-game.jpg'
            },
            {
                id: '9',
                year: '2018',
                imdb: 8.8,
                title: 'Succession',
                hasSub: true,
                hasDub: false,
                image: '/assets/images/succession.jpg'
            },
            {
                id: '10',
                year: '2017',
                imdb: 8.3,
                title: 'The Handmaid’s Tale The Handmaid’s Tale',
                hasSub: true,
                hasDub: false,
                image: '/assets/images/succession.jpg'
            },
            {
                id: '11',
                year: '2025',
                imdb: 8.1,
                title: 'The Studio',
                hasSub: true,
                hasDub: true,
                image: '/assets/images/the-studio.jpg'
            },
            {
                id: '12',
                year: '2022',
                imdb: 8.5,
                title: 'The Bear',
                hasSub: true,
                hasDub: false,
                image: '/assets/images/the-bear.jpg'
            },
        ],
        comments: {
            count: 3,
            next: null,
            previous: null,
            total_pages: 1,
            current_page: 1,
            page_size: 20,
            results: [
                {
                    id: "b56ecde3-3652-40dd-995e-5961fc99c43e",
                    display_name: "1",
                    text: "parent comment",
                    is_active: true,
                    has_spoiler: false,
                    created_at: "2025-10-07T17:11:54.397649Z",
                    updated_at: "2025-10-07T17:11:54.397649Z",
                    reply_count: 1,
                    depth: 0,
                    parent: null,
                    replies: [
                        {
                            id: "9102170d-0999-4ad9-8aae-4b9c9c0cbac2",
                            display_name: "2",
                            content_type: 2,
                            object_id: 2,
                            parent: "b56ecde3-3652-40dd-995e-5961fc99c43e",
                            text: "replay to parent comment",
                            is_active: true,
                            has_spoiler: false,
                            created_at: "2025-10-07T17:12:39.237538Z",
                            updated_at: "2025-10-07T17:12:39.237538Z",
                            replies: [
                                {
                                    id: "6d9dd82f-c1a9-4207-8bbd-413253a280e3",
                                    display_name: "5",
                                    content_type: 2,
                                    object_id: 5,
                                    parent: "9102170d-0999-4ad9-8aae-4b9c9c0cbac2",
                                    text: "replay to level 2 ... replay to 3",
                                    is_active: true,
                                    has_spoiler: false,
                                    created_at: "2025-10-07T17:14:34.404027Z",
                                    updated_at: "2025-10-07T17:17:20.142642Z",
                                    replies: [],
                                    reply_count: 0,
                                    depth: 2
                                },
                                {
                                    id: "3989d339-ddfb-4d01-889f-734cf151a891",
                                    display_name: "3",
                                    content_type: 3,
                                    object_id: 3,
                                    parent: "9102170d-0999-4ad9-8aae-4b9c9c0cbac2",
                                    text: "replay to 2 - level 2 -",
                                    is_active: true,
                                    has_spoiler: false,
                                    created_at: "2025-10-07T17:13:22.781885Z",
                                    updated_at: "2025-10-07T17:13:22.781885Z",
                                    replies: [],
                                    reply_count: 0,
                                    depth: 2
                                }
                            ],
                            reply_count: 2,
                            depth: 1
                        },
                        {
                            id: "9102170d-099f-4ad9-8aae-b69c9c0cbac2",
                            display_name: "lorem",
                            content_type: 2,
                            object_id: 2,
                            parent: "b56ecde3-3652-40dd-9964-5961fc99c43e",
                            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aspernatur sequi cumque, quisquam itaque placeat delectus ipsam eveniet nulla eligendi reiciendis aut hic magni velit quibusdam, veniam ducimus soluta, consectetur perspiciatis. Nulla blanditiis in pariatur voluptatem delectus fugiat iusto adipisci consequatur nihil ducimus ratione accusamus, vero, perspiciatis facilis, dicta totam ut quisquam? Quis earum facilis eveniet dolor magni aliquid et! Quia, obcaecati. Fuga pariatur excepturi dolorum tempora deserunt, beatae ea sed facere voluptatibus ullam natus reiciendis repellendus culpa nihil? Illo distinctio voluptatum repellat quae? Temporibus obcaecati alias incidunt, dignissimos minus repellat architecto rerum quis veniam similique eligendi illum ex accusantium.",
                            is_active: true,
                            has_spoiler: false,
                            created_at: "2025-10-07T17:14:39.237538Z",
                            updated_at: "2025-10-07T17:14:39.237538Z",
                            replies: [],
                            reply_count: 0,
                            depth: 1
                        }
                    ]
                },
                {
                    id: "9102170d-099f-4ad9-8aae-b69c9c0cbac2",
                    display_name: "2-lorem",
                    content_type: 2,
                    object_id: 2,
                    parent: "b56ecde3-3652-40dd-9964-5961fc99c43e",
                    text: "Lorem, ipsum dolor sit amet consectetur adipisicing 334fdfdggbgnbn. Neque aspernatur sequi cumque, quisquam itaque placeat delectus ipsam eveniet nulla eligendi reiciendis aut hic magni velit quibusdam, veniam ducimus soluta, consectetur perspiciatis. Nulla blanditiis in pariatur voluptatem delectus fugiat iusto adipisci consequatur nihil ducimus ratione accusamus, vero, perspiciatis facilis, dicta totam ut quisquam? Quis earum facilis eveniet dolor magni aliquid et! Quia, obcaecati. Fuga pariatur excepturi dolorum tempora deserunt, beatae ea sed facere voluptatibus ullam natus reiciendis repellendus culpa nihil? Illo distinctio voluptatum repellat quae? Temporibus obcaecati alias incidunt, dignissimos minus repellat architecto rerum quis veniam similique eligendi illum ex accusantium.",
                    is_active: true,
                    has_spoiler: false,
                    created_at: "2025-10-07T17:14:39.237538Z",
                    updated_at: "2025-10-07T17:14:39.237538Z",
                    replies: [],
                    reply_count: 0,
                    depth: 0
                }
            ]
        }
    }


    const hour = convertDurationToHour(movie.duration)
    const minute = convertDurationToMinute(movie.duration)


    return (
        <>
            <img
                // src={dDark.src}
                // className='w-full absolute top-0 z-[-5] opacity-75'
                src={movie.poster}
                className='w-full min-h-300 lg:min-h-190 absolute top-0 -z-10 object-cover pointer-events-none'
            />
            {/* <div className='w-full h-140 top-0 absolute backdrop-blur-lg bg-radial to-30% from-transparent to-light dark:to-dark z-[-3]'></div> */}
            <section className='w-full min-h-135 pt-12 pb-10 backdrop-blur-lg before:content-[""] before:absolute before:inset-[3%] before:z-[-1] bg-radial to-58% from-transparent to-light dark:to-dark'>
                <div className='flex items-center h-auto lg:h-108 justify-center flex-col lg:flex-row'>
                    <div className={`overflow-hidden h-full lg:rtl:pr-25 lg:rtl:pl-0 lg:pl-25 lg:pr-0`}>
                        <div className='relative h-full'>
                            <img
                                className='rounded-xl w-81 min-h-full object-cover pointer-events-none'
                                src={movie.cover}
                            /> 
                            <div className={`absolute top-4 rounded-full border dark:border-dark-second-70 border-light-second-70 bg-light-between-50 dark:bg-dark-between-50 w-9 h-9 z-[2] ${movie.hasSub ? 'flex justify-center items-center' : 'hidden'} ${locale === 'fa' ? 'left-4' : 'right-4'}`}>
                                <SubIcon
                                    darkColor='#f2f2f2'
                                    lightColor='#000033'
                                />
                            </div>
                            <div className={`absolute top-4 rounded-full border dark:border-dark-second-70 border-light-second-70 bg-light-between-50 dark:bg-dark-between-50 w-9 h-9 z-[2] ${movie.hasDub ? 'flex justify-center items-center' : 'hidden'} ${locale === 'fa' ? 'left-4' : 'right-4'} ${movie.hasSub && locale === 'fa' ? 'left-15' : 'right-15'}`}>
                                <MicIcon
                                    darkTopColor='#d9d9d9' lightTopColor='#1a1a1a'
                                    darkBottomColor='#f2f2f2' lightBottomColor='#000099'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col min-h-full px-8 justify-between items-start flex-1 pt-4 lg:pt-0'>
                        <div className='flex flex-col h-full w-full md:gap-0.5 lg:gap-2'>
                            <h2 className='font-bold text-4xl mb-3 tracking-wide text-theme-black dark:text-theme-white'>{movie.title}</h2>
                            <div className='flex md:gap-0 gap-2.5 md:items-center items-start mb-4 flex-col md:flex-row'>
                                
                                
                                <div className='flex justify-center items-center'>
                                    <div className={`rounded-full h-10 gap-2.5 bg-light-blue-between dark:bg-other-blue-dark flex items-center px-5 ltr ${locale === 'fa' ? 'ml-6' : 'mr-6'}`}>
                                        <IMDBIcon />
                                        <strong className={`ml-1 text-lg text-theme-black dark:text-theme-white ${locale === 'fa' ? 'font-vazir' : 'font-roboto'}`}>{movie.ratings.imdb.rate}</strong>
                                    </div>

                                    <ShowMovieRate movie={movie} />
                                </div>
                                
                                <div className='inline-block translate-y-1'>
                                    {
                                        movie.genres.map((item, index) => {
                                            return (
                                                <GenreItem
                                                    key={index}
                                                    name={item}
                                                    index={index}
                                                />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className='flex flex-col gap-2 mb-4'>
                                <div className='w-max flex items-center gap-1.5 mb-3'>
                                    <SiTicktick className='text-dark-blue-second dark:text-light-blue-between' />
                                    <strong className={`text-theme-black dark:text-theme-white font-normal rtl:font-vazir font-roboto`}>New Episode or updates of a movie</strong>
                                </div>

                                <div className='flex items-center gap-1.5'>
                                    <i className="bi bi-people text-theme-black dark:text-theme-white"></i>
                                    <strong className={`text-theme-black dark:text-theme-white font-normal rtl:font-vazir font-roboto`}>{t('movie.starring')}:</strong>
                                    <div className='inline-block'>
                                        {
                                            movie.actors.map((actor, index) => {
                                                return (
                                                    <div key={index} className='inline-block text-theme-black dark:text-theme-white mx-1'>
                                                        {locale === 'fa' && index != 0 ? ' ,' : ''}
                                                        <strong className='font-normal text-sm text-theme-black dark:text-theme-white hover:cursor-pointer hover:text-dark-darker hover:dark:text-light-second'>{actor}</strong>
                                                        {locale !== 'fa' && index != movie.actors.length - 1 ? ', ' : ''}
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>

                                <div className='flex items-center gap-1.5'>
                                    {/* <FaClock size={18} /> */}
                                    <i className="bi bi-megaphone text-theme-black dark:text-theme-white"></i>
                                    <strong className={`text-theme-black dark:text-theme-white font-normal rtl:font-vazir font-roboto`}>{t('movie.director')}:</strong>
                                    <div className='inline-block'>
                                        {
                                            movie.directors.map((director, index) => {
                                                return (
                                                    <div key={index} className='inline-block text-theme-black dark:text-theme-white mx-1'>
                                                        {locale === 'fa' && index != 0 ? ' ,' : ''}
                                                        <strong className='font-normal text-sm text-theme-black dark:text-theme-white hover:cursor-pointer hover:text-dark-darker hover:dark:text-light-second'>{director}</strong>
                                                        {locale !== 'fa' && index != movie.directors.length - 1 ? ', ' : ''}
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className={`mb-5 rtl:pl-19 rtl:pr-0 pl-0 pr-19`}>
                            
                        </div> */}
                        {/*
                        <div className={`flex items-center`}>
                            <button 
                                className={`relative cursor-pointer flex items-center px-5 py-3 gap-2 rounded-lg bg-light-blue-second dark:bg-light-blue text-theme-black dark:text-theme-white
                                    border-light-blue-second dark:border-light-blue border-b-2 hover:border-b-dark-blue-second hover:dark:border-b-dark-blue
                                    rtl:font-vazir font-roboto`}
                            >
                                <FaVideo />
                                {t('movie.watch-trailer')}
                            </button>
                        </div>
                        */}

                        <div className='inline-flex mt-3 gap-4 flex-col sm:flex-row'>
                            <MovieRateContainer movie={movie} />
                            <AddWatchList movie={movie} />
                        </div>
                    </div>
                </div>
            </section>
            <main className='bg-light dark:bg-dark transition-item-none transition-color transition-padding '>
                <div className='relative lg:px-25 md:px-10 sm:px-10 px-5 py-4 pb-8'>
                    <strong className={`pointer-events-none text-dark text-lg tracking-wider transition-padding dark:text-light absolute bg-light dark:bg-dark px-3 top-0.5 transition-item-none
                        rtl:font-vazir rtl:right-13 left-13 sm:rtl:right-20 sm:left-20 md:rtl:right-20 md:left-20 lg:rtl:right-33 lg:left-33 rtl:left-auto right-auto font-roboto`}
                    >{t('movie.full-details')}</strong>
                    <div className='border-[0.001rem] md:flex-row border-dark-second flex gap-4.5 flex-col dark:border-light-second p-8 rounded-md'>
                        <video className='rounded-xl object-contain h-max md:w-1/2 w-full' poster={movie.poster} controls preload="auto">
                            <source src="/Mobland_Trailer.mp4" type="video/mp4" />
                        </video>
                       
                        <div className='flex flex-1/2 flex-col gap-2 justify-between'>
                            <div className='flex gap-2 flex-col'>
                                <div className='flex items-center gap-1.5'>
                                    <FaRegClock className='text-theme-black dark:text-theme-white' />
                                    <strong className={`text-theme-black dark:text-theme-white font-normal rtl:font-vazir font-roboto`}>{t('movie.duration')}:&nbsp;{hour}{locale === 'fa' ? ' ' : ''}{t('movie.hour')}{locale === 'fa' ? ' و ' : ' '}{minute}{locale === 'fa' ? ' ' : ''}{t('movie.minute')}</strong>
                                </div>

                                <div className='flex items-center gap-1.5'>
                                    <SlCalender className='text-theme-black dark:text-theme-white' />
                                    <strong className={`text-theme-black dark:text-theme-white font-normal rtl:font-vazir font-roboto`}>{t('movie.year')}:&nbsp;{movie.year}</strong>
                                </div>

                                <div className='flex items-center gap-1.5'>
                                    <MdLanguage className="text-base text-theme-black dark:text-theme-white" />
                                    <strong className={`text-theme-black dark:text-theme-white font-normal rtl:font-vazir font-roboto`}>{t('movie.lang')}:&nbsp;{movie.language.map((lang, index) => <strong key={index} className='font-normal'>{lang}{index != movie.language.length - 1 ? ', ' : ''}</strong>)}</strong>
                                </div>
                            </div>
                            <p
                                className={`text-theme-black dark:text-theme-white rtl:font-vazir font-roboto mb-2`}>{t('movie.summary')}:&nbsp;{movie.description}</p>
                        </div>
                    </div>

                </div>
                <div className='relative lg:px-25 md:px-10 sm:px-10 px-5 py-4 pb-8'>
                    <strong className={`pointer-events-none text-dark text-lg tracking-wider transition-padding dark:text-light absolute bg-light dark:bg-dark px-3 top-0.5 transition-item-none
                        rtl:font-vazir rtl:right-13 left-13 sm:rtl:right-20 sm:left-20 md:rtl:right-20 md:left-20 lg:rtl:right-33 lg:left-33 rtl:left-auto right-auto font-roboto`}
                    >{t('movie.download-links')}</strong>

                    <div className='border-[0.001rem] border-dark-second flex gap-4.5 flex-col dark:border-light-second p-8 rounded-md'>
                        {
                            movie.isMovie ?
                            <>
                                {   movie.original_link ?
                                    <MovieDropdownItem
                                        movieType='origin'
                                        links={movie.original_link}    
                                    /> 
                                    : null
                                }
                                {   movie.sub_link ?
                                    <MovieDropdownItem
                                        movieType='sub'
                                        links={movie.dub_link}  
                                    /> 
                                    : null
                                }
                                {   movie.dub_link ?
                                    <MovieDropdownItem
                                        movieType='dub'
                                        links={movie.dub_link}  
                                    />
                                    : null
                                } 
                            </> :
                            <>
                                {
                                    movie.original_links ?
                                    <DownloadFilesDropDown
                                        movieType={`origin`}
                                        links={movie.original_links}
                                        title={t('movie.s1')}
                                    />
                                    : null
                                }

                                {
                                    movie.sub_links ?
                                    <DownloadFilesDropDown
                                        movieType={`sub`}
                                        links={movie.sub_links}
                                        title={t('movie.s1')}
                                    />
                                    : null
                                }

                                {
                                    movie.dub_links ?
                                    <DownloadFilesDropDown
                                        movieType={'dub'}
                                        links={movie.dub_links}
                                        title={t('movie.s1')}
                                    />
                                    : null
                                }
                            </>
                        }
                    </div>
                </div>
                {/* Related Movies */}
                <div className='lg:px-25 md:px-10 min-h-100 sm:px-10 px-5'>
                    <strong className='font-roboto rtl:font-vazir text-dark dark:text-light pointer-events-none text-lg tracking-wider'>{movie.isMovie ? t('movie.related-movies') : t('movie.related-series')}</strong>
                    
                        
                    <RelatedMovies
                        relatedMovies={movie.related}
                    />
                </div>

                <AllComments comments={movie.comments} />
            </main>

            <SiteFooter />
            
        </>
    )
}