import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import history from '../../history';
import Modal from '../modal';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends Component {

  componentDidMount(){
    this.props.fetchStream(this.props.match.params.id);
  }

  enderActions() {
    return (
      <React.Fragment>
        <button onClick={() => this.props.deleteStream(this.props.match.params.id)} className="ui negative button"> Delete </button>
        <Link to="/" className="ui button"> Cancel </Link>
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

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);
