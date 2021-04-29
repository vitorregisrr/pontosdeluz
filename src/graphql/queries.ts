import { gql } from 'graphql-request'

export const GET_PAGES = gql`
  query getPages($first: Int) {
    pages(first: $first) {
      id
      heading
      slug
      body {
        html
      }
    }
  }
`
export const GET_PAGE_BY_SLUG = gql`
  query getPageBySlug($slug: String!) {
    page(where: { slug: $slug }) {
      id
      slug
      heading
      body {
        html
      }
    }
  }
`

export const GET_PLACES = gql`
  query getPlaces($first: Int) {
    places(first: $first) {
      id
      slug
      visible
      visited
      name
      resume
      tags
      cordinates {
        longitude
        latitude
      }
      aboutText {
        html
        text
      }
      gallery {
        url
        width
        height
      }
    }
  }
`

export const GET_PLACE_BY_SLUG = gql`
  query getPlaceBySlug($slug: String!) {
    place(where: { slug: $slug }) {
      id
      slug
      visible
      visited
      name
      resume
      tags
      cordinates {
        longitude
        latitude
      }
      aboutText {
        html
        text
      }
      gallery {
        url
        width
        height
      }
    }
  }
`
