const express = require('express');
const routes = express.Router();


const usersController = require('../controllers/users');

//the point of this is we can pull stuff with req
routes.use(express.urlencoded({extended: false}));

routes.get('/', usersController.getUsers);
routes.get('/:id', usersController.getUser);
routes.post('/', usersController.addUser);
routes.patch('/:id', usersController.editUser);
routes.delete('/:id', usersController.delUser);

routes.get('/', (req, res) => {
  res.render('../views/index.ejs', {name: 'Leedler'})
})

routes.get('/login', (req, res) => {
  res.render('../views/login.ejs')
})
routes.post('/login', (req, res) => {

})

routes.get('/register', (req, res) => {
  res.render('../views/register.ejs')
})
routes.post('/register', async(req, res) => {
  try {
    usersController.addUser
  } catch{
    res.redirect('/register');
  }
})

module.exports = routes;


