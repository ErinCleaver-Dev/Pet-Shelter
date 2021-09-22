import React from 'react';
import Nav from './components/Nav'
import DefaultLayout from './layouts/default'


const Delete = ({pet}) => {
    return (
        <DefaultLayout title="Seleter a Cat">
            <Nav/>
            <form action="" method="POST" class="cat-form">
                <h2>Shelter the cat</h2>
                <img src={pet[0].img} alt=""/>
                <label for="name">Name</label>
                <input type="text" id="name" value={pet[0].name} disabled/>
                <label for="description">Description</label>
                <textarea id="description" disabled>
                    {pet[0].description}
                </textarea>
                <label for="group">Breed</label>
                <select id="group" disabled>
                    <option value={pet[0].breed}>{pet[0].breed}</option>
                </select>
                <button>SHELTER THE CAT</button>
            </form>
        </DefaultLayout>
    )
}

module.exports = Delete;