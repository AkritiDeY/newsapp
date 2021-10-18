import React, { Component } from 'react'
import loading from './loading.gif'

export class Loading extends Component {
    render() {
        return (
            <div className="text-center">
                <img className="my-4" src={loading} alt="Loading" />
            </div>
        )
    }
}

export default Loading
