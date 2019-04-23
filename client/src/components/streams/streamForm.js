import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends Component {

  renderInput = (formProps) => {
    const className = `field ${formProps.meta.error && formProps.meta.touched ? 'error' : ''}`
    // taip paims visus input properties ir add them as props to the input elememnt
    return (
      <div className={className}>
        <label> {formProps.label} </label>
        <input {...formProps.input}/>
        {this.renderError(formProps.meta)}
      </div>
    );
    //sena sintakse
    // return <input
    //           type="text"
    //           onChange={formProps.input.onChange}
    //           value={formProps.input.value}
    //         />
  }

  renderError(meta){
    if (meta.touched && meta.error) {
      return (
        <div className="ui error message">
          <div className="header"> {meta.error} </div>
        </div>
      );
    }
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }

  render() {
    // every single time when user interacts with form renderInput is called and validate is called too
    return (
      <div>
        <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field name="title" component={this.renderInput} label="Enter title"/>
          <Field name="description" component={this.renderInput} label="Enter description"/>
          <button className="ui button primary">Submit</button>
        </form>
      </div>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  //only run if the user did not enter the title
  if (!formValues.title) {
    errors.title = "You must enter the title"
  }
  if (!formValues.description){
    errors.description = "You must enter the description"
  }

  return errors;
}

//reduxForm receives only one object
export default reduxForm({
  form: 'stream-form',
  validate: validate

})(StreamForm);
