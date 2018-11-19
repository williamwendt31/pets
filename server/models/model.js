const mongoose = require('mongoose');

const PetSchema = mongoose.Schema({
    name: { type: String, minlength: [3, 'Pet name must be at least 3 characters'] },
    type: { type: String, minlength: [3, 'Pet type must be at least 3 characters'] },
    description: { type: String, minlength: [3, 'Pet description must be at least 3 characters'] },
    skill_one: { type: String },
    skill_two: { type: String },
    skill_three: { type: String },
    likes: { type: Number }
}, { timestamps: true });

mongoose.model('Pet', PetSchema);