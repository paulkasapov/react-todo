import React from 'react'
import { Add } from './components/Add'
import TasksData from './data/TasksData'
import './App.css'
import {Filter} from "./components/Filter";


class App extends React.Component {

    state = {
        tasks: TasksData,
        allDone: false
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
    allDoneHandler = () => {
        const tasks = this.state.tasks
        if (this.state.allDone){
            tasks.forEach(function(item) {
                item.done = false;
            })
        }
        else {
            tasks.forEach(function(item) {
                item.done = true;
            })

        }
        this.setState({tasks : tasks})
    }
    handlerCheckAllDone = (difference) => {
        if(this.state.tasks){
            if (difference === 0){
                if (this.state.allDone === false) {
                    this.setState({allDone:true})
                }
            }
            else {
                if (this.state.allDone === true){
                    this.setState({allDone:false})
                }

            }
        }
    }

    render() {
        return (
            console.log(this),
            <React.Fragment>
                <Add onAddTasks={this.handleAddTasks}
                     allDone={this.allDoneHandler}
                     allDoneState={this.state.allDone}
                />
                <Filter  data={this.state.tasks}
                         setDone={this.handleDone}
                         remove={this.handleRemove}
                         removeDone={this.handleRemoveDone}
                         checkAllDone={this.handlerCheckAllDone} />
            </React.Fragment>
        )
    }

}

export default App