

A sample receiver for GPSLogger's Custom URL feature.  This application will receive the querystring parameters and write it to a local file. 

### Run the app

To start, use

    docker-compose up -d
    
Then hit the `/log` endpoint, for example

    http://localhost:3000/log?lat=11&lon=22&spd=0&custom=hello
    
And then look at the `output.csv` file produced. 

The header is only written once; if you ever change the querystring parameters on the GPSLogger side, the header will no longer match the contents - you should probably move the file at that point.    


### Note

This should not be exposed directly on a production server.  Ideally put a proper web server like Apache or Nginx in front of this. Further, consider using SSL certificates as well.
