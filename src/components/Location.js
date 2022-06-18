import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ResidentInfo from './ResidentInfo';
import banner from '../assets/banner.png'


const Location = () => {

    /* Informacion que necesito
    name, type, dimension, resident.lenght */

    const [id,setId] = useState();

    const [location, setLocation] = useState({});


    useEffect(() =>{
        /* Peticion a la api */
        /* Creo una variable para guardar un numero random
        del largo de mundos de rick y morty y escoger 1 para usarlo
        como id */
        const random = Math.floor(Math.random() * 126) + 1;
        
        axios.get(`https://rickandmortyapi.com/api/location/${random}`)
            .then(res => setLocation(res.data));
            
            
	
    },[]);

    const searchLocation = () => {
        /* Para que busque la locacion por el id tengo que hacer nuevamente
        la peticion a la api*/
        axios.get(`https://rickandmortyapi.com/api/location/${id}`)
            .then(res => setLocation(res.data));
    }


    /* Variable para guardar el numero de population de los mundos */

        const number = location.residents;

        const population = number?.length;

    return (

        <div>
            <header>
                <div className='banner'> <img src={banner} alt="" /></div>
                <h1 className="title">Rick And Morty WIKI</h1>
                    <h2 className='location'>{location.name}</h2>
                <div className='search-bar'>
                    <input 
                         type="text"
                         placeholder='set a location' 
                            /* Seteamos el onchange en el id para que cambie con la funcion */
                         onChange={e => setId(e.target.value)}
                        value={id}
                    />
                    <button onClick={searchLocation}><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
                
                <div>
                    
                        <div className='location-info'>
                            <h4>Type: {location.type}</h4>
                            <h4>Dimension: {location.dimension}</h4>
                            <h4>Population: {population}</h4>
                        </div>
                </div>
               
            </header>

            <main className='container'>

                <h2>Residents</h2>

                <ul className='resident-list'>
                    {
                        number?.map(resident =>(
                           <ResidentInfo
                            url={resident}
                           / >
                        ))
                    }

                </ul>
            </main>
            



        </div>
    );
};

export default Location;