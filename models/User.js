const mongoose = require('mongoose');
const types = mongoose.Schema.Types;

const user_schema = new mongoose.Schema({
	type: {
		type: types.String,
		required: true,
	},
	name: {
		type: types.String,
		required: true,
		minlength: 3,
		trim: true,
	},
	email: {
		type: types.String,
		required: true,
		trim: true,
	},
	sex: {
		type: types.String,
		required: true,
	},
	location: {
		type: types.ObjectId,
		ref: 'Location',
        required: true,
        trim: true,
	},
	college: {
		type: types.String,
        required: true,
        trim: true,
	},
	avatar: {
		type: types.String,
		required: true,
	},
	dob: {
		type: types.Date,
		required: true,
	},
	contact: {
		type: types.ObjectId,
		ref: 'Contact',
		required: true,
	},
	password: {
		type: types.String,
        required: true,
	},
});

const user = mongoose.model('User', user_schema);
module.exports = user;
