import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Search from '../src/page/Search/index'
import NotFound from '../src/page/NotFound'

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
