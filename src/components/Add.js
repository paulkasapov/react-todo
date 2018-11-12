import React from "react";
import PropTypes from "prop-types";
let index = 0;

class Add extends React.Component {
    state = {
        text: ""
    };

    submitHandler = e => {
        e.preventDefault();
        let { text } = this.state;

        text = text.trim();
        this.props.onAddTasks({
            id: index,
            text,
            done: false
        });
        index++;
        this.setState({text:''})
        this.textInput.focus();
    };
    handleChange = e => {
        const { id, value } = e.currentTarget
        this.setState({ [id]: value })
    };
    validate = () => {
        const { text } = this.state;
        if (text.trim()) {
            return true;
        }
        return false;
    };

    render() {
        console.log("this.props Add.ls", this.props)
        const { text} = this.state
        return (
            <form className="add" onSubmit={this.submitHandler}>
                <input id="checkbox-alldone"
                       type="checkbox"
                       onClick={this.props.allDone}
                       checked={this.props.allDoneState}
                />
                <input
                    id="text"
                    onChange={this.handleChange}
                    className="add__text"
                    placeholder="What needs to be done?"
                    value={text}
                    autoFocus={true}
                    ref={el => {
                        this.textInput = el;
                    }}
                />
                <button
                    type="submit"
                    className="add__btn"
                    disabled={!this.validate()}
                >
                    Add ToDo
                </button>
            </form>

        );
    }
}

Add.propTypes = {
    onAddTasks: PropTypes.func.isRequired
};

export {Add}