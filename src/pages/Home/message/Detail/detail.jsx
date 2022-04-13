import React, { Component } from 'react'
import { Routes, Route, useParams } from "react-router-dom";
import { Space } from 'antd';
import { SmileTwoTone, HeartTwoTone, CheckCircleTwoTone } from '@ant-design/icons';
// import qs from 'querystring'

// let obj = { name: tom, age: 18 }
// console.log(qs.stringify(obj))
// console.log(qs)
// 


// export default class Detail extends Component {

// state = {
//     detailData: [
//         { id: '01', content: 'enjoying yourself' },
//         { id: '02', content: ' experience nature' },
//         { id: '02', content: 'keep active' }
//     ]

// }

//     render() {
//         console.log("detail props:", this.props)
//         console.log("detail props match:", this.props.match)


//         // const { id, title } = this.props.match.params

//         return (

//             <ul>
//                 <li>id:</li>
//                 <li>title:</li>
//                 <li>content:</li>
//             </ul>


//         )
//     }
// }



export default function Detail() {
    let params = useParams();


    const detailData = [
        { id: '01', content: 'Enjoying yourself' },
        { id: '02', content: ' Experience nature' },
        { id: '03', content: 'Keep active' }
    ];


    const findContent = detailData.find((detailObj) => {
        return detailObj.id === params.id

    });

    // console.log(findContent)

    return (
        <ul>
            <li> <SmileTwoTone />  ID :  {params.id}</li>
            <li>    <HeartTwoTone twoToneColor="#eb2f96" />  TITLE :  {params.title}</li>
            <li>    <CheckCircleTwoTone twoToneColor="#52c41a" />    CONTENT :  {findContent.content}</li>

        </ul>

    )
}
