import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends Component {

  renderInput(formProps){
    // taip paims visus input properties ir add them as props to the input elememnt
    return (
      <div className="field">
        <label> {formProps.label} </label>
        <input {...formProps.input}/>
      </div>
    );
    //sena sintakse
    // return <input
    //           type="text"
    //           onChange={formProps.input.onChange}
    //           value={formProps.input.value}
    //         />
  }

  onSubmit(event){
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form className="ui form">
          <Field name="title" component={this.renderInput} label="Enter title"/>
          <Field name="description" component={this.renderInput} label="Enter description"/>
        </form>
      </div>
    );
  }
}

//reduxForm receives only one object
export default reduxForm({
  form: 'stream-create',

})(StreamCreate);
