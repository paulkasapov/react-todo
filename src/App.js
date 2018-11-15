import React from 'react'
import {Add} from './components/Add'
import './App.css'
import {Filter} from "./components/Filter";
import CssBaseline from '@material-ui/core/CssBaseline';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {toast} from "react-toastify";
import axios from 'axios';

class App extends React.Component {

    state = {
        tasks: [],
        allDone: false
    }

    componentDidMount() {
        axios.get(`http://localhost:3030/todos/`)
            .then(res => {
                const tasks = res.data;
                tasks.reverse();
                this.setState({ tasks });
                this.handlerCheckAllDone();
            })

    }

    notifyDelete = () => {
        toast.success("Todo Deleted!", {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    }

    notifyChanged = () => {
        toast.success("Todo Changed!", {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    }

    handleRerender = () => {
        this.componentDidMount()
    }
    handleRemove = id => {
        axios.delete(`http://localhost:3030/todos/remove/${id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
                this.notifyDelete()
                this.handleRerender()
            })
    }
    handleRemoveDone = () => {
            axios.delete(`http://localhost:3030/todos/removedone`)
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                    this.notifyDelete()
                    this.handleRerender()
                })
    }
    handleDone = (id, done) => {
        axios.put(`http://localhost:3030/todos/done/${id}`,{done})
            .then(res => {
                console.log(res);
                console.log(res.data);
                this.notifyChanged()
                this.handleRerender();
            })
    }
    allDoneHandler = () => {
        const done = this.state.allDone
        axios.put(`http://localhost:3030/todos/alldone`,{done})
            .then(res => {
                console.log(res);
                console.log(res.data);
                this.notifyChanged()
                this.handleRerender();
            })
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
                    <Add rerender={this.handleRerender}
                         allDone={this.allDoneHandler}
                         allDoneState={this.state.allDone}
                    />
                    <Filter data={this.state.tasks}
                            setDone={this.handleDone}
                            rerender={this.handleRerender}
                            remove={this.handleRemove}
                            removeDone={this.handleRemoveDone}
                            checkAllDone={this.handlerCheckAllDone}/>
                </CardContent>
            </Card>
        )
    }

}

export default App