import React, { Component } from 'react'

export default class About extends Component {
    render() {
        console.log('about props:', this.props)
        return (
            <h3>我是About的内容</h3>
        )
    }
}
