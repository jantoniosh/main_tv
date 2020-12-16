import React, { useState } from 'react'
import { HashRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import Inicio from './Inicio';
import AudioPagina from './AudioPagina';

const Menu = () => {
    const [LMenu] = useState([
        {
            key: 1,
            texto: "Ch 1: Intro",
            menu: "A",
            link: "/intro"
        },
        {
            key: 2,
            texto: "Ch 2: Ojos",
            menu: "B",
            link: "/ojos"
        },
        {
            key: 3,
            texto: "Ch 3: Demonio",
            menu: "C",
            link: "/demonio"
        },
        {
            key: 4,
            texto: "Ch 4: Robot",
            menu: "D",
            link: "/robot"
        },
        {
            key: 5,
            texto: "Ch 5: Toñi",
            menu: "E",
            link: "/toni"
        }
    ]);

    return (
        <>
            <Router>
                <div className="menu" id="menu_1">
                    <ul>
                        {
                            LMenu.map((me) => {
                                return (
                                    <NavLink exact to={me.link} key={me.key} activeClassName="select_color">
                                        <li className={me.formato}>
                                            {me.texto}
                                        </li>
                                    </NavLink>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="contenido">
                    <Switch>
                        <Route path="/" exact>
                            <Inicio />
                        </Route>
                        <Route path="/audio" exact>
                            <AudioPagina />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </>
    )
}

export default Menu
