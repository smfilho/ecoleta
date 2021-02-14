import { Request, Response } from 'express';
import knex from '../database/connection';

class PointsController {
  async create(request: Request, response: Response) {
    const {
      name,
      email,
      phone,
      latitude,
      longitude,
      city,
      state,
      zip,
      items
    } = request.body;
  
    const trx = await knex.transaction();
  
    const insertedIds = await trx('points').insert({
      image: 'image-fake',
      name,
      email,
      phone,
      latitude,
      longitude,
      city,
      state,
      zip
    });
  
    const point_id = insertedIds[0];
  
    const pointItems = items.map((item_id: number) => {
      return {
        item_id,
        point_id,
      };
    });

    await trx('point_items').insert(pointItems);

    return response.json({ sucess: true });
  }
}

export default PointsController;