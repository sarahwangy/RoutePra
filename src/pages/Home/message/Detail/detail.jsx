import React, { Component } from 'react'
// import qs from 'querystring'


// let obj = { name: tom, age: 18 }
// console.log(qs.stringify(obj))
// console.log(qs)
// 


export default class Detail extends Component {

    state = {
        detailData: [
            { id: '01', content: 'enjoying yourself' },
            { id: '02', content: ' experience nature' },
            { id: '02', content: 'keep active' }
        ]

    }

    render() {
        console.log("detail props:", this.props.state)
        console.log("detail props match:", this.props.match)

        // meiyou?????
        // const { id, title } = this.props.match.params

        return (

            <ul>
                <li>id:</li>
                <li>title:</li>
                <li>content:</li>
            </ul>


        )
    }
}
