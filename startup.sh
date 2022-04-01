!# /bin/bash
docker image rm fischernz/dashcoin:1.0 . -f
docker build -t fischernz/dashcoin:1.0 .
docker container stop dashcoin
docker container rm dashcoin -f
docker container run --name dashcoin -p 3333:3333 fischernz/dashcoin:1.0
