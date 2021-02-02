import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Search from '../src/page/Search'
import NotFound from '../src/page/NotFound/index'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Search} exact/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
