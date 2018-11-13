import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from "@material-ui/core/Grid/Grid";


class Task extends React.Component {

    state = {
        readOnly: true
    }

    handleDone = () => {
        this.props.setDone(this.props.data.id)
    }
    handleReadOnlyToggle = e => {
        this.setState({readOnly: !this.state.readOnly})
    }
    handleChange = e => {
        const {id, value} = e.currentTarget
        this.setState({[id]: value})
    };
    handleDelete = () => {
        this.props.remove(this.props.data.id)
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
                        onBlur={this.handleReadOnlyToggle}
                        onChange={this.handleChange}
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