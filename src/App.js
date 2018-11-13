import React from 'react'
import {Add} from './components/Add'
import TasksData from './data/TasksData'
import './App.css'
import {Filter} from "./components/Filter";
import CssBaseline from '@material-ui/core/CssBaseline';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class App extends React.Component {

    state = {
        tasks: TasksData,
        allDone: false
    }


    handleAddTasks = data => {
        const nextTasks = [data, ...this.state.tasks]
        this.setState({tasks: nextTasks})
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
        this.setState({tasks: clearedTasks})
    }
    handleDone = id => {
        const tasks = this.state.tasks;
        const clickedElement = tasks.find(a => a.id === id);
        clickedElement.done = !clickedElement.done
        this.setState({clickedElement})
        this.handlerCheckAllDone()
    }
    allDoneHandler = () => {
        const tasks = this.state.tasks
        if (this.state.allDone) {
            tasks.forEach(function (item) {
                item.done = false;
            })
        }
        else {
            tasks.forEach(function (item) {
                item.done = true;
            })

        }
        this.setState({tasks: tasks})
        this.handlerCheckAllDone()
    }
    handlerCheckAllDone = () => {
        const tasks = this.state.tasks;
        const tasksCounter = tasks.length;
        const doneCounter = tasks.filter(t => t.done).length;
        if (tasksCounter > 0) {
            if (doneCounter === tasksCounter) {
                if (this.state.allDone === false) {
                    this.setState({allDone: true})
                }
            }
            else {
                if (this.state.allDone === true) {
                    this.setState({allDone: false})
                }

            }
        }
    }

    render() {
        return (

            <Card>
                <CardContent>
                    <CssBaseline/>
                    <Add onAddTasks={this.handleAddTasks}
                         allDone={this.allDoneHandler}
                         allDoneState={this.state.allDone}
                    />
                    <Filter data={this.state.tasks}
                            setDone={this.handleDone}
                            remove={this.handleRemove}
                            removeDone={this.handleRemoveDone}
                            checkAllDone={this.handlerCheckAllDone}/>
                </CardContent>
            </Card>
        )
    }

}

export default App