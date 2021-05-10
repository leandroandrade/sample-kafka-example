const { Kafka } = require('kafkajs')
const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['localhost:9094']
});

(async () => {
    const consumer = kafka.consumer({ groupId: 'test-group' })
    await consumer.connect()

    await consumer.subscribe({ topic: 'bank001', fromBeginning: true })
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log({
                value: message.value.toString(),
            })
        },
    })
})();