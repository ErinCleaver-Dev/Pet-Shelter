import React from 'react';
import Nav from './components/Nav'
import Search from './components/Search'

import DefaultLayout from './layouts/default'
import Pet from './components/Pet'
// import pets from '../data/pets.json'
import fetch from 'cross-fetch';


const Home = (props) => {
    
    //console.log(props.pets)

    return (
        <DefaultLayout title="Home">
            <Nav/>
            <Search/>
            <main>
                <section className="cats">
                    <ul>
                        {props.pets.length > 0 ? ( 
                                
                                props.pets.map(pet => 
                                <Pet 
                                key={pet._id} 
                                id={pet._id}
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
                {props.notice === 'yes' ? (null) : (
                    <React.Fragment>
                        <div class="wrapper">
                        <div class="notice-cookies active-cookies" id="notice-cookies">
                            <img src="https://image.flaticon.com/icons/png/512/541/541732.png" alt="" class="img-cookies"/>
                            <h3 class="title-cookies"> Cookies </h3>
                            <p class="paragraph">We use our own and third-party cookies to obtain statistical data on the navigation of our users and improve our services.</p>
                            <a class="btn-cookies" href='/agreeCookie' id="btn-accept-cookies">Agree</a>
                            <a class="link" href="/cookies.html">Cookie Notice</a>
                        </div>
                        </div>
                        <div class="notice-cookies-background active-cookies" id="notice-cookies-background"></div>
                    </React.Fragment>
                    )

                }
                
                {console.log(props.notice)}

            </main>
        </DefaultLayout>
    )

}

module.exports = Home;