import React from 'react'
import { Add } from './components/Add'
import { TaskList } from './containers/TaskList'
import TasksData from './data/TasksData'
import './App.css'

class App extends React.Component {
    state = {
        tasks: TasksData,
        counterOfDone: 0,
        counterOfNotDone: 0
    }
    counterOfTasks() {

    }
    handleAddTasks = data => {
        const nextTasks = [data, ...this.state.tasks]
        this.setState({ tasks: nextTasks })
        // this.state.counterOfDone++
    }
    handleRemove(id) {
        // console.log("id", id);
        // console.log("this", this)
        const tasks = this.state.tasks;
        const index = tasks.findIndex(a => a.id === id);
        if (index === -1) return;
        tasks.splice(index, 1);
        this.setState({tasks})
    }
    handleDone(id) {
        // console.log("this handleDone",this)
        // console.log("id", id);
        // console.log("this", this)
        const tasks = this.state.tasks;
        const clickedElement = tasks.find(a => a.id === id);
        console.log("done?", clickedElement.done)
        clickedElement.done = !clickedElement.done
        {clickedElement.done ?
            this.setState.counterOfNotDone++ && this.setState.counterOfDone-- : this.setState.counterOfNotDone-- && this.setState.counterOfDone++}
        this.setState({clickedElement})

        // this.data.setState({done : !this.data.state.done})
    }

    render() {
        // console.log("tasks in App.js", this.state.tasks)
        this.counterOfTasks()
        return (
            <React.Fragment>
                <Add onAddTasks={this.handleAddTasks}/>
                <TaskList data={this.state.tasks} setDone={this.handleDone.bind(this)} remove={this.handleRemove.bind(this)}/>
            </React.Fragment>
        )
    }

}

export default App