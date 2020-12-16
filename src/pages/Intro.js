import Axios from 'axios';
import React, { useEffect } from 'react'

const Intro = () => {
    
    useEffect(() => {
        Axios.post('https://cacomixtle.net/cmd', { cmd: 'a' })
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    });

    return (
        <>
            <div className="texto_inicio">
                <p>
                    Usted Disfrute, casi todo se puede controlar aquí y lo verá en la TV, menos esta sección =P.
                </p>
            </div>
        </>
    )
}

export default Intro
