import React from 'react';

import Modal from '../modal';

const StreamDelete = () => {

  const actions = (
    <React.Fragment>
      <button className="ui negative button"> Delete </button>
      <button className="ui button"> Cancel </button>
    </React.Fragment>
  )

  return (
    <div>
      StreamDelete
      <Modal
        title="Delete stream"
        content="are you sure?"
        actions={actions}
      />
    </div>
  )
}

export default StreamDelete;
