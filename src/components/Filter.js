import React from 'react'
import { TaskList } from '../containers/TaskList'
import Button from '@material-ui/core/Button';

const ALL = 0;
const ONLY_ACTIVE = 1;
const ONLY_COMPLETE = 2;


class Filter extends React.Component {

    state = {
        counterOfDone : 0,
        counterOfNotDone: 0,
        currentFilter: ALL,
    }

    counterOfTasks() {
        const tasks = this.props.data;
        const tasksCounter = tasks.length;
        const doneCounter = tasks.filter(t => t.done).length;
        const activeCounter = tasksCounter - doneCounter;
        if(tasksCounter > 0){
            this.props.checkAllDone(activeCounter)
        }
        return ("Active : " + activeCounter + " / Done: "+ doneCounter)
    }

    handleFilter(){
        const data = this.props.data
        let filteredData = null;
        switch (this.state.currentFilter) {
            case ALL:
                filteredData = data;
             return filteredData;

        case ONLY_ACTIVE:
                filteredData = data.filter(t => !t.done);
            return filteredData;

        case ONLY_COMPLETE:
                filteredData = data.filter(t => t.done);
            return filteredData;

        default:
            alert('filterIndex is broken');
        }
    }

    handleFilterChange(filter) {
        this.setState({currentFilter : filter})
    }

    render() {
        return (
            <React.Fragment>
                <div className="filter">
                    <div className={"counter"}>{this.counterOfTasks()}</div>
                    <Button onClick={()=>this.handleFilterChange(ALL)}>Show All</Button>
                    <Button onClick={()=>this.handleFilterChange(ONLY_ACTIVE)}>Show Active</Button>
                    <Button onClick={()=>this.handleFilterChange(ONLY_COMPLETE)}>Show Done</Button>
                    <Button onClick={this.props.removeDone}>Clear ALL Done</Button>
                </div>

                <TaskList data={this.handleFilter()} remove={this.props.remove} setDone={this.props.setDone}/>
            </React.Fragment>
        )
    }
}

export { Filter }