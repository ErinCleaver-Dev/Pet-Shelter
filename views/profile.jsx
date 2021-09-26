import React from 'react';
import Nav from './components/Nav'
import DefaultLayout from './layouts/default'

const Profile = ({props}) => {
    return (
        <DefaultLayout title="Profile">
            <Nav/>
            <h1>Profile</h1>
            <div>
                <p>Logged in, <a href="/logout">Log out</a></p>
            </div>
        </DefaultLayout>
    )
}

module.exports = Profile;