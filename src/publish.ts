import { PubSub } from '@google-cloud/pubsub';

const projectId = 'katayama-sandbox-639ef'; // Your Google Cloud Platform project ID
const topicNameOrId = 'my-topic'; // Name for the new topic to create

const data = JSON.stringify({
  user: {
    id: 1,
    name: 'Mike',
    email: 'mike@gmailcom',
    age: 20,
  },
});

const pubSubClient = new PubSub({ projectId });
pub(topicNameOrId, data);

async function pub(topicNameOrId: string, data: any) {
  const dataBuffer = Buffer.from(data);

  try {
    const messageId = await pubSubClient
      .topic(topicNameOrId)
      .publishMessage({ data: dataBuffer });

    console.log(`Message ${messageId} published.`);
  } catch (error: any) {
    console.error(`Received error while publishing: ${error.message}`);
    process.exitCode = 1;
  }
}
