import React from 'react';
import Nav from './components/Nav'
import DefaultLayout from './layouts/default'


const Profile = ({}) => {
    return (
        <DefaultLayout title="Profile">
            <Nav/>
            <div class="user-info">
    <div>
        <p>Email: <span>test</span></p> |
        <p>Name: <span>[2]</span></p> |
        <p><a href="/user/logout">Logout</a></p>
    </div>
  
    
</div>
        </DefaultLayout>
    )
}

module.exports = Profile;