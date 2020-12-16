import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import '../css/Sliders.scss';

const Ojos = () => {
    const [rangos, setRangos] = useState({
        a: 20,
        b: 80,
    });

    useEffect(() => {
        const send_data = async () => {
            try {
                let cmd = `b@${rangos.a}@${rangos.b}`;
                await Axios.post('https://cacomixtle.net/cmd', { cmd: cmd })
                    .then(res => {
                        console.log(res.data);
                    });
                console.log("ok");
            }
            catch {
                console.log("error");
            }
        }
        send_data();
    }, [rangos]);

    const onChangeValue_a = (e) => {
        setRangos({ ...rangos, a: e.target.value });
    }

    const onChangeValue_b = (e) => {
        setRangos({ ...rangos, b: e.target.value });
    }

    return (
        <>
            <div className="texto_inicio">
                <p>Menor</p>
            </div>
            <div className="sliders">
                <input type="range" name="a" min="1" max="120" value={rangos.a} onChange={onChangeValue_a}></input>
            </div>
            <div className="texto_inicio">
                <p>Mayor</p>
            </div>
            <div className="sliders">
                <input type="range" name="b" min="1" max="120" value={rangos.b} onChange={onChangeValue_b}></input>
            </div>
        </>
    )
}

export default Ojos
