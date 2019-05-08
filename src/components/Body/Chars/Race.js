import React, { Component } from 'react';

class Race extends Component {
    state = {
        activeBoxHumain: false,
        activeBoxOrc: false,
        activeBoxElfe: false
    }

    selectHumain = () => {
        this.setState({ activeBoxHumain: true, activeBoxOrc: false, activeBoxElfe: false })
    }

    selectOrc = () => {
        this.setState({ activeBoxHumain: false, activeBoxOrc: true, activeBoxElfe: false })
    }

    selectElfe = () => {
        this.setState({ activeBoxHumain: false, activeBoxOrc: false, activeBoxElfe: true })
    }

    render() {
        const { onClick } = this.props

        return (
            <div className="row justify-content-around">
                <div onClick={this.selectHumain}
                    className="bgRace-1">
                    <label className={this.state.activeBoxHumain ? "active" : "charBox "}
                        onClick={() => onClick("Humain")}>
                        <div className="m-auto">
                        </div>
                    </label>
                </div>
                <div onClick={this.selectOrc}
                    className="bgRace-2">
                    <label className={this.state.activeBoxOrc ? "active" : "charBox "}
                        onClick={() => onClick("Orc")}>
                        <div className="m-auto">
                        </div>
                    </label>
                </div>
                <div onClick={this.selectElfe}
                    className="bgRace-3">
                    <label className={this.state.activeBoxElfe ? "active" : "charBox "}
                        onClick={() => onClick("Elfe")}>
                        <div className="m-auto">
                        </div>
                    </label>
                </div>
            </div>
        );
    }
}

export default Race;