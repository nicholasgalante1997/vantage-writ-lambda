import { VercelResponse } from '@vercel/node';

export function setHeaders(r: VercelResponse): VercelResponse {
    r.status(200);
	r.setHeader('Content-Type', 'application/json');
    return r;
}