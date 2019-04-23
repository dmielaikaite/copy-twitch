import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStreams } from '../../actions';
import StreamForm from './streamForm';

class StreamCreate extends Component {

  onSubmit = (formValues) => {
    console.log(formValues);
    this.props.createStreams(formValues);
  }

  render() {
    // every single time when user interacts with form renderInput is called and validate is called too
    return (
      <div>
        <h3>Create a stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, {
  createStreams,
})(StreamCreate);
