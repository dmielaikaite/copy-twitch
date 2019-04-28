import React from 'react';

import Modal from '../modal';

const StreamDelete = () => {

  const actions = (
    <div>
      <button className="ui negative button"> Delete </button>
      <button className="ui button"> Cancel </button>
    </div>
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
