import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from "@material-ui/core/Grid/Grid";
import {toast} from "react-toastify";
import axios from "axios";


class Task extends React.Component {

    state = {
        readOnly: true
    }

    notifyChanged = () => {
        toast.success("Todo Changed!", {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    }

    handleDone = () => {
        this.props.setDone(this.props.data._id, this.props.data.done)
    }
    handleReadOnlyToggle = e => {
        this.setState({readOnly: !this.state.readOnly})
    }
    handleChange = e => {
        const {value} = e.currentTarget
        axios.put(`http://localhost:3030/todos/text/${this.props.data._id}`,{value})
            .then(res => {
                console.log(res);
                console.log(res.data);
                this.notifyChanged();
                this.props.rerender();
            })
    };
    handleDelete = () => {
        this.props.remove(this.props.data._id)
    }
    render() {
        const {text} = this.props.data
        return (
            <ListItem>
                <Grid item>
                    <Checkbox type="checkbox"
                              className={"checkbox"}
                              onChange={this.handleDone}
                              checked={this.props.data.done}
                              color="primary"
                    />
                </Grid>
                <Grid item xs>
                    <TextField
                        id="standard-bare"
                        className="text"
                        defaultValue={text}
                        disabled={this.state.readOnly}
                        onDoubleClick={this.handleReadOnlyToggle}
                        onBlur={this.handleReadOnlyToggle && this.handleChange}

                        margin="normal"
                        fullWidth
                    />
                </Grid>
                <Grid item>
                    <IconButton onClick={this.handleDelete} aria-label="Delete">
                        <DeleteIcon/>
                    </IconButton>
                </Grid>
            </ListItem>
        )
    }
}

export {Task}