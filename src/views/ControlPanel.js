import React, { Component } from 'react'
import Counter from './Counter.js'
import Sumary from './Summary.js'

const style = {
    margin: '20px'
}

class ControlPanel extends Component {
    render() {
        return (
            <div style={style}>
                <Counter caption="First"></Counter>
                <Counter caption="Sencond"></Counter>
                <Counter caption="Third"></Counter>
                <hr/>
                <Summary/>
            </div>
        )
    }
}
export default ControlPanel