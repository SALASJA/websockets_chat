This is a simple vanilla javascript and expressjs backend chat app using websockets.
To make it cooler I also added an ESP8266 code for projects involving that. 
This is just some example code to help bridge electronics and webdev.
You only need to install nodejs and expressjs. The ESP8266 is optional, you'll need 
to install the drivers for that. Look in my commit messages for further explanation or
this link https://cityos-air.readme.io/docs/1-usb-drivers-for-nodemcu-v10.
The library used is the WebSockets2 library which you can find in the library manager
in arduino ide. I developed all of this on mac, and is mostly stable on 
and looks best on newer versions of chrome. To run enter the backend folder
and type "npm install" to install the dependencies. Once all of that has downloaded
run the server by typing "node server.js". Once it starts running, you can
find your server at "localhost:3000" when you type this into your browser url.
In order to access this from other devices you need to know your device running the
server IP. For example my laptop is 192.168.1.76, so i can access the chat from my phone
using 192.168.1.76:3000. If you port forward it you can also access it from anywhere in 
the world, just make sure to modify 3000 to be 80, and modify your router settings
to port forward port 80. Your app should now be accessible using your routers public ip
address. 