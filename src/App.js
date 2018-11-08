import React from 'react'
import { Add } from './components/Add'
import { TaskList } from './containers/TaskList'
import TasksData from './data/TasksData'
import './App.css'

const ALL = 0;
const ONLY_ACTIVE = 1;
const ONLY_COMPLETE = 2;
let filterIndex = ALL; //ONLY FOR DEBUGGING

class App extends React.Component {
    state = {
        tasks: TasksData
    }
    counterOfTasks() {
        const tasks = this.state.tasks;
        console.log("tasks.lenght", tasks.length)
        const doneCounter = tasks.filter(t => t.done);
        console.log("doneCounter.lenght", doneCounter.length)
    }
    handleFilter() {
        const tasks = this.state.tasks;
        // const doneFilter = tasks.filter(t => t.done);
        // const notDoneFilter = tasks.filter(t => !t.done);
        switch (filterIndex) {
            case "ALL":
                break;
            case "ONLY_ACTIVE":
                break;
            case "ONLY_COMPLETE":
                break;
        }
    }
    handleAddTasks = data => {
        const nextTasks = [data, ...this.state.tasks]
        this.setState({ tasks: nextTasks })
    }
    handleRemove(id) {
        const tasks = this.state.tasks;
        const index = tasks.findIndex(a => a.id === id);
        if (index === -1) return;
        tasks.splice(index, 1);
        this.setState({tasks})
    }
    handleDone(id) {
        const tasks = this.state.tasks;
        const clickedElement = tasks.find(a => a.id === id);
        clickedElement.done = !clickedElement.done
        this.setState({clickedElement})
    }

    render() {
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