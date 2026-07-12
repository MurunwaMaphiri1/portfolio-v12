'use server'

const LASTFM_API_TOKEN = process.env.LASTFM_API_TOKEN
const LASTFM_USERNAME = process.env.LASTFM_USERNAME

type NowPlayingData = {
  title: string
  artist: string
  albumImageUrl: string
  songUrl: string
}

export async function getNowPlaying(): Promise<NowPlayingData | string> {
  const res = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${LASTFM_USERNAME}&api_key=${LASTFM_API_TOKEN}&format=json&limit=1`,
    { next: { revalidate: 30 } } // revalidate every 30s since this is server-side
  )

  if (!res.ok) return 'Error'

  const data = await res.json()
  const track = data?.recenttracks?.track?.[0]

  if (!track) return 'Currently Not Playing'

  const isNowPlaying = track['@attr']?.nowplaying === 'true'
  if (!isNowPlaying) return 'Currently Not Playing'

  return {
    title: track.name,
    artist: track.artist['#text'],
    albumImageUrl: track.image?.find((img: any) => img.size === 'medium')?.['#text'] ?? '',
    songUrl: track.url,
  }
}