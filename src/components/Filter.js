import React from 'react'
import PropTypes from 'prop-types'
import { TaskList } from '../containers/TaskList'

const ALL = 0;
const ONLY_ACTIVE = 1;
const ONLY_COMPLETE = 2;


class Filter extends React.Component {

    state = {
        counterOfDone : 0,
        counterOfNotDone: 0,
        currentFilter: ALL
    }

    counterOfTasks() {
        const tasks = this.props.data;
        const doneCounter = tasks.filter(t => t.done);
        return (<div className={"counter"}>Active : {tasks.length - doneCounter.length} / Done: {doneCounter.length}</div>)
    }

    handleFilter(){
        const data = this.props.data
        let filteredData = null;
        switch (this.state.currentFilter) {
            case ALL:
                filteredData = data;
                console.log("filteredDataALL",filteredData);
             return filteredData;

        case ONLY_ACTIVE:
                filteredData = data.filter(t => !t.done);
            console.log("filteredDataOnlyActive",filteredData);
            return filteredData;

        case ONLY_COMPLETE:
                filteredData = data.filter(t => t.done);
            console.log("filteredDataOnlyComplete",filteredData);
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
                    {this.counterOfTasks()}
                    <button onClick={()=>this.handleFilterChange(ALL)}>Show All</button>
                    <button onClick={()=>this.handleFilterChange(ONLY_ACTIVE)}>Show Active</button>
                    <button onClick={()=>this.handleFilterChange(ONLY_COMPLETE)}>Show Done</button>
                    <button onClick={this.props.removeDone}>Clear ALL Done</button>
                </div>

                <TaskList data={this.handleFilter()} remove={this.props.remove} setDone={this.props.setDone}/>
            </React.Fragment>
        )
    }
}

Filter.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
    }),
}

export { Filter }