
# [Day2] Create navigation micro-frontend and integrate with root-app

This branch contains code for navigation angular application basic setup.
Also given code to connect with root app.


## Generate navigation-app (angular app)

- This app is generated using below command and then added few changes after that to make it work as micro-frontend: 

`ng new mfe-navigation`

- Follow the changes suggested by single-spa team: [Changes](https://github.com/powerplugin/single-spa-poc/commit/2d4f3e482f2619d83ec266163092c1b6055a41c2)
- Add navigation micro frontend config into root-app: [Changes](https://github.com/powerplugin/single-spa-poc/commit/40b814230c3209fec4503fd0d10c4cf2996f8212)


## Run navigation application in development mode

Install npm dependecies and then run below command

`npm run serve:single-spa:mfe-navigation`

after successful completion of command, verify mfe bundle using http://localhost:9000/main.js

And then refresh root-app (http://localhost:9000)


*Both App shound be running state (root-app and mfe-navigation)
