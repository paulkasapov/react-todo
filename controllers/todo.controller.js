const Todo = require('../models/todos.model');

// controllers/products.js
exports.todo_create = function (req, res) {
    let todo = new Todo(
        {
            text: req.body.text,
            done: req.body.done
        }
    );
    todo.save(function (err) {
        if (err) {
            return res.sendStatus(500).send({...err});
        }
        res.send('Todo Created successfully')
    })
};

exports.todo_read = function (req, res) {
    Todo.find({}, function (err, todo) {
        if(err) res.sendStatus(500).send(err);
        res.send(todo);

    })
};

exports.todo_update_done = function (req, res) {
    Todo.findByIdAndUpdate(req.params.id, {$set:{done : !req.body.done}}, function (err) {
        if (err) return res.sendStatus(500).send({...err});
        res.send('Todo done udpated.');
    });
};

exports.todo_update_alldone = function (req, res) {
    Todo.updateMany({}, {$set:{done : !req.body.done}}, function (err) {
        if (err) return res.sendStatus(500).send({...err});
        res.send('Todo done udpated.');
    });
};

exports.todo_update_text = function (req, res) {
    console.log("req.body.value", req.body.value)
    try{
    Todo.findByIdAndUpdate(req.params.id, {$set:{text : req.body.value}}, function (err) {
        if(err) res.sendStatus(500).send(err);
        else res.sendStatus(200).send('OK');
        res.send('Todo text udpated.');
    })
    }catch (e) {
        console.log(e)
    };
};

exports.todo_delete = function (req, res) {
    Todo.findByIdAndRemove(req.params.id, function (err) {
        if (err) return res.sendStatus(500).send({...err});
        res.send('Deleted successfully!');
    })
};

exports.todo_alldone_delete= function (req, res) {
    Todo.deleteMany({done:true}, function (err) {
        if (err) return res.sendStatus(500).send({...err});
        res.send('Deleted all done successfully!');
    })
};