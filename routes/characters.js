const express = require('express');
const routes = express.Router();
const { auth, requiresAuth } = require('express-openid-connect');

const charactersController = require('../controllers/characters');

// requiresAuth is crashing things when not logged in. Not sure what to do about it yet.

routes.get('/', charactersController.getCharacters); 
routes.get('/:id', charactersController.getCharacter);
routes.post('/', requiresAuth(), charactersController.addCharacter);
routes.patch('/:id', requiresAuth(), charactersController.editCharacter);
routes.delete('/:id', requiresAuth(), charactersController.delCharacter);

module.exports = routes; 