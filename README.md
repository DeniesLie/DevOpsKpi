# HW #1 Docker

## Build docker image
```
docker build -t denysl1enk0/node-devops:latest -f .\Dockerfile .
```

## Run container with cpu and memory limits
```
docker run -p 80:80 -d --cpus=1 --memory="50m" denysl1enk0/node-devops:latest
```

## Push to dockehub 
```
docker push denysl1enk0/node-devops:latest
```
[dockerhub](https://hub.docker.com/repository/docker/denysl1enk0/node-devops)