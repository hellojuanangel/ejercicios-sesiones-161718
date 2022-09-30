import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Loginpage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import Dashboardpage from './pages/dashboard/DashBoard';
import Taskspage from './pages/tasks/TasksPage';
import Notfoundpage from './pages/404/NotFoundPage';


function AppRoutingFinal() {

  // TODO: Change to value from sessionStorage (or something dinamic)
  let loggedIn = false;

  return (
    <Router>
      {/* Route Switch */}
      <Switch>
        {/* Redirections to protect our routes */}
        <Route exact path='/'>
          {
           loggedIn ? 
           (<Redirect from='/' to='/dashboard' />)
           :
           (<Redirect from='/' to='/login' /> )
          }
        </Route>
        {/* Login Route */}
        <Route exact path='/login' component={Loginpage} />
        {/* Register Route */}
        <Route exact path='/register'>
        {
           loggedIn ? 
           (<Redirect from='/' to='/dashboard' />)
           :
           (<RegisterPage /> )
          }
        </Route>
        {/* DashBoard Route */}
        <Route exact path='/dashboard'>
          {
           loggedIn ? 
           (<Dashboardpage />)
           :
           (<Redirect from='/' to='/login' /> )
          }
        </Route>
        {/* Task Route */}
        <Route exact path='/tasks'>
          {
           loggedIn ? 
           (<Taskspage />)
           :
           (<Redirect from='/' to='/login' /> )
          }
        </Route>
        <Route component={Notfoundpage}/>
      </Switch>
    </Router>
  );
}

export default AppRoutingFinal;
