import { Request, Response } from 'express';
import { CreateUserService } from '../services/CreateUserService';

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const createUserService = new CreateUserService();

    const {
      name, lastName, email, birthday, gender, cpf,
    } = req.body;

    const user = await createUserService.execute({
      name,
      lastName,
      email,
      birthday,
      gender,
      cpf,
    });

    return res.json(user);
  }
}
