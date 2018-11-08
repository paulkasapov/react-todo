import React from 'react'
import PropTypes from 'prop-types'




class Task extends React.Component {

    state = {
        readOnly: true
    }
    handleDone = () => {
        this.props.setDone(this.props.data.id)
    }
    handleReadOnlyToggle = e => {
            this.setState({readOnly : !this.state.readOnly})
        }
    handleChange = e => {
        const { id, value } = e.currentTarget
        this.setState({ [id]: value })
    };
    handleDelete = () => {
        this.props.remove(this.props.data.id)
    }

    render() {
        const { text } = this.props.data
        return (
            <li className="todo-item">
                <input type="checkbox"
                       onClick={this.handleDone}
                       defaultChecked={this.props.data.done}
                />
                <input className="text"
                       defaultValue={text}
                       readOnly={this.state.readOnly}
                       onDoubleClick={this.handleReadOnlyToggle}
                       onBlur={this.handleReadOnlyToggle}
                       onChange={this.handleChange}
                />
                <button className="delete" onClick={this.handleDelete}>Delete</button>
            </li>
        )
    }

}

Task.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
    }),
}

export { Task }