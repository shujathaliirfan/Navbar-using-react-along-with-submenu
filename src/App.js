import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
// import Home from './Pages/Home';
// import Products from './Pages/Products';
// import Service from './Pages/Service';
// import Contact from './Pages/Contact';
import Layout from './Layout';
import Overview from './Pages/Overview';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './Pages/Reports';
import Team from './Pages/Team'

function App() {
  return (
    <div className="App">
      <Layout>
      <Switch>
        <Route path='/overview' exact component={Overview} />
        <Route path='/reports' exact component={Reports} />
        <Route path='/reports/reports1' exact component={ReportsOne} />
        <Route path='/reports/reports2' exact component={ReportsTwo} />
        <Route path='/reports/reports3' exact component={ReportsThree} />
        <Route path='/team' exact component={Team} />
      </Switch>
      </Layout>
    </div>
  );
}

export default App;
