import * as express from 'express';
import { Nuxt } from 'nuxt';

const app = express();

const config = {
  dev: false,
  buildDir: 'dist',
  build: {
    publicPath: '/'
  }
};
const nuxt = new Nuxt(config);

function handleRequest(req: any, res: any) {
  res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
  nuxt
    .renderRoute('/')
    .then((result: any) => {
      res.send(result.html);
    })
    .catch((e: any) => {
      res.send(e);
    });
}

app.get('*', handleRequest);

export default app;
