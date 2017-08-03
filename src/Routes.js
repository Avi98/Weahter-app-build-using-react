import React from 'react';
import App from './App';
import { Route,IndexRoute } from 'react-router';
import Home from './Component/Home/Home';


export default(
 <div>
    <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    </Route>
</div>
)