import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Router,browserHistory} from 'react-router';
import Routes from './Routes';
import ConfigureStore from './Component/Store/ConfigStore';
import { Weather } from './Component/Actions/Weather';
import { GetLocation } from './Component/Actions/Weather';
import 'bootstrap/dist/css/bootstrap.css';


const store=ConfigureStore();
 store.dispatch(GetLocation());


ReactDOM.render(
<Provider store={store}>
<Router history={browserHistory} routes={Routes}/>
</Provider>
, document.getElementById('root'));
registerServiceWorker();
