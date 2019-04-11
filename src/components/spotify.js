import React from "react"
import Iframe from 'react-iframe'

class Spotify extends React.Component {
  render() {
    return (
      <Iframe url={"https://open.spotify.com/embed/track/" + this.props.songId}
              width="300px"
              height="80px"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
      />
    )
  }
}

export default Spotify