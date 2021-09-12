import React from 'react';

const Nav = () => {
    return(
        <header>
        <nav>
            <ul class="navigation">
                <li><a href="/">Home Page</a></li>
                <li><a href="/AddBreed">Add Breed</a></li>
                <li><a href="/AddPet">Add Pet</a></li>
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