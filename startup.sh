#!/bin/bash

port=3333

while getopts 'p:' OPTION; do
  case "$OPTION" in
    p)
      port="$OPTARG"
      echo "Starting on port $OPTARG"
      ;;
  esac
done 
# shift "$(($OPTIND -1))"

docker image rm fischernz/dashcoin:1.0 -f
docker build -t fischernz/dashcoin:1.0 .
docker container stop dashcoin
docker container rm dashcoin -f
docker container run --name dashcoin -p $port:3333 fischernz/dashcoin:1.0
