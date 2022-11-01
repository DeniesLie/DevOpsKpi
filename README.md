# HW #1 Docker

## Build docker image
```
docker build -t denysl1enk0/node-devops:latest -f .\Dockerfile .
```

## Run container with cpu and memory limits
```
docker run -p 80:80 -d --cpus=1 --memory="50m" denysl1enk0/node-devops:latest
```
![image](https://user-images.githubusercontent.com/59698344/199161115-b873c98b-cd9d-4e71-bcd3-a62eb53aff3b.png)
![image](https://user-images.githubusercontent.com/59698344/199161134-4ac49600-554c-408c-8b6f-1ff0e46e3458.png)

## Push to dockehub 
```
docker push denysl1enk0/node-devops:latest
```
[dockerhub](https://hub.docker.com/repository/docker/denysl1enk0/node-devops)
