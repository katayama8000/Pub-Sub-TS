import { PubSub } from '@google-cloud/pubsub';

const subscriptionNameOrId = 'my-sub';
const projectId = 'katayama-sandbox-639ef'; // Your Google Cloud Platform project ID

const timeout = 60;

const pubSubClient = new PubSub({ projectId });
sub(subscriptionNameOrId, timeout);

function sub(subscriptionNameOrId: string, timeout: number = 60) {
  const subscription = pubSubClient.subscription(subscriptionNameOrId);

  let messageCount = 0;
  const messageHandler = (message: any) => {
    console.log(`Received message ${message.id}:`);
    console.log(`\tData: ${message.data}`);
    console.log(`\tAttributes: ${message.attributes}`);
    messageCount += 1;

    message.ack();
  };

  subscription.on('message', messageHandler);

  setTimeout(() => {
    subscription.removeListener('message', messageHandler);
    console.log(`${messageCount} message(s) received.`);
  }, timeout * 1000);
}
