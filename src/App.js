import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { router } from './router/router'
import MenuLayout  from './components/menu-layout/index'
import NotFound from '@/router/404'

import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/markLine';

import './App.css';

function RouteWithSubRoutes (route) {
  return (
    <Route
      path={ route.path }
      render={ props => {
        return (
          // pass the sub-routes down to keep nesting
          <route.component { ...props } routes={ route.routes } />
        )
      } }
    />
  )
}
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <MenuLayout routes={router}>
            <Switch>
              <Redirect from='/' to='/login' exact />
              {
                router.map((route, i) => (
                  <RouteWithSubRoutes exact key={ i } { ...route } />
                ))
              }
              <Route  component={NotFound} />
            </Switch>
          </MenuLayout>
        </div>
      </Router>
    );
  }
}

export default App;
