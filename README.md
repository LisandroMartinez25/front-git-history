# FrontGitHistory
##### _By: [Lisandro Martínez](https://github.com/LisandroMartinez25)_

This a project to monitore all commits for each branch on this repository

## Requeriments
 - Node v12+
 - Angular cli
### Node
You must install [Node.js](https://nodejs.org/) v12+ from here [https://nodejs.org/](https://nodejs.org/).
### Angular cli
Oonce installed `Node`. You need instal the Angular cli.
Open your terminal and verify you `Node version` with:
 ```sh
node --version
```
Now intall Angular cli running the next command

 ```sh
npm install -g @angular/cli
```
## Installation
Clone this project in your computer using git:

- http: `git clone https://github.com/LisandroMartinez25/front-git-history.git`
- ssh: `git clone git@github.com:LisandroMartinez25/front-git-history.git`

Once cloned open your terminal and go to the project folder `/front-git-history`. 
Install the dependencies rurnning the next command on your terminal.
 ```sh
npm install
```
## Running
After install all dependences run the next command on your terminal.

```sh
ng serve
```
Open you browser and enter in next url: `http://localhost:4200/`

## Build
For build the project run:
```sh
gulp build
```
For production:
```sh
gulp build --prod
```
The build artifacts will be stored in the `dist/` directory.