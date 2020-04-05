import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RemoteJobApp from '../apps/RemoteJobApp/components/RemoteJobApp';
import IndecisionApp from '../apps/IndecisionApp/components/IndecisionApp';
import TaskCardApp from '../apps/TaskCardApp/App';
import Home from '../components/Home';

class AppRouter extends React.Component {

    render() {
        const basename = `${process.env.PUBLIC_URL}/`;
        return (
            <BrowserRouter basename={basename}>
                <Switch>
                    <Route path='/' component={Home} exact={true} />
                    <Route path='/remotejobapp' component={RemoteJobApp} exact={true} />
                    <Route path='/indecisionapp' component={IndecisionApp} exact={true} />
                    <Route path='/taskcardapp' component={TaskCardApp} exact={true} />
                </Switch>
            </BrowserRouter>
        )
    }
};

export default AppRouter;
