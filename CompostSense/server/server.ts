import WebSocket from 'ws';

//Simulação
function getTemperatura(): number {
  //Lógica para ler a temperatura do sensor
  return Math.random() * 30 + 15; 
}

function getUmidade(): number {
  return Math.random() * 100; 
}

function getCO2(): number {
  //Lógica para ler o nível de CO2 do sensor
  return Math.random() * 500 + 300; 
}

function getAmonia(): number {
  //Lógica para ler o nível de amônia do sensor
  return Math.random() * 50; 
}

const wss = new WebSocket.Server({ port: 8085 });

wss.on('connection', (ws) => {
  console.log('Nova conexão WebSocket');

  const intervalId = setInterval(() => {
    const sensorData = {
      temperatura: getTemperatura(),
      umidade: getUmidade(),
      co2: getCO2(),
      amonia: getAmonia(),
    };
    ws.send(JSON.stringify(sensorData));
  }, 5000); 

  ws.on('close', () => {
    console.log('Conexão fechada');
    clearInterval(intervalId); 
  });

  ws.on('error', (error) => {
    console.error('Erro no WebSocket:', error);
  });
});

console.log('Servidor WebSocket está ouvindo na porta 8085');


