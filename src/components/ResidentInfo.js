import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentInfo = ({url}) => {

    const [resident, setResident] = useState({});

    /* Consumo la url */
    useEffect( () => {
        axios.get(url)
            .then(res => setResident(res.data))

    })
   

    


    return (
            /* Info que necesito mostrar */
        <div className='resident-card'>
            <ul>
                <img src={resident.image} alt="" />

                <div className='card'>
                    <li><p>name</p>{resident?.name}</li>
                    <li><p><div className='circle'></div>status</p>{resident.status}</li>
                    <li><p>origin</p>{resident.origin?.name}</li>
                    <li><p>epidose where appear</p>{resident.episode?.length}</li>
                </div>
            </ul>
        </div>
    );
};

export default ResidentInfo;