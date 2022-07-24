import React, { Component } from "react";

class Counter extends Component {

    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }

    increment = () => {
        const { count } = this.state
        this.setState({
            count: count + 1
        })
    }

    decrement = () => {
        const {count} = this.state
        this.setState({
            count: count - 1
        })
    }

    render(){
        const {rend} = this.props
        const {count} = this.state

        return (
            <div>
                {
                    rend({
                        increment: this.increment,
                        decrement: this.decrement,
                        count
                    })
                }
            </div>
        )
    }
} 

export default Counter