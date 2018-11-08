import React from 'react'
import PropTypes from 'prop-types'
import { Task } from '../components/Task'
// let i=0;
// let j=0;


class TaskList extends React.Component {

    renderTasks = (remove, setDone) => {
        const { data } = this.props
        // console.log("this tasklist",this)
        let newsTemplate = null
        if (data.length) {
            newsTemplate = data.map(function(item) {
                return <Task key={item.id} data={item} setDone={setDone.bind(this)} remove={remove.bind(this)}/>
            })
        } else {
            newsTemplate = <p>Your list is empty</p>
        }
        return newsTemplate
    }
    render() {
        return (
            <ul className="todo-list">
                {this.renderTasks(this.props.remove, this.props.setDone)}
            </ul>
        )
    }
}

TaskList.propTypes = {
    data: PropTypes.array.isRequired,
}

export { TaskList }