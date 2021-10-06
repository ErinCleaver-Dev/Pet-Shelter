import React from 'react';
import { LocalStorage } from "node-localstorage";

global.localStorage = new LocalStorage('./scratch');

const Nav = (props) => {
    console.log(props)
    let isLoggedIn = false;

    if(props.props){

if(typeof(props.props.isLoggedIn)==="undefined"){
    console.log(isLoggedIn + " <- isLoggedIn")
    console.log(props.props)
}else{
    isLoggedIn = props.props.isLoggedIn;
    console.log(props.props)
    console.log(isLoggedIn + " <- isLoggedIn")
}
}else{

    if( localStorage.getItem('isLoggedIn'))
    isLoggedIn = localStorage.getItem('isLoggedIn')

}

    return(
        <header>
        <nav>
            <ul class="navigation">
                <li><a href="/">Home Page</a></li>
                <li><a href="/AddBreed">Add Breed</a></li>
                <li><a href="/AddPet">Add Pet</a></li>
                {(isLoggedIn) ? (
                    <li><a href="/user/logout">Logout</a></li>
                ) : (
                    <>
                    <li><a href="/user/login">Login</a></li>
                    <li><a href="/user/register">Register</a></li>
                    </>
                )}

                
            </ul>
        </nav>
        <h1>Pet Shelter</h1>
        <form action="/search">
            <input type="text"/>
            <button type="button">Search</button>
        </form>
        </header>
    )
}

export default Nav