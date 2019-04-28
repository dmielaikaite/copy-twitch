import React, { Component } from 'react';

import history from '../../history';
import Modal from '../modal';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamDelete extends Component {

  componentDidMount(){
    this.props.fetchStream(this.props.match.params.id);
  }

  enderActions() {
    return (
      <React.Fragment>
        <button className="ui negative button"> Delete </button>
        <button className="ui button"> Cancel </button>
      </React.Fragment>
    )
  }

  renderContent(){
    if(!this.props.stream){
      return 'Are you sure you want to delete this stream';
    }
    return `Are you sure you want to delete this stream: ${this.props.stream.title}`
  }

  render(){
    return (
      <Modal
        title={"Delete stream"}
        content={this.renderContent()}
        actions={this.enderActions()}
        onDismiss={() => history.push('/')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, { fetchStream })(StreamDelete);
