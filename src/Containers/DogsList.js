import React, { Component } from "react"
import apiResponse from "../api.js"
import DogCard from "../Components/DogCard"

class DogsList extends Component {
  allDogs = () => {
    return apiResponse.map((dog) => <DogCard dogObj={dog} />)
  }
  // console.log(<DogCard dogObj={dog} />)

  render() {
    // console.log(this.allDogs())
    return (
      <div className="list">
        <h2>Dog List</h2>
        {this.allDogs()}
      </div>
    )
  }
}

export default DogsList
