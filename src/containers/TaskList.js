import React from 'react'
import PropTypes from 'prop-types'
import { Task } from '../components/Task'


class TaskList extends React.Component {

    renderTasks = (setDone, remove) => {

        const  data  = this.props.data

        let todoList = null
        if (data) {
            todoList = data.map(function(item) {
                return <Task key={item.id} data={item} setDone={setDone} remove={remove}/>
            })
        } else {
            todoList = <p>Your list is empty</p>
        }
        return todoList
    }



    render() {
        return (
            <React.Fragment>

                <ul className="todo-list">
                    {this.renderTasks(this.props.setDone, this.props.remove)}
                </ul>
            </React.Fragment>
        )
    }
}

TaskList.propTypes = {
    data: PropTypes.array.isRequired,
}

export { TaskList }