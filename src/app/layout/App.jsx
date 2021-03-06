import React, {Component, Fragment} from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import NavBar from '../../features/event/nav/NavBar';
import { Route } from 'react-router-dom';

class App extends Component{
    render(){
        return(
            <Fragment>
                <NavBar/>
                <Container className = "main">
                
                   <Route path = '/events' component = {EventDashboard}/>
                  
                </Container>
            </Fragment>
            
        );
    }
   
}

export default App;