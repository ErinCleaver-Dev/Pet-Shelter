import React from 'react';
import Nav from './components/Nav'
import DefaultLayout from './layouts/default'


const Register = ({}) => {
    return (
        <DefaultLayout title="Register">
            <Nav/>
            <h1>Register</h1>
<p class="form-info">Already registered?
    <a href="/user/login">Login now</a> and have some fun!
</p>
<form action="/user/register" method="POST" class="cat-form">
    <div>
        <input type="email" name="email" placeholder="Email..." />
    </div>
    <div>
        <input type="text" name="fullName" placeholder="Full name..." />
    </div>
    <div>
        <input type="password" name="password" placeholder="Password" />
    </div>
    <div>
        <input type="password" name="repeatPassword" placeholder="Re-password" />
    </div>
    <div>
        <p class="message"></p>
        <button type="submit">Register</button>
    </div>
</form>
        </DefaultLayout>
    )
}

module.exports = Register;