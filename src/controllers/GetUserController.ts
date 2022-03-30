import { Request, Response } from 'express';
import { GetUserService } from '../services/GetUserService';

export class GetUserController {
  async handle(req: Request, res: Response) {
    const getUserService = new GetUserService();
    console.log(req.query);

    const {
      name, lastName, cpf, email,
    } = req.query;

    const user = await getUserService.execute({
      name, lastName, cpf, email,
    });

    return res.json(user);
  }
}
