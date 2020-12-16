import Axios from 'axios';
import React, { useEffect, useState } from 'react'

const Toni = () => {
    const [numero, setNumero] = useState({
        a: 1,
        b: 2,
    });

    const [valA, setValA] = useState([
        {
            key: 1,
            val: true
        },
        {
            key: 2,
            val: false
        },
        {
            key: 3,
            val: false
        },
        {
            key: 4,
            val: false
        },
        {
            key: 5,
            val: false
        },
        {
            key: 6,
            val: false
        }
    ]);

    const [valB, setValB] = useState([
        {
            key: 1,
            val: false
        },
        {
            key: 2,
            val: true
        },
        {
            key: 3,
            val: false
        },
        {
            key: 4,
            val: false
        },
        {
            key: 5,
            val: false
        },
        {
            key: 6,
            val: false
        }
    ]);

    useEffect(() => {
        const send_data = async () => {
            try {
                let cmd = `e@${numero.a - 1}@${numero.b - 1}`;
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
    }, [numero]);

    const onChangeValue_a = (e) => {
        setNumero({ ...numero, a: e.target.value });
    }

    const onChangeValue_b = (e) => {
        setNumero({ ...numero, b: e.target.value });
    }

    const cambio_A = (id) => {
        let valores_A = [...valA];
        for (let i = 0; i < valores_A.length; i++) {
            if (i === (id - 1)) {
                valores_A[i] ={
                    key: i + 1,
                    val: true
                }
            }
            else {
                valores_A[i] ={
                    key: i + 1,
                    val: false
                }
            }
        }
        setValA(valores_A);
        setNumero({ ...numero, a: id });
    }

    const cambio_B = (id) => {
        let valores_B = [...valB];
        for (let i = 0; i < valores_B.length; i++) {
            if (i === (id - 1)) {
                valores_B[i] ={
                    key: i + 1,
                    val: true
                }
            }
            else {
                valores_B[i] ={
                    key: i + 1,
                    val: false
                }
            }
        }
        setValB(valores_B);
        setNumero({ ...numero, b: id });
    }

    return (
        <>
            <div className="texto_inicio">
                <p>A</p>
            </div>
            <div className="botones_linea">
                {
                    valA.map((d) => {
                        return (
                            <div className={d.val ? `m_cuad m_cuad_selected` : `m_cuad m_cuad_nrmal`} key={d.key} onClick={() => cambio_A(d.key)}></div>
                        );
                    })
                }
            </div>
            {/* <input type="number" name="a" min="1" max="6" value={numero.a} onChange={onChangeValue_a}></input> */}
            <div className="texto_inicio">
                <p>B</p>
            </div>
            <div className="botones_linea">
                {
                    valB.map((d) => {
                        return (
                            <div className={d.val ? `m_cuad m_cuad_selected` : `m_cuad m_cuad_nrmal`} key={d.key} onClick={() => cambio_B(d.key)}></div>
                        );
                    })
                }
            </div>
            {/* <input type="number" name="b" min="1" max="6" value={numero.b} onChange={onChangeValue_b}></input>S */}
        </>
    )
}

export default Toni
