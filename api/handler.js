import { getRouter } from '../../src/router';

export default async function handler(req, res) {
  try {
    const router = getRouter();
    const html = await router.getDeserializedState();
    
    res.status(200).send(html);
  } catch (error) {
    console.error('Error handling request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
