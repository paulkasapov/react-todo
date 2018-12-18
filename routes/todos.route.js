const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const todo_controller = require('../controllers/todo.controller');


// a simple test url to check that all of our files are communicating correctly.
router.post('/', todo_controller.todo_create);
router.get('/', todo_controller.todo_read);
router.put('/done/:id', todo_controller.todo_update_done);
router.put('/alldone', todo_controller.todo_update_alldone);
router.put('/text/:id', todo_controller.todo_update_text);
router.delete('/remove/:id', todo_controller.todo_delete);
router.delete('/removedone', todo_controller.todo_alldone_delete)

module.exports = router;

