import express from 'express';
import { Client } from './client.model';
import * as clientsService from './client.service';
const router = express.Router();
router
    .route('/')
    .get(async (_req, res) => {
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
    const clientId = req.params['id'];
    if (!clientId) {
        res.status(400).send({ message: 'Invalid client ID' });
        return;
    }
    const client = await clientsService.getById(clientId);
    if (client) {
        res.json(Client.toResponse(client));
    }
    else {
        res.status(404).send({ message: 'Client not found' });
    }
})
    .put(async (req, res) => {
    const clientId = req.params['id'];
    if (!clientId) {
        res.status(400).send({ message: 'Invalid client ID' });
        return;
    }
    const updatedClient = await clientsService.updateById(clientId, req.body);
    if (updatedClient) {
        res.json(Client.toResponse(updatedClient));
    }
    else {
        res.status(404).send({ message: 'Client not found' });
    }
})
    .delete(async (req, res) => {
    const clientId = req.params['id'];
    if (!clientId) {
        res.status(400).send({ message: 'Invalid client ID' });
        return;
    }
    const deletedClient = await clientsService.deleteById(clientId);
    if (deletedClient) {
        res.status(204).send();
    }
    else {
        res.status(404).send({ message: 'Client not found' });
    }
});
export default router;
//# sourceMappingURL=client.router.js.map