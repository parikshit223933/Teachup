const mongoose = require('mongoose');
const types = mongoose.Schema.Types;

const location_schema = new mongoose.Schema(
	{
		state: {
			type: types.String,
			required: true,
			trim: true,
		},
		city: {
			type: types.String,
			required: true,
			trim: true,
		},
		postalCode: {
			type: types.Number,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const location = mongoose.model('Location', location_schema);
module.exports = location;
