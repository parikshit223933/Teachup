const mongoose = require('mongoose');
const types = mongoose.Schema.Types;
const multer = require('multer');
const path = require('path');

const user_schema = new mongoose.Schema(
	{
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
	},
	{
		timestamps: true,
	}
);

let storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join(__dirname, '../', './uploads', './avatars'));
	},
	filename: function (req, file, cb) {
		cb(null, file.fieldname + '-' + Date.now());
	},
});

user_schema.statics.uploadedAvatar = multer({
	storage: storage,
}).single('avatar');

const user = mongoose.model('User', user_schema);
module.exports = user;
