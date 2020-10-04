const mongoose = require('mongoose');
const types = mongoose.Schema.Types;

const contact_schema = new mongoose.Schema({
	primary: {
		type: types.String,
		required: true,
	},
	secondary: {
		type: types.String,
		required: true,
	},
});

const contact = mongoose.model('Contact', contact_schema);
module.exports = contact;
