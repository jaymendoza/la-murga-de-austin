import React from "react"
import YouTube from 'react-youtube'

import { graphql } from "gatsby"

import Layout from "../components/layout"
import Lyrics from "../components/lyrics"

export default function Template({data}) {
  const song = data.allSongsJson.edges[0].node
  let video;

  const opts = {
    height: '195',
    width: '320',
  };

  if (song.videoId) {
    video = <YouTube videoId={song.videoId} opts={opts} />
  }

  return (
    <Layout>
      <div>
        <hr />
        <h1>{song.title}</h1>
        <Lyrics lyrics={song.lyrics} />
        {video}
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
          videoId
        }
      }
    }
  }
`
