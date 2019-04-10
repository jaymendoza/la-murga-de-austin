import React from 'react'

class Lyrics extends React.Component {
  render() {
    return ( 
      <div class="lyrics">
        {this.props.lyrics.map(lyric => (
          <div class="lyric">{lyric}</div>
        ))}
      </div>
    )
  }
}

export default Lyrics
