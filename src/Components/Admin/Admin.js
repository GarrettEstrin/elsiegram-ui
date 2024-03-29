import React, {Component} from 'react';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom'

import AdminMenu from './AdminMenu.js';
import ApproveInvites from './ApproveInvites.js';
import AddPost from '../AddPost/AddPost.js';
import EditPost from './EditPost.js';
import Users from './Users.js';
import UserEvents from './UserEvents.js';

import "./Admin.scss";

class Admin extends Component {
    render() {
        let { userRole } = this.props;
        if(userRole === "unauthorized" || userRole === "subscriber") {
            if(userRole !== "admin") {
                return <Redirect to="/" />
            }
        }
        return (
            <React.Fragment>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/admin">
                        <AdminMenu />
                    </Route>
                    <Route exact path="/admin/invites">
                        <ApproveInvites />
                    </Route>
                    <Route path="/admin/add-post" exact render={(props) => <AddPost {...props} userRole={userRole} />} />
                    <Route path="/admin/edit-post/:page" exact render={(props) => <EditPost {...props} userRole={userRole} />} />
                    <Route path="/admin/users" exact render={(props) => <Users {...props} userRole={userRole} />} />
                    <Route path="/admin/user-events" exact render={(props) => <UserEvents {...props} userRole={userRole} />} />
                    <Route path="*">
                        <Redirect to="/admin" />
                    </Route>
                </Switch>
            </BrowserRouter>
            </React.Fragment>
        )
    }
}

export default Admin;