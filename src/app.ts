import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ host: '0.0.0.0', port: 3000 });

wss.on('connection', function connection(ws) {
  console.log("client connected");

  ws.on('error', console.error);

  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  ws.send('Hello from Server!');

});

console.log('ws://localhost:3000');
