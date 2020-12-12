import React, { Component } from "react"
import apiResponse from "../api.js"
import DogCard from "../Components/DogCard"
import Form from "../Components/Form"
import Search from "../Components/Search"

class DogsList extends Component {
  state = { dogs: apiResponse, searchValue: "" }

  allDogs = () => {
    return this.filteredDogs().map((dog) => <DogCard dogObj={dog} />)
  }
  // console.log(<DogCard dogObj={dog} />)

  submitHandler = (dogObj) => {
    console.log(dogObj)
    let newDogArray = [...this.state.dogs, dogObj]
    this.setState({ dogs: newDogArray })
  }

  searchHandler = (e) => {
    console.log(e.target.value)
    // let newArray = this.state.filteredDogs.filter((dog) =>
    //   dog.name.toLowerCase().includes(e.target.value.toLowerCase())
    // )
    this.setState({ searchValue: e.target.value })
  }

  filteredDogs = () => {
    return this.state.dogs.filter((dog) =>
      dog.name.toLowerCase().includes(this.state.searchValue.toLowerCase())
    )
  }
  render() {
    console.log(this.state)
    return (
      <div className="list">
        <Form submitHandler={this.submitHandler} />
        <h2>Dog List</h2>
        <Search
          searchValue={this.state.searchValue}
          searchHandler={this.searchHandler}
        />
        {this.allDogs()}
      </div>
    )
  }
}

export default DogsList
