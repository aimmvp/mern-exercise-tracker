const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema( {
    username: { type: String, reuqired: true },
    description: { type: String, required: true },
    duration : { type: Number, reuqired: true },
    date: { type: Date, required: true},
}, {
    timestamps: true,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;