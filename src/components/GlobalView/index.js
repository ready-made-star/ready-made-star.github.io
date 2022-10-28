import './globe.css';
import React, { Component } from "react";
import Map from "./Globemap";

class GlobalView extends Component {
    constructor() {
        super()
        this.state = { center: [0, 0] }
    }
    changeCenter = center => () => {
        this.setState({ center })
    }
    render() {
        return (
            <div className='globemap w-100'>
                <div style={{ padding: "1rem 0" }}>
                    {/* <button
                        className="btn"
                        onClick={this.changeCenter([-122.4194, 37.7749])}
                    >
                        {"San Francisco"}
                    </button>
                    <button
                        className="btn"
                        onClick={this.changeCenter([151.2093, -33.8688])}
                    >
                        {"Sydney"}
                    </button> */}
                    <Map center={this.state.center} />
                </div>
            </div>
        )
    }
}

export default GlobalView;
