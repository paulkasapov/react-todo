import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';

import ListItem from '@material-ui/core/ListItem';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

class Task extends React.Component {

    state = {
        readOnly: true
    }

    handleDone = () => {
        this.props.setDone(this.props.data.id)
    }
    handleReadOnlyToggle = e => {
            this.setState({readOnly : !this.state.readOnly})
        }
    handleChange = e => {
        const { id, value } = e.currentTarget
        this.setState({ [id]: value })
    };
    handleDelete = () => {
        this.props.remove(this.props.data.id)
    }

    render() {
        const { text } = this.props.data
        return (
            <ListItem>
                <Checkbox type="checkbox"
                       className={"checkbox"}
                       onChange={this.handleDone}
                       checked={this.props.data.done}
                       color="primary"
                />
                <TextField
                    id="standard-bare"
                    className="text"
                    defaultValue={text}
                    disabled={this.state.readOnly}
                    onDoubleClick={this.handleReadOnlyToggle}
                    onBlur={this.handleReadOnlyToggle}
                    onChange={this.handleChange}
                    margin="normal"
                />
                {/*<input className="text"*/}
                       {/*defaultValue={text}*/}
                       {/*readOnly={this.state.readOnly}*/}
                       {/*onDoubleClick={this.handleReadOnlyToggle}*/}
                       {/*onBlur={this.handleReadOnlyToggle}*/}
                       {/*onChange={this.handleChange}*/}
                {/*/>*/}
                <button className="delete" onClick={this.handleDelete}>Delete</button>
            </ListItem>
        )
    }
}

export { Task }