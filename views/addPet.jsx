import React from 'react';
import Nav from './components/Nav'
import DefaultLayout from './layouts/default'


const AddPet = ({img, name, alt, breed, description}) => {
    return (
        <DefaultLayout title="Add Pet">
            <Nav/>
            <form action="/addPet" method="POST" class="cat-form" enctype="multipart/form-data">
                <h2>Add Cat</h2>
                <label for="name">Name</label>
                <input name="name" type="text" id="name"/>
                <label for="description">Description</label>
                <textarea name="description" id="description"></textarea>
                <label for="image">Image</label>
                <input name="upload" type="file" id="image"/>
                <label for="group">Breed</label>
                <select name="breed" id="group">
                    <option value="Fluffy Cat">Fluffy Cat</option>
                    <option value="Fluffy Cat">Fluffy Cat</option>
                    <option value="Fluffy Cat">Fluffy Cat</option>
                </select>
                <button type="submit">Add Cat</button>
            </form>
        </DefaultLayout>
    )
}

module.exports = AddPet;