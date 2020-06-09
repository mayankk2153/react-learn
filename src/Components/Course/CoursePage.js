import React, { Component } from "react";
import { connect } from "react-redux";

export class CoursePage extends Component {
  state = {
    course: {
      title: "",
    },
  };

  handleChange = (event) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addData(this.state.course);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Courses</h2>
          <h3>Add Course</h3>
          <input type="text" onChange={this.handleChange} />
          <input type="submit" value="save" />
        </form>
        {JSON.stringify(this.props.state, 0, 2)}
      </div>
    );
  }
}

let matchStateToProps = (state) => {
  return { state: state };
};

let matchDispatchToProps = (dispatch) => {
  return {
    addData: (course) => dispatch({ type: "CREATE_COURSE", course: course }),
  };
};

export default connect(matchStateToProps, matchDispatchToProps)(CoursePage);
