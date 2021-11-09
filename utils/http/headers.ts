import { VercelResponse } from '@vercel/node';

export function setHeaders(r: VercelResponse): VercelResponse {
	r.status(200);
	r.setHeader('Content-Type', 'application/json');
	return r;
}

export function enableCORS(r: VercelResponse): VercelResponse {
	r.setHeader('Access-Control-Allow-Credentials', 'true');
	r.setHeader('Access-Control-Allow-Origin', '*');
	r.setHeader('Access-Control-Allow-Methods', 'GET');
	r.setHeader(
		'Access-Control-Allow-Headers',
		'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
	);
	return r;
}