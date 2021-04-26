/* eslint-disable import/prefer-default-export */
/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import { UsersService } from '../services/UsersService';

class UsersController {
  async create(request: Request, response: Response): Promise<Response> {
    try {
      const { email } = request.body;
      const usersService = new UsersService();
      const user = await usersService.create(email);
      return response.json(user);
    } catch (err) {
      return response.status(400).json({
        message: 'User dont created',
        messageOfStuffApi: err.message,
      });
      console.log('UsersController ', err);
    }
  }
}

export { UsersController };
