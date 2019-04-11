import React from "react"

class Downloads extends React.Component {
  render() {
    return (
      <div>
        {this.props.files.map(file => (
          <div>
            <a href={file.link}>{file.name}</a>
          </div>
        ))}
      </div>
    )
  }
}

export default Downloads
