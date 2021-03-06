#!/bin/sh

# Mostly stolen from https://github.com/vidpresso/hubot-syncer/blob/master/pullpushprod.sh

cd /app

echo "Setting up SSH."
mkdir /app/.ssh
echo "$SSH_PRIVATE_KEY" > .ssh/id_rsa
echo "Host github.com\n\tStrictHostKeyChecking no\n" >> ~/.ssh/config
echo "Host heroku.com\n\tStrictHostKeyChecking no\n" >> ~/.ssh/config
echo "Host $REMOTE_HOST\n\tStrictHostKeyChecking no\n" >> ~/.ssh/config

echo "sshing to $REMOTE_USER@$REMOTE_HOST"
ssh $REMOTE_USER@$REMOTE_HOST 'docker ps'

echo "Cleaning up..."
rm -Rf /app/appname
rm -Rf /app/.ssh

exit 0
