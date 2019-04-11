import React from "react"
import YouTube from 'react-youtube'

import { graphql } from "gatsby"

import Layout from "../components/layout"
import Lyrics from "../components/lyrics"
import Downloads from "../components/downloads"

export default function Template({data}) {
  const song = data.allSongsJson.edges[0].node
  let youtubeVideo;
  let downloads;

  const opts = {
    height: '195',
    width: '320',
  };

  if (song.videoId) {
    youtubeVideo = (
      <React.Fragment>
        <h3>Video</h3>
        <YouTube videoId={song.videoId} opts={opts} />
      </React.Fragment>
    )
  }

  if (song.downloads) {
    downloads = (
      <React.Fragment>
        <h3>Downloads</h3>
        <Downloads files={song.downloads} />
      </React.Fragment>
    )
  }

  return (
    <Layout>
      <div>
        <h1>{song.title}</h1>

        <h3>Lyrics</h3>
        <Lyrics lyrics={song.lyrics} />

        {youtubeVideo}
        {downloads}
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
          downloads {
            name
            link
          }
        }
      }
    }
  }
`
