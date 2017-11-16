import React, { Component } from "react";
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
} from "react-bootstrap";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: "",
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onInputChange(event) {
    this.setState({
      term: event.target.value,
    });
    /* if term is non empty, serch youtube*/
    if (this.state.term.length > 0) this.props.onVideoChange(this.state.term);
  }

  onKeyDown(event) {
    if (event.key === "Escape") {
      this.setState({ term: "" });
    } else if (event.key === "Enter") {
      this.props.onVideoSearch(this.state.term);
    }
  }

  render() {
    return (
      <div className="col-md-12" style={{ width: "100%" }}>
        <form action="">
          <FormGroup bsSize="large">
            <FormControl
              autoFocus
              style={{ paddingLeft: "1rem" }}
              placeholder="Type search term"
              value={this.state.term}
              onChange={this.onInputChange}
              onKeyDown={this.onKeyDown}
            />
            <FormControl.Feedback />
          </FormGroup>
        </form>
      </div>
    );
  }
}
