import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

const SongListPage = ({ data }) => (
  <Layout>
    <h1>Songs</h1>
    {data.allSongsJson.edges.map(song => (
      <h3><Link to={song.node.slug}>{song.node.title}</Link></h3>
    ))}

  </Layout>
)

export const songListQuery = graphql`
  query {
    allSongsJson {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`

export default SongListPage
