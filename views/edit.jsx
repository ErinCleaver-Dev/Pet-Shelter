import React from 'react';
import Nav from './components/Nav'
import DefaultLayout from './layouts/default'


const Edit = ({pet}) => {
    return (
        <DefaultLayout title="Edit Cat">
            <Nav/>
            <form action="" method="POST" class="cat-form" enctype="multipart/form-data">
                <h2>Edit Cat</h2>
                <label for="name">Name</label>
                <input type="text" id="name" value={pet[0].name}/>
                <label for="description">Description</label>
                <textarea id="description">{pet[0].description}</textarea>
                <label for="image">Image</label>
                <input type="file" id="image" value="{pet[0].img}"/> 
                <label for="group"></label>
                <select id="group">
                    <option value={pet[0].breed}>{pet[0].breed}</option>
                </select>
                <button>Edit Cat</button>
            </form>
        </DefaultLayout>
    )
}

module.exports = Edit;