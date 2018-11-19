const controller = require('../controllers/mainController');
const path = require('path');

module.exports = (app) => {
    app.get('/api/allPets', controller.allPets);

    app.post('/api/newPet', controller.newPet);

    app.delete('/api/removePet/:_id', controller.removePet);

    app.put('/api/updatePet', controller.updatePet);

    app.get('/api/findPet/:_id', controller.findPet);
    
    app.put('/api/likePet', controller.likePet);

    app.all('*', (req, res, next) => {
        res.sendFile(path.resolve('./public/dist/public/index.html'));
    });
}