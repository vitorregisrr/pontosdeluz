import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'
import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'
import ProfileLink from 'components/ProfileLink'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function Home({ places }: MapProps) {
  return (
    <>
      <LinkWrapper position={'top'} href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <ProfileLink />
      <Map places={places} />
    </>
  )
}
