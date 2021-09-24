import React from 'react';
import Nav from './components/Nav'
import DefaultLayout from './layouts/default'


const Login = () => {
    console.log("login")
    return (
        <DefaultLayout title="Login">
            <Nav/>
            <h1>Login Form</h1>
            <div class="form">
                <form action='/' method="POST">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username"/>
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password"/>
                    <input type="submit" value="Login"/>
                </form>
            </div>
        </DefaultLayout>
    )
}

module.exports = Login;