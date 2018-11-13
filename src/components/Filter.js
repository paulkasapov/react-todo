import React from 'react'
import {TaskList} from '../containers/TaskList'
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const ALL = 0;
const ONLY_ACTIVE = 1;
const ONLY_COMPLETE = 2;


class Filter extends React.Component {

    state = {
        counterOfDone: 0,
        counterOfNotDone: 0,
        currentFilter: ALL,
        value: 2
    }
    handleChange = (event, value) => {
        this.setState({value});
    };

    counterOfTasks() {
        const tasks = this.props.data;
        const tasksCounter = tasks.length;
        const doneCounter = tasks.filter(t => t.done).length;
        const activeCounter = tasksCounter - doneCounter;
        return ("ACTIVE : " + activeCounter + " / DONE: " + doneCounter)
    }

    handleFilter() {
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
        this.setState({currentFilter: filter})
    }

    render() {
        return (
            <React.Fragment>
                <div className="filter">
                    <Grid container
                          direction="row"
                          justify="space-between"
                          alignItems="center"
                          spacing={0}>
                        <Grid item>
                            <Typography className={"counter"}>{this.counterOfTasks()}</Typography>
                        </Grid>
                        <Grid item>
                            <Tabs
                                value={this.state.value}
                                indicatorColor="primary"
                                textColor="primary"
                                onChange={this.handleChange}
                            >
                                <Tab onClick={() => this.handleFilterChange(ONLY_ACTIVE)} label={"Show Active"}/>
                                <Tab onClick={() => this.handleFilterChange(ONLY_COMPLETE)} label={"Show Done"}/>
                                <Tab onClick={() => this.handleFilterChange(ALL)} label={"Show All"}/>
                            </Tabs>
                        </Grid>
                        <Grid item>
                            <Button onClick={this.props.removeDone}>Clear ALL Done</Button>
                        </Grid>
                    </Grid>
                </div>

                <TaskList data={this.handleFilter()} remove={this.props.remove} setDone={this.props.setDone}/>
            </React.Fragment>
        )
    }
}

export {Filter}