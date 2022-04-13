import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

export default class Header extends Component {

    back = () => {
        this.props.history.goBack()
    }


    render() {
        console.log('header props:', this.props)
        return (
            <div className="page-header">
                <h2>React Router Demo</h2>
                {/* &nbsp; <button onClick={this.back}> 回退</button>
                &nbsp; <button onClick={this.forward}> 前进 </button> */}


            </div>
        )
    }
}

// export default withRouter(Header)