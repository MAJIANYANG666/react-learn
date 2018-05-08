import React, { Component } from 'react';
import Counter from './Counter.js'

const style = {
    margin: '20px'
};

class ControlPanel extends Component {
    constructor(props) {
        super(props)
        this.onCounterUpdate = this.onCounterUpdate.bind(this)
        this.initValues= [0, 10, 20]
        const initSum = this.initValues.reduce((a,b)=>a+b, 0)
        this.state = {
            sum: initSum
        }
    }

    render() {
        console.log('enter ControlPanel render')
        return (
            <div style={style}>
                <Counter caption="First" onUpdate={this.onCounterUpdate} initValue={this.initValues[0]}/>
                <Counter caption="Second" onUpdate={this.onCounterUpdate} initValue={this.initValues[1]}/>
                <Counter caption="Third"  onUpdate={this.onCounterUpdate} initValue={this.initValues[2]}/>
                <button onClick={()=> this.forceUpdate()}>Click me to repaint！</button>
                <div>Total Count: {this.state.sum}</div>
            </div>
        )
    }

    onCounterUpdate(newValue, previousValue) {
        const valueChange = newValue - previousValue
        this.setState({sum: this.state.sum + valueChange})
    }
}
export default ControlPanel