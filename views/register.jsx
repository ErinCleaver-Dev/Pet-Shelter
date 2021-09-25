import React from 'react';
import Nav from './components/Nav'
import DefaultLayout from './layouts/default'


const Register = () => {
    return (
        <DefaultLayout title="Login">
            <Nav/>
            <h1>Register Form</h1>
            <div>
                <form class="cat-form" action='/register' method="POST">
                    <label for="username">Username</label>
                        <input type="text" id="username" name="username"/>
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password"/>
                        <label for="repeatPassword">Re-Password</label>
                        <input type="password" id="repeatPassword" name="repeatPassword"/>
                        <button className="userbuttons" type="submit">Register</button>
                </form>
            </div>

        </DefaultLayout>
    )
}

module.exports = Register;