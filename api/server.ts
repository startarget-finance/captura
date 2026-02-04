import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    // Dynamic import after build
    const serverModule = await import('../dist/captura/server/server.mjs');
    const { reqHandler } = serverModule;
    
    if (reqHandler) {
      return reqHandler(req as any, res as any);
    } else {
      res.status(500).send('Server handler not found');
    }
  } catch (error) {
    console.error('Error in server handler:', error);
    res.status(500).send('Internal server error');
  }
}
