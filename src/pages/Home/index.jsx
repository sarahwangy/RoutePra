import React, { Component } from 'react'
import { NavLink, Route, Routes, Switch, Navigate } from 'react-router-dom'
import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom";

import MyNavLink from '../../component/MyNavLink'
import News from './news'
import Message from './message'


// export default class Home extends Component {
//     render() {


//         console.log('home props:', this.props)
//         return (
//             <div>
//                 <h3>我是Home的内容</h3>
//                 <ul className="nav nav-tabs">
//                     <li>
//                         <MyNavLink to="/home/news">News </MyNavLink>

//                     </li>
//                     <li>
//                         <MyNavLink to="/home/message">Message </MyNavLink>
//                     </li>
//                 </ul>


//                 {/* 注册路由 */}

//                 <Routes>

//                     <Route path="news" element={<News />} />
//                     {/* <Route path="message" element={<Message />} /> */}

//                     <Route path="message/*" element={<Message />} />


//                     <Route path="/" element={<News />} />


//                 </Routes>
//             </div>

//         )
//     }
// }


// const UsePathContext = createContext();

export default function Home() {
    // const [path, setPath] = useState({
    //     path:
    //         [
    //             { to: "/home/news", title: "News" },
    //             { to: "/home/message", title: "Message" }
    //         ]
    // });

    const paths = [
        { to: "/home/news", title: "News" },
        { to: "/home/message", title: "Message" }
    ]

    return (

        <div>
            <h3>我是Home的内容</h3>
            <ul className="nav nav-tabs">

                {
                    paths.map((path) => {
                        return <li key={path.to}><MyNavLink to={path.to} title={path.title}> </MyNavLink></li>
                    })
                }


                {/* <li>
                    <MyNavLink to="/home/message">Message </MyNavLink>
                </li> */}
            </ul>

            <Routes>

                <Route path="news" element={<News />} />
                <Route path="message/*" element={<Message />} />
                <Route path="" element={<Navigate to="/home/news" />} />

            </Routes>
        </div>

    )
}
