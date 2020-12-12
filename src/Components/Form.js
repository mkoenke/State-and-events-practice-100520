import React from "react"

class Form extends React.Component {
  state = {
    name: "",
    img: "",
    breed: "",
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target)
    this.props.submitHandler({
      name: e.target[0].value,
      img: e.target[1].value,
      breed: e.target[2].value,
    })
    this.setState({
      name: "",
      img: "",
      breed: "",
    })
  }
  changeHandler = (e) => {
    console.log(e.target.value)
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    return (
      <>
        <h1>Create a New Dog</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Dog's name"
            value={this.state.name}
            onChange={this.changeHandler}
          />
          <input
            type="text"
            name="img"
            placeholder="Image Url"
            value={this.state.img}
            onChange={this.changeHandler}
          />
          <input
            type="text"
            name="breed"
            placeholder="Dog's breed"
            value={this.state.breed}
            onChange={this.changeHandler}
          />
          <input type="submit" value="Create Dog" />
        </form>
      </>
    )
  }
}

export default Form
