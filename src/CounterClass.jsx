import { Component } from "react";

class CounterClass extends Component {
    constructor() {
        super()
        this.state = {
            count: 0,

        }
    }

    plus = () => {
        this.setState({
            count: this.state.count + 1,

        })
    }

    minus = () => {
        this.setState({
            count: this.state.count > 0 ? this.state.count - 1 : 0
        })
    }

    render() {
        return (
            <>

                <div>
                    <h1>With Using ClassComponent</h1>
                    <div className="mx-auto my-5 p-5 shadow text-center">
                        <h2>{this.state.count}</h2>

                        <button className="btn btn-success me-3" onClick={this.plus}>+</button>
                        <button className="btn btn-danger" onClick={this.minus}>-</button>

                    </div>
                </div>


            </>
        )
    }
}

export default CounterClass