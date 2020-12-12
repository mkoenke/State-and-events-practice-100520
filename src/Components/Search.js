import React from "react"

class Search extends React.Component {
  render() {
    return (
      <>
        <h1>Search Form</h1>
        <form>
          <input
            type="text"
            placeholder="Search for Dog"
            value={this.props.searchValue}
            onChange={this.props.searchHandler}
          />
        </form>
      </>
    )
  }
}

export default Search
