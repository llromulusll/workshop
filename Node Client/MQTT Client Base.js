const mqtt = require('mqtt');
const client = mqtt.connect([{ host: 'localhost', port: 1883 }]); 
const topic = 'topic/name';
const message = 'test message'; 

client.on('connect', () => {
    console.log(`Is client connected: ${client.connected}`);    
    if (client.connected === true) {
        console.log(`message: ${message}, topic: ${topic}`); 
        // publish message        
        client.publish(topic, message);
    }

    // subscribe to a topic
    client.subscribe(topic);
});

// receive a message from the subscribed topic
client.on('message',(topic, message) => {
    console.log(`message: ${message}, topic: ${topic}`); 
});

// error handling
client.on('error',(error) => {
    console.error(error);
    process.exit(1);
});