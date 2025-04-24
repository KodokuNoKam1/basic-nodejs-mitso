import express, { Request, Response, Router } from 'express';
import { Client } from './client.model';
import * as clientsService from './client.service';

const router: Router = express.Router();

router
  .route('/')
  .get(async (_req: Request, res: Response) => {
    const clients = await clientsService.getAll();
    res.json(clients.map(Client.toResponse));
  })
  .post(async (req: Request, res: Response) => {
    const client = await clientsService.create(req.body);
    res.status(201).json(Client.toResponse(client));
  });

router
  .route('/:id')
  .get(async (req: Request, res: Response) => {
    const clientId = req.params['id'];
    if (!clientId) {
      res.status(400).send({ message: 'Invalid client ID' });
      return;
    }
    const client = await clientsService.getById(clientId);
    if (client) {
      res.json(Client.toResponse(client));
    } else {
      res.status(404).send({ message: 'Client not found' });
    }
  })
  .put(async (req: Request, res: Response) => {
    const clientId = req.params['id'];
    if (!clientId) {
      res.status(400).send({ message: 'Invalid client ID' });
      return;
    }
    const updatedClient = await clientsService.updateById(clientId, req.body);
    if (updatedClient) {
      res.json(Client.toResponse(updatedClient));
    } else {
      res.status(404).send({ message: 'Client not found' });
    }
  })
  .delete(async (req: Request, res: Response) => {
    const clientId = req.params['id'];
    if (!clientId) {
      res.status(400).send({ message: 'Invalid client ID' });
      return;
    }
    const deletedClient = await clientsService.deleteById(clientId);
    if (deletedClient) {
      res.status(204).send();
    } else {
      res.status(404).send({ message: 'Client not found' });
    }
  });

export default router;
