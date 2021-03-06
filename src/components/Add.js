import React from "react";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from "@material-ui/core/TextField/TextField";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


class Add extends React.Component {

    state = {
        text: ""
    };

    notifyAdd = () => {
        toast.success("Todo Added!", {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    }

    submitHandler = e => {
        e.preventDefault();
        let {text} = this.state;
        text = text.trim();
        const todo = {
            text,
            done: false
        };
        axios.post(`http://localhost:3030/todos/`, { ...todo })
            .then(res => {
                console.log(res);
                console.log(res.data);
                this.notifyAdd();
                this.props.rerender();
            })
        this.setState({text: ''})
    };
    handleChange = e => {
        const {id, value} = e.currentTarget
        this.setState({[id]: value})
    };
    validate = () => {
        const {text} = this.state;
        if (text.trim()) {
            return true;
        }
        return false;
    };

    render() {
        const {text} = this.state
        return (
            <form className="add" onSubmit={this.submitHandler}>
                <Grid container
                      direction="row"
                      justify="space-between"
                      alignItems="center"
                      spacing={0}>
                    <Grid item>
                        <Checkbox id="checkbox-alldone"
                                  type="checkbox"
                                  onClick={this.props.allDone}
                                  checked={this.props.allDoneState}
                                  color={"primary"}
                        />
                    </Grid>
                    <Grid item xs zeroMinWidth>
                        <TextField
                            id="text"
                            onChange={this.handleChange}
                            className="add__text"
                            placeholder="What needs to be done?"
                            value={text}
                            margin="normal"
                            fullWidth
                            autoFocus
                        />
                    </Grid>
                    <Grid item>
                        <Button
                            type="submit"
                            className="add__btn"
                            disabled={!this.validate()}
                            variant="contained"
                            color="primary"
                        >
                            Add ToDo
                        </Button>
                        <ToastContainer />
                    </Grid>
                </Grid>
            </form>

        );
    }
}

export {Add}