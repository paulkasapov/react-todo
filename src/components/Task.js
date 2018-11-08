import React from 'react' // мы обязаны импортировать необходимые пакеты в каждом файле
import PropTypes from 'prop-types' // у Task это react и prop-types

// далее просто скопировано все что было, кроме последней строки


class Task extends React.Component {

    state = {
        readOnly: true
    }
    handleDone = () => {
        this.props.setDone(this.props.data.id)
        // this.setState({done : !this.state.done})
    }
    // handleReadOnlyOff = e => {
    //     this.setState({readOnly : false})
    // }
    // handleReadOnlyOn = e => {
    //     this.setState({readOnly: true})
    // }
    handleReadOnlyToggle = e => {
            this.setState({readOnly : !this.state.readOnly})
        }
    handleChange = e => {
        const { id, value } = e.currentTarget
        this.setState({ [id]: value })
    };
    // handleDelete = ({remove}) => {
    //     remove(this.state.id)
    // }
    handleDelete = () => {
        this.props.remove(this.props.data.id)
    }

    render() {


        const { text } = this.props.data
        // const { done } = this.state.done
        console.log("this.state", this.state)
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
        id: PropTypes.number.isRequired, // добавили id, это число, обязательно
        text: PropTypes.string.isRequired,
    }),
}

export { Task } // именованный экспорт