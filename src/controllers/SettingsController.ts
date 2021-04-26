/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import { SettingsService } from '../services/SettingsService';

class SettingsController {
  async create(request: Request, response: Response) {
    try {
      const { chat, username } = request.body;
      const settingsService = new SettingsService();
      const settings = await settingsService.create({ chat, username });
      return response.json(settings);
    } catch (err) {
      return response.status(400).json({
        message: 'Settings Dont create',
        messageOfStuffApi: err.message,
      });
      console.log('SettingsController', err);
    }
  }

  async findByUsername(request: Request, response: Response) {
    const { username } = request.params;
    const settingsService = new SettingsService();
    const settings = await settingsService.findByUsername(username);
    return response.json(settings);
  }

  async update(request: Request, response: Response) {
    const { username } = request.params;
    const { chat } = request.body;
    const settingsService = new SettingsService();
    const settings = await settingsService.update(username, chat);
    return response.json(settings);
  }
}
// eslint-disable-next-line import/prefer-default-export
export { SettingsController };
