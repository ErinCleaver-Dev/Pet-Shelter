import React from 'react';
import Nav from './components/Nav'
import DefaultLayout from './layouts/default'
import Pet from './components/Pet'
// import pets from '../data/pets.json'
import fetch from 'cross-fetch';


const Home = (props) => {
    

    return (
        <DefaultLayout title="Home">
            <Nav/>
            <main>
                <section className="cats">
                    <ul>
                        {props.pets.pets.length > 0 ? ( 
                                
                                props.pets.pets.map(pet => 
                                <Pet 
                                key={pet.id} 
                                name={pet.name} 
                                img={pet.img}
                                breed={pet.breed}
                                alt={pet.alt}
                                description={pet.description}
                                />)) : 
                                (<h1>Loading...</h1>)
                        }
                    </ul>
                </section>
            </main>
        </DefaultLayout>
    )
}

module.exports = Home;