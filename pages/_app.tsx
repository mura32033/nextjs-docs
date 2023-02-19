import { IBM_Plex_Sans_JP } from '@next/font/google'

const primary = IBM_Plex_Sans_JP({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={primary.className}>
      <Component {...pageProps} />
    </div>
  )
}