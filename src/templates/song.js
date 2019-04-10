import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Lyrics from "../components/lyrics"

export default function Template({data}) {
  const song = data.allSongsJson.edges[0].node

  return (
    <Layout>
      <div>
        <hr />
        <h1>{song.title}</h1>
        <Lyrics lyrics={song.lyrics} />
      </div>
    </Layout>
  )
}

export const songQuery = graphql`
  query($slug: String!) {
    allSongsJson(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          lyrics
        }
      }
    }
  }
`
