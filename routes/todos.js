var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Todo = require('../models/Todo.js');

/* POST /todos */
router.post('/', function (req, res, next) {
	Todo.create(req.body, function (err, post) {
		if (err) return next(err);
		res.json(post);
	})
});

/* GET todos listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  Todo.find(function (err, todos) {
  	if (err) return next(err);
  	res.json(todos);
  })
});

/* GET /todos/id */
router.get('/:id',function (req, res, next) {
	Todo.findById(req.params.id, function (err, todoId) {
		if (err) return next(err);
		res.json(todoId);
	})
});

/* PUT /todos/:id */
router.put('/:id', function (req, res, next) {
	Todo.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
		if (err) return next(err);
		res.json(post);
	})
});

/* DELETE /todos/:id */
router.delete('/:id', function (req, res, next) {
	Todo.findByIdAndRemove(req.params.id, req.body, function (err, post) {
		if (err) return next(err);
		res.json(post);
	})
})

module.exports = router;
