# Github Slack Bot

Making a slack bot posting github events

Use : 

> sudo rabbitmq-server

> Github Webhook :
  ```
  node server.js & && ngrok http 4567
  ```
>  Set the link as organization webhook on github <br />
   The Webhook will get all events and send them in a queue

> Slack bot : Create a slack app and get the incoming webhook token <br />
  Put the token in slackBot/config.js (in slack.token) <br />
  The program will send all message from the queue to slack




## TODO:

---------------------

### GITHUB WEBHOOK

---------------------
- [x] Better pull request handling
- [x] Better pull request review handling 
- [x] Better onInstallRepo handling 
- [x] Better onTeam handling 
- [x] Return the result 
- [x] Set message with slack format
- [x] Set AMQP publish
- [x] Set Slack attachments
- [x] Set small text (commented by...)
- [x] Set small text link
- [x] Display only the new comment on review
- [x] Fix position in small text
- [ ] Refactor HELLFILE
---------------------

### SLACK BOT

---------------------
- [x] Create BOT
- [x] Set AMQP consume
- [x] Post Message
- [x] Format Messages