'use client'

import { useEffect, useState } from 'react'
import { getNowPlaying } from '@/lib/LastFM'
import { Spotify } from '@/components/icons/spotify'
import NowPlayingIndicator from './NowPlayingIndictor'

const POLL_INTERVAL_MS = 15000

export default function NowPlaying() {
  const [nowPlayingData, setNowPlayingData] = useState<
    Awaited<ReturnType<typeof getNowPlaying>> | null
  >(null)

  useEffect(() => {
    let isMounted = true

    const fetchNowPlaying = async () => {
      const data = await getNowPlaying()
      if (isMounted) setNowPlayingData(data)
    }

    fetchNowPlaying()
    const intervalId = setInterval(fetchNowPlaying, POLL_INTERVAL_MS)

    return () => {
      isMounted = false
      clearInterval(intervalId)
    }
  }, [])

  if (nowPlayingData === null) return null

  if (typeof nowPlayingData === 'string') {
    return (
      <div className="mb-2 flex w-full flex-row-reverse items-center justify-center space-x-0 text-sm sm:flex-row sm:space-x-2">
        {' '}
        <Spotify className="ml-auto size-4" />
        <div className="inline-flex w-full max-w-full flex-col truncate sm:flex-row">
          <p className="font-medium text-gray-200">
            {nowPlayingData === 'Currently Not Playing'
              ? 'Not  Listening'
              : 'Oopsie, No Tunes to Spin!'}
          </p>
          <p className="ml-1 text-gray-200 max-sm:hidden"> – Spotify</p>
        </div>
      </div>
    )
  }

  const { artist, songUrl, title, albumImageUrl } = nowPlayingData

  return (
    <div className="mb-2 flex w-full flex-row-reverse items-center justify-center space-x-0 text-sm sm:flex-row sm:space-x-2">
        <div className="ml-auto h-6 w-6 overflow-hidden rounded-4xl shadow-md">
        <img
            src={albumImageUrl}
            alt={title}
            className="h-full w-full object-cover"
        />
        </div>
      <div className="inline-flex w-full max-w-full flex-col truncate sm:flex-row">
        <div className='inline-flex mb-2'>
          <a
            className="max-w-max truncate font-medium text-gray-200"
            href={songUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
          </a>
          <div className='ml-2 -mt-1 sm:hidden'>
            <NowPlayingIndicator />
          </div>
        </div>
        <span className="mx-2 hidden text-gray-200 sm:block">
          {' – '}
        </span>
        <p className="max-w-max truncate text-gray-500">
          {artist ?? 'Spotify'}
        </p>
        <div className='ml-2 hidden sm:block'>
          <NowPlayingIndicator />
        </div>
      </div>
    </div>
  )
}