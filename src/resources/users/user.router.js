const express = require('express');
const router = express.Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/')
  .get(async (req, res) => {
    const users = await usersService.getAll();
    res.json(users.map(User.toResponse));
  })
  .post(async (req, res) => {
    const user = await usersService.create(req.body);
    res.status(201).json(User.toResponse(user));
  });

router.route('/:id')
  .get(async (req, res) => {
    const user = await usersService.getById(req.params.id);
    if (user) {
      res.json(User.toResponse(user));
    } else {
      res.status(404).send({ message: 'User not found' });
    }
  })
  .put(async (req, res) => {
    const updatedUser = await usersService.updateById(req.params.id, req.body);
    if (updatedUser) {
      res.json(User.toResponse(updatedUser));
    } else {
      res.status(404).send({ message: 'User not found' });
    }
  })
  .delete(async (req, res) => {
    const deletedUser = await usersService.deleteById(req.params.id);
    if (deletedUser) {
      res.status(204).send();
    } else {
      res.status(404).send({ message: 'User not found' });
    }
  });

module.exports = router;
