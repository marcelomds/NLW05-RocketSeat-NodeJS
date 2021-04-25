import { Router } from 'express';
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";
import { MessagesController } from "./controllers/MessagesController";

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

/**
 * Rotas de Settings
 */
routes.post('/settings', settingsController.create);
routes.get('/settings/:username', settingsController.findByUserName);
routes.put('/settings/:username', settingsController.update);

/**
 * Rotas de Usuários
 */
routes.post('/users', usersController.create);

/**
 * Rotas de Mensagens - CHAT
 */
routes.post('/messages', messagesController.create);
routes.get('/messages/:id', messagesController.showByUser);

export { routes };