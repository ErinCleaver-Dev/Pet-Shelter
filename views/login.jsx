import React from 'react';
import Nav from './components/Nav'
import DefaultLayout from './layouts/default'


const Login = () => {
    console.log("login")
    return (
        <DefaultLayout title="Login">
            <Nav/>
            <h1>Login Form</h1>
            <div>
                <p class="from-info">If you do not have an account click on <a href="/register">Register now.</a>
                   
                </p>
                <form class="cat-form" action='/login' method="POST">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username"/>
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password"/>
                    <button className="userbuttons" type="submit" value="Login">Login</button>
                </form>
            </div>
        </DefaultLayout>
    )
}

module.exports = Login;