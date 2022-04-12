import React, { Component } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Detail from './Detail/detail';

export default class Message extends Component {
    state = {
        messageArr: [
            { id: '01', title: 'message 001' },
            { id: '02', title: 'message 002' },
            { id: '03', title: 'message 003' },
        ]
    }

    replaceShow = (id, title) => {
        this.props.history.replace(`/home/message/detail/${id}/${title}`)

    }

    render() {
        console.log("message")
        // console.log("message props:",this.props) 空的
        const { messageArr } = this.state;

        return (
            <div>

                <div>
                    <ul>
                        {/* 编辑路由 ,并且传参数*/}
                        {
                            messageArr.map((msgObj) => {
                                return <li key={msgObj.id} >
                                    {/* search 传递参数方式 */}
                                    {/* <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */}
                                    {/* match param 传递参数方式 props */}

                                    {/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link> */}
                                    {/* state 传递参数方式 */}
                                    <Link replace={true} to={{ pathname: `/home/message/detail`, state: { id: msgObj.id, title: msgObj.title } }}>{msgObj.title}</Link>
                                    &nbsp; <button> push 查看</button>
                                    &nbsp; <button onClick={() => this.replaceShow(msgObj.id, msgObj.title)}> replace 查看</button>


                                </li>
                            })
                        }

                        <hr />
                        {/* 注册路由 ， 接收参数*/}


                        <Routes>
                            {/* search 传递参数方式 */}
                            <Route path="detail" element={<Detail />} />

                            {/* match 传递参数方式 */}

                            {/* <Route path="detail/:id/:title" element={<Detail />} /> */}

                            {/* state 传递参数方式 */}
                            <Route path="detail" element={<Detail />} />




                        </Routes>

                    </ul>
                </div>
            </div>
        )
    }
}
