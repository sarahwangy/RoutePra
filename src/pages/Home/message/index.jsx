import React, { Component } from 'react'
import Detail from './Detail/detail';
import { NavLink, Link, Route, Routes, Switch, Navigate } from 'react-router-dom'


// export default class Message extends Component {
//     state = {
//         messageArr: [
//             { id: '01', title: 'Message001' },
//             { id: '02', title: 'Message002' },
//             { id: '03', title: 'Message003' },
//         ]
//     }

//     // replaceShow = (id, title) => {
//     //     this.props.history.replace(`/home/message/detail/${id}/${title}`)

//     // }

//     render() {
//         console.log("message")
//         // console.log("message props:",this.props) 空的
//         const { messageArr } = this.state;

//         return (
//             <div>

//                 <div>
//                     <ul>
//                         {/* 编辑路由 ,并且传参数*/}
//                         {
//                             messageArr.map((msgObj) => {
//                                 return <li key={msgObj.id} >
//                                     {/* search 传递参数方式 */}
//                                     {/* <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */}
//                                     {/* match param 传递参数方式 props */}

//                                     {/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link> */}
//                                     {/* 新版本route */}
//                                     <Link to={{ pathname: `/home/message/detail/${msgObj.id}/${msgObj.title}` }}>{msgObj.title}</Link>

//                                     {/* state 传递参数方式 */}
//                                     {/* <Link replace={true} to={{ pathname: `/home/message/detail/${msgObj.id}`, state: { id: msgObj.id, title: msgObj.title } }}>{msgObj.title}</Link> */}
//                                     {
//                                     // replace  更新了，需要引用新的
//                                     /* &nbsp; <button> push 查看</button>
//                                     &nbsp; <button onClick={() => this.replaceShow(msgObj.id, msgObj.title)}> replace 查看</button> */}


//                                 </li>
//                             })
//                         }

//                         <hr />
//                         {/* 注册路由 ， 接收参数*/}


//                         <Routes>
//                             {/* search 传递参数方式 */}
//                             {/* <Route path="detail" element={<Detail />} /> */}

//                             {/* match 传递参数方式 */}

//                             {/* <Route path="detail/:id/:title" element={<Detail />} /> */}

//                             {/* state 传递参数方式 */}
//                             <Route path=":detail/:id/:title" element={<Detail />} />




//                         </Routes>

//                     </ul>
//                 </div>
//             </div>
//         )
//     }
// }





export default function Message() {
    const stateData = {
        messageArr: [
            { id: '01', title: 'Message001' },
            { id: '02', title: 'Message002' },
            { id: '03', title: 'Message003' },
        ]
    }
    const { messageArr } = stateData;
    console.log(messageArr)

    return (
        <div>

            <div>
                <ul>
                    {
                        messageArr.map((msgObj) => {
                            return <li key={msgObj.id} >

                                <Link to={{ pathname: `/home/message/detail/${msgObj.id}/${msgObj.title}` }}>{msgObj.title}</Link>
                            </li>
                        })
                    }

                    <hr />

                    <Routes>

                        <Route path=":detail/:id/:title" element={<Detail />} />

                    </Routes>

                </ul>
            </div>
        </div>
    )
}
