import Axios from 'axios';
import React, { useState } from 'react'

const Demonio = () => {
    const [state, setstate] = useState({
        estado: false,
        texto: "NO"
    });

    const onCambio = () => {
        let cmd = "";
        if (state.estado) {
            setstate({
                estado: false,
                texto: "NO"
            });
            cmd = "c@0";
        }
        else {
            setstate({
                estado: true,
                texto: "SI"
            });
            cmd = "c@1";
        }
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
                <p>SI/NO</p>
            </div>
            <div id="si_no" className={state.estado ? `active_si_no` : `inactive_si_no`} onClick={onCambio}>{state.texto}</div>
        </>
    )
}

export default Demonio
