- https://cloud.google.com/nodejs/docs/reference/pubsub/latest#using-the-client-library
- https://cloud.google.com/pubsub/docs/publish-receive-messages-client-library?hl=ja
- https://genzouw.com/entry/2021/02/10/080020/2179/
---
### commands
- create topic
```bash
  gcloud pubsub topics create my-topic
```
- create subscription
```bash
  gcloud pubsub subscriptions create my-sub --topic my-topic
```
- clean up
```bash
  gcloud pubsub subscriptions delete my-sub
  gcloud pubsub topics delete my-topic
```
