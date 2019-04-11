import React from "react"

class Downloads extends React.Component {
  render() {
    return (
      <div>
        {this.props.files.map(x => (
          <div>
            <a href={x.link}>{x.name}</a>
          </div>
        ))}
      </div>
    )
  }
}

export default Downloads
