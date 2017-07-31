import express from 'express';
import proxy from 'express-http-proxy';
import { serverPort } from '../etc/config.json';

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/proxy', proxy('http://bonus-get.ru'));
app.use('/uploads', proxy('http://bonus-get.ru/uploads'))

const server = app.listen(serverPort, function() {
    console.log(`Server is up and running on port ${serverPort}`);
});
