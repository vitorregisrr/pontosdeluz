import HomeTemplate from 'templates/Home'
import client from 'graphql/client'
import { GET_PLACES } from 'graphql/queries'
import { GetPlacesQuery } from 'graphql/generated/graphql'
import { MapProps } from 'components/Map'

export default function Home({ places, tags }: MapProps) {
  return <HomeTemplate places={places || []} tags={tags || []} />
}

export const getStaticProps = async () => {
  const { places, tags } = await client.request<GetPlacesQuery>(GET_PLACES)

  return {
    props: {
      places,
      tags,
    },
  }
}
