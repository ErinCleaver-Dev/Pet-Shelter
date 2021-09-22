import React from 'react';
import Nav from './components/Nav'
import DefaultLayout from './layouts/default'


const Delete = (props) => {
    return (
        <DefaultLayout title="Seleter a Cat">
            <Nav/>
            <form action="#" class="cat-form">
                <h2>Shelter the cat</h2>
                <img src={props.img} alt=""/>
                <label for="name">Name</label>
                <input type="text" id="name" value={props.name} disabled/>
                <label for="description">Description</label>
                <textarea id="description" disabled>
                    {props.description}
                </textarea>
                <label for="group">Breed</label>
                <select id="group" disabled>
                    <option value={props.breed}>{props.breed}</option>
                </select>
                <button>SHELTER THE CAT</button>
            </form>
        </DefaultLayout>
    )
}

module.exports = Delete;