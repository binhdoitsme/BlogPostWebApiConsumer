import React, { Component } from "react";

export default class Pagination extends Component {
    render() {
        return (
            <div style={{paddingLeft: "1rem", paddingBottom:"1rem"}}>
                <span>Jump to page: </span>
                <button onClick={this.props.handlePrevClick} disabled={this.props.isPrevDisabled} style={{marginRight: "0.5rem"}}>Prev</button>
                <button onClick={this.props.handleNextClick} disabled={this.props.isNextDisabled} style={{marginLeft: "0.5rem"}}>Next</button>
            </div>
        );
    }
}