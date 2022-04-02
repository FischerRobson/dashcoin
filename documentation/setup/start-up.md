# Start Up

To run the project in your computer, you only need run the **startup.sh**.

First you need give permission for execute the startup:

```sh
chmod x+ startup.sh
```

Then, its just run the startup:

```sh
./startup.sh
```

The startup script remove previous image and containers of project, build the image specified in dockerfile and start a container named dashcoin, running on port 3333.

> If you want to change the port, its just change the parameter on line 6:

```sh
-p 3333:[PORT]
```
