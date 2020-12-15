import cookies from 'next-cookies';

export function auth(ctx) {
  const token = cookies(ctx).token;

  if (!token) {
    ctx.res.writeHead(302, { Location: '/' });
    ctx.res.end();
    return;
  }

  return token;
}
