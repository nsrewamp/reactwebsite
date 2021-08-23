import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/include/Header'
import Footer from './components/include/Footer';
import Home from './components/Home';
import Support from './components/Support';
import Services from './components/Services';
import Error from './Error';
import Statewise from './components/stateWiseData/Statewise';
import { Route, Switch } from 'react-router-dom';
// import { useState } from 'react';
// import AddIcon from '@material-ui/icons/Add';/

function App() {
  return (
    <>
      <Header />
      <div className="container-fluid p-4 mb-2">
        <Switch>
          <Route exact path="/" component={() => <Home name="Home" />} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/support" component={Support} />
          <Route exact path="/statewise" component={Statewise} />
          <Route component={Error} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}
export default App;