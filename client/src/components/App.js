import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import StreamCreate from './streams/streamCreate';
import StreamDelete from './streams/streamDelete';
import StreamEdit from './streams/streamEdit';
import StreamList from './streams/streamList';
import StreamShow from './streams/streamShow';

import Header from './header';

const App = () => {
  return (
    <div className="ui container">
      <Router>
        <Header />
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/new" exact component={StreamCreate} />
        <Route path="/streams/edit" exact component={StreamEdit} />
        <Route path="/streams/delete" exact component={StreamDelete} />
        <Route path="/streams/show" exact component={StreamShow} />
      </Router>
    </div>
  )
}

export default App;