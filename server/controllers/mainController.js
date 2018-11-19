const mongoose = require('mongoose');
const Pet = mongoose.model('Pet');

module.exports = {
    allPets: (req, res) => {
        Pet.find({}, null, { sort: { type: 1 } }, (err, pets) => {
            if (err) {
                res.json({ error: err });
            } else {
                res.json({ pets: pets });
            }
        });
    },
    newPet: (req, res) => {
        Pet.findOne({ name: req.body.name }, (err, pet) => {
            if (err) {
                res.json({ dupError: 'That name already exists' });
            } else {
                if (pet) {
                    res.json({ dupError: 'That name already exists' });
                } else {
                    Pet.create(req.body, err => {
                        if (err) {
                            res.json({ error: err });
                        } else {
                            res.json({ success: true });
                        }
                    });
                }
            }
        });
    },
    findPet: (req, res) => {
        Pet.findById(req.params._id, (err, pet) => {
            if (err) {
                res.json({ error: err });
            } else {
                res.json({ pet: pet });
            }
        });
    },
    removePet: (req, res) => {
        Pet.findByIdAndDelete(req.params._id, err => {
            if (err) {
                res.json({ error: err });
            } else {
                res.json({ success: true });
            }
        });
    },
    updatePet: (req, res) => {
        Pet.findOne({ name: req.body.name }, (err, pet) => {
            if (err) {
                res.json({ dupError: 'That name already exists' });
            } else {
                if (pet && pet._id != req.body._id) { // if pet already exists and is not current pet
                    res.json({ dupError: 'That name already exists' });
                } else {
                    Pet.findByIdAndUpdate(req.body._id, { $set: { name: req.body.name, type: req.body.type, description: req.body.description, skill_one: req.body.skill_one, skill_two: req.body.skill_two, skill_three: req.body.skill_three } }, { runValidators: true }, err => {
                        if (err) {
                            res.json({ error: err });
                        } else {
                            res.json({ success: true });
                        }
                    });
                }
            }
        });
    },
    likePet: (req, res) => {
        Pet.findByIdAndUpdate(req.body._id, { $set: { likes: req.body.likes } }, err => {
            if (err) {
                res.json({ error: err });
            } else {
                res.json({ success: true });
            }
        });
    }
}