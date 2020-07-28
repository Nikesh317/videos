import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div
        className="search-bar ui segment  ui container"
        style={{ marginTop: "30px", backgroundColor: "#3d3c3c" }}
      >
        <form onSubmit={this.onFormSubmit} className="ui form ">
          <div className="field">
            <label>
              <img
                alt="Loading"
                src="https://www.droid-life.com/wp-content/uploads/2017/08/New-YouTube-Logo-980x595.jpg"
                style={{ height: "100px", width: "150px", cursor: "pointer" }}
              />
            </label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
              placeholder="Search"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
