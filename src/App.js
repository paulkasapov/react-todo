import React from 'react'
import { Add } from './components/Add'
import TasksData from './data/TasksData'
import './App.css'
import {Filter} from "./components/Filter";


class App extends React.Component {

    state = {
        tasks: TasksData
    }

    handleAddTasks = data => {
        const nextTasks = [data, ...this.state.tasks]
        this.setState({ tasks: nextTasks })
    }
    handleRemove = id => {
        const tasks = this.state.tasks;
        const index = tasks.findIndex(a => a.id === id);
        if (index === -1) return;
        tasks.splice(index, 1);
        this.setState({tasks})
    }
    handleRemoveDone = () => {
        const tasks = this.state.tasks;
        const clearedTasks = tasks.filter(t => !t.done);
        this.setState({tasks:clearedTasks})
    }
    handleDone = id => {
        const tasks = this.state.tasks;
        const clickedElement = tasks.find(a => a.id === id);
        clickedElement.done = !clickedElement.done
        this.setState({clickedElement})
    }

    render() {

        return (
            <React.Fragment>
                <Add onAddTasks={this.handleAddTasks}/>
                <Filter  data={this.state.tasks} setDone={this.handleDone} remove={this.handleRemove} removeDone={this.handleRemoveDone}/>
            </React.Fragment>
        )
    }

}

export default App