import express from 'express';
import Client from './client.model.js';
import clientsService from './client.service.js';

const router = express.Router();

router
  .route('/')
  .get(async (req, res) => {
    const clients = await clientsService.getAll();
    res.json(clients.map(Client.toResponse));
  })
  .post(async (req, res) => {
    const client = await clientsService.create(req.body);
    res.status(201).json(Client.toResponse(client));
  });

router
  .route('/:id')
  .get(async (req, res) => {
    const client = await clientsService.getById(req.params.id);
    if (client) {
      res.json(Client.toResponse(client));
    } else {
      res.status(404).send({ message: 'Client not found' });
    }
  })
  .put(async (req, res) => {
    const updatedClient = await clientsService.updateById(req.params.id, req.body);
    if (updatedClient) {
      res.json(Client.toResponse(updatedClient));
    } else {
      res.status(404).send({ message: 'Client not found' });
    }
  })
  .delete(async (req, res) => {
    const deletedClient = await clientsService.deleteById(req.params.id);
    if (deletedClient) {
      res.status(204).send();
    } else {
      res.status(404).send({ message: 'Client not found' });
    }
  });

export default router;
