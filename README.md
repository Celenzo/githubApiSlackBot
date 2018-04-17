# Github Slack Bot

Making a slack bot posting github events

Use : 

> sudo rabbitmq-server

> Github Webhook : node server.js & && ngrok http 4567__
  Set the link as organization webhook on github__
  The Webhook will get all events and send them in a queue

> Slack bot : Create a slack app and get the incoming webhook token__
  Put the token in slackBot/config.js (in slack.token)__
  The program will send all message from the queue to slack




TODO:
---------------------

GITHUB WEBHOOK
---------------------
	Better pull request handling		OK
	Better pull request review handling 	OK
	Better onInstallRepo handling 		OK
	Better onTeam handling 			OK
	Return the result 			OK
	Set message with slack format		OK
	Set AMQP publish			OK
	Set Slack attachments			OK
	Set small text (commented by...)	OK
	    Set small text link			OK
	Display only the new comment on review	OK
	Fix position in small text   		OK
	Refactor HELLFILE
---------------------
SLACK BOT
---------------------
	Create BOT				OK
	Set AMQP consume			OK
	Post Message				OK
	Format Messages				OK