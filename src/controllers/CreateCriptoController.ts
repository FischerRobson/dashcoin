import { Request, Response } from 'express';
import { CreateCriptoService } from '../services/CreateCriptoService';

export class CreateCriptoController {
  async handle(req: Request, res: Response) {
    const createCriptoService = new CreateCriptoService();

    const { name, initials, value } = req.body;

    const cripto = await createCriptoService.execute({
      name,
      initials,
      value,
    });

    return res.json(cripto);
  }
}
