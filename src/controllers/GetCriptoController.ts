import { Request, Response } from 'express';
import { GetCriptoService } from '../services/GetCriptoService';

export class GetCriptoController {
  async handle(req: Request, res: Response) {
    const getCriptoService = new GetCriptoService();

    const { initials } = req.params;

    const cripto = await getCriptoService.execute(initials);

    return res.json(cripto);
  }
}
