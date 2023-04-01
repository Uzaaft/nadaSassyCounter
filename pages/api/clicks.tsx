import { NextApiRequest, NextApiResponse } from 'next';
import { Click } from '../../types/dataTypes';

// Add route to register clicks
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const click: Click = req.body;
    console.log('Received a click:', click);
    res.status(200).json({});
  }
  if (req.method === 'GET') {
    console.log('Received a GET request');
    res.status(200).json({});
  }
}
