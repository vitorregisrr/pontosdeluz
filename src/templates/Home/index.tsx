import dynamic from 'next/dynamic'
import InfoLink from 'components/InfoLink'
import { MapProps } from 'components/Map'
import ProfileLink from 'components/ProfileLink'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function Home({ places }: MapProps) {
  return (
    <>
      <InfoLink position="bottom" href="/about" />
      <ProfileLink />
      <Map places={places} />
    </>
  )
}
