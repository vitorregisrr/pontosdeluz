import dynamic from 'next/dynamic'
import InfoLink from 'components/InfoLink'
import { MapProps } from 'components/Map'
import UserMenu from 'components/UserMenu'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function Home({ places }: MapProps) {
  return (
    <>
      <InfoLink position="bottom" href="/about" />
      <UserMenu />
      <Map places={places} />
    </>
  )
}
