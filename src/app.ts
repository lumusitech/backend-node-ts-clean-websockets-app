import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ host: '0.0.0.0', port: 3000 });

wss.on('connection', function connection(ws) {
  console.log("client connected");

  ws.on('error', console.error);

  ws.on('message', function message(data) {
    console.log('received: %s', data);

    const payload = {
      type: 'custom-message',
      payload: data.toString(),
    }

    ws.send(JSON.stringify(payload));
  });


  // ws.send('Hello from Server!');

  ws.on('close', () => {
    console.log("client disconnected");
  });

});

console.log('ws://localhost:3000');
