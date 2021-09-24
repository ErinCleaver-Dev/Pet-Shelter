import React from 'react';

const Nav = () => {
    return(
        <header>
        <nav>
            <ul class="navigation">
                <li><a href="/">Home Page</a></li>
                <li><a href="/addBreed">Add Breed</a></li>
                <li><a href="/addPet">Add Pet</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>
            </ul>
        </nav>
        <h1>Pet Shelter</h1>
        </header>
    )
}

export default Nav