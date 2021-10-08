import React from 'react';
import Nav from './components/Nav'
import DefaultLayout from './layouts/default'

// Import the functions you need from the SDKs you need



  

const Login = ({}) => {
    return (
        <DefaultLayout title="Login">
            <Nav/>
            <h1>Login</h1>
<p class="form-info">Don't have account?
    <a href="/user/register">Register now</a> and fix that!
</p>
<form action="/user/login" method="POST" class="cat-form">
    <div>
        <input type="email" name="email" placeholder="Email..." />
    </div>

    <div>
        <input type="password" name="password" placeholder="Password..." />
    </div>
    <div>
        <p class="message"></p>
        <button type="submit">Login</button>
        <button id="googleLogin" type="button">Login google id</button>
    </div>
    </form>
        

        </DefaultLayout>
    )
}
module.exports = Login;