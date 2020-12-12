import React from "react"

class DogCard extends React.Component {
  state = { beenClicked: false }

  handleClick = () => {
    this.setState((prevState) => ({ beenClicked: !prevState.beenClicked }))
  }
  renderMore = () => {
    if (this.state.beenClicked) {
      return <h2>Bark</h2>
    }
  }
  render() {
    console.log(this.props.dogObj)
    return (
      <div className="card">
        <span className="content">
          <h2>{this.props.dogObj.name}</h2>
          <img alt={this.props.dogObj.name} src={this.props.dogObj.img} />
        </span>
        <span className="bark">
          <button onClick={this.handleClick}>Bark</button>
        </span>
        {this.renderMore()}
      </div>
    )
  }
}

export default DogCard
