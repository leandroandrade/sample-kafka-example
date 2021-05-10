const { Kafka } = require('kafkajs')
const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['localhost:9094']
});

(async () => {
    const producer = kafka.producer()
    await producer.connect()

    const payload = {
        topic: 'bank001',
        messages: [
            { key: 'kafka-producer', value: `Hello KafkaJS ${ Date.now() }` },
        ],
    };
    await producer.send(payload)
    await producer.disconnect()
})();
