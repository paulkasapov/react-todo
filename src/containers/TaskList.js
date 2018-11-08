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
        console.log("data.lenght", data.length)
        if (data.length) {
            newsTemplate = data.map(function(item) {
                // console.log("data", data[i].done, i)
                // i++
                // if (data.item.done === true){
                //     i++;
                //     console.log("i",i)
                // }else {
                //     j++;
                //     console.log("i",i)
                // }
                return <Task key={item.id} data={item} setDone={setDone.bind(this)} remove={remove.bind(this)}/>
            })
        } else {
            newsTemplate = <p>Your list is empty</p>
        }
        return newsTemplate
    }
    render() {
        const { data } = this.props
        // console.log("this props tasklist",this.props)
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