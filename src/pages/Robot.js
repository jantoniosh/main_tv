import Axios from 'axios';
import React, { useState } from 'react'

const Robot = () => {
    const [state, setstate] = useState(40);

    const onChangeValue = (e) => {
        console.log(81 - e.target.value);
        let slider = 81 - e.target.value;
        let cmd = 'd@' + slider.toString();
        console.log(slider);
        console.log(cmd);
        setstate(e.target.value);
        Axios.post('https://cacomixtle.net/cmd', { cmd: cmd })
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <>
            <div className="texto_inicio">
                <p>
                    Frecuencia
                </p>
            </div>
            <div className="sliders">
                <input type="range" name="freq" min="1" max="80" value={state} onChange={onChangeValue}></input>
            </div>
        </>
    )
}

export default Robot
