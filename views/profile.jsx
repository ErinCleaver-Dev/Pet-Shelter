import React from 'react';
import Nav from './components/Nav'
import DefaultLayout from './layouts/default'

const Profile = ({props}) => {
    return (
        <DefaultLayout title="Profile">
            <Nav/>
            <h1>Profile</h1>
            <div>
                
                <form class="cat-form" action='/profile' method="POST">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username"/>
                    <label for="password">Current Password</label>
                    <input type="password" id="password" name="password"/>
                    <label for="password">new Password</label>
                    <input type="password" id="password" name="password"/>
                    <label for="repeatPassword">Re-Password</label>
                    <input type="password" id="repeatPassword" name="repeatPassword"/>
                    <button className="userbuttons" type="submit" value="Login">Login</button>
                </form>
            </div>
        </DefaultLayout>
    )
}

module.exports = Profile;