var mongose = require('mongoose');

var TodoSchema = new mongose.Schema({
	name: String,
	completed: Boolean,
	note: String,
	updated_at: { type: Date, default: Date.now },
});

module.exports = mongose.model('Todo', TodoSchema);