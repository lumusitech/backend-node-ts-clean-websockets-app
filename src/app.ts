import { WebSocket, WebSocketServer } from 'ws';

const wss = new WebSocketServer({ host: '0.0.0.0', port: 3000 });

wss.on('connection', function connection(ws) {
  console.log("client connected");

  ws.on('error', console.error);

  ws.on('message', function message(data) {
    const payload = JSON.stringify({
      type: 'custom-message',
      payload: data.toString(),
    })

    // broadcast to all clients including the sender
    // wss.clients.forEach(function each(client) {
    //   if (client.readyState === WebSocket.OPEN) {
    //     client.send(payload, { binary: false });
    //   }
    // });

    // broadcast to all clients except the sender
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(payload, { binary: false });
      }
    });

  });


  // ws.send('Hello from Server!');

  ws.on('close', () => {
    console.log("client disconnected");
  });

});

console.log('ws://localhost:3000');
