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
        const { text} = this.state
        return (
            <form className="add" onSubmit={this.submitHandler}>
                <input
                    id="text"
                    onChange={this.handleChange}
                    className="add__text"
                    placeholder="Что нужно сделать?"
                    value={text}
                    autoFocus={true}
                    ref={el => {
                        this.textInput = el;
                    }}
                />
                <button
                    type="submit"
                    className="add__btn"
                    // onClick={this.onBtnClickHandler}
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