import React, { Component, useContext } from 'react'
import { NavLink } from 'react-router-dom'

import ReactDOM from "react-dom";


// 封装component 组件

// export default class MyNavLink extends Component {
//     render() {
//         // console.log('mynavlink', this.props)
//         // const { to, children } = this.props


//         return (
//             // <NavLink className="list-group-item" to={to}>{children}</NavLink>

//             // 俩种写法，。。。是自动解构 props里面的值。因为没有定义children变量，所以需要从this.props.children 里面自己取
//             <NavLink className="list-group-item" {...this.props}>{this.props.children}</NavLink>
//         )
//     }
// }




export default function MyNavLink(props) {
    // const path = useContext(UsePathContext);
    const { to, title } = props;
    // console.log(to, title)

    return (
        <NavLink className="list-group-item" to={to}>{title}</NavLink>
    )
}
