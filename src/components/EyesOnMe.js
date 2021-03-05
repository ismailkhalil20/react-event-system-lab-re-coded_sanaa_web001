// Code EyesOnMe Component Here
import React, { Component } from 'react'

export default class EyesOnMe extends Component {
    render() {
        return (
            <div>
                <button onFocus={() => console.log('Good!')} onBlue={() => console.log('Hey! Eyes on me!')} ></button>
            </div>
        )
    }
}