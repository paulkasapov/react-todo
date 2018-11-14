import React from 'react'
import {Task} from '../components/Task'
import List from '@material-ui/core/List';


class TaskList extends React.Component {

    renderTasks = (setDone, remove) => {
        const data = this.props.data
        let todoList = null
        if (data) {
            todoList = data.map(function (item) {
                return <Task key={item._id} data={item} setDone={setDone} remove={remove}/>
            })
        } else {
            todoList = <p>Your list is empty</p>
        }
        return todoList
    }

    render() {
        return (
            <React.Fragment>

                <List>
                    {this.renderTasks(this.props.setDone, this.props.remove)}
                </List>
            </React.Fragment>
        )
    }
}

export {TaskList}