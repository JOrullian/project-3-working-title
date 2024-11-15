const mongoose = require('mongoose');


const { Schema } = mongoose;


const skillSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    timeAvailable: {
        type: [String]
    },
    description: {
        type: String
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});


const Skill = mongoose.model('Skill', skillSchema);
 
module.exports = Skill;
