const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TripSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    text: {
        type: String,
        required: true
    },    heading: {
        type: String,
    }
});

module.exports = Trip = mongoose.model('trip', TripSchema);