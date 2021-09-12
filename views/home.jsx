import React from 'react';
import Nav from './components/Nav'
import DefaultLayout from './layouts/default'
import Pet from './components/Pet'
import pets from '../data/pets.json'

const Home = () => {
    return (
        <DefaultLayout title="Home">
            <Nav/>
            <main>
                <section className="cats">
                    <ul>
                        {
                            pets.pets.map(pet => 
                                <Pet 
                                key={pet.id} 
                                name={pet.name} 
                                img={pet.img}
                                breed={pet.breed}
                                alt={pet.alt}
                                description={pet.description}
                                />
                            )
                        }
                    </ul>
                </section>
            </main>

        </DefaultLayout>
    )
}

module.exports = Home;