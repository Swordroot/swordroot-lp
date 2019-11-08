import * as functions from 'firebase-functions';
import axios from 'axios';
import nuxtApp from './nuxt-server';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

export const contact = functions.https.onRequest(async (req, res) => {
  if (req.method !== 'POST') {
    res.status(404).send('not found');
    return;
  }
  await axios
    .post(
      'https://hooks.slack.com/services/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',
      req.body
    )
    .then(() => {
      res.status(200).send('OK');
    })
    .catch(reason => {
      res.status(500).send(reason);
    });
});

export const nuxt = functions.https.onRequest(nuxtApp);
