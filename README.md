# NomadNotifier

## Installing and Building the code  
To run the code you must be in a linux enviroment (such as using WSL) first as we are using ubuntu(must be able to install and run ubuntu before). All of the installation instructions are to be done in the NomadNotifierReact directory (folder). Next, we must install npm twice (in order, must let each finish individually):  
```bash
 apt install npm
 npm install
```
Furthermore, we must install node.js: 
```bash
curl -fsSL https://deb.nodesource.com/setup_21.x | sudo -E bash - &&\
sudo apt-get install -y nodejs
```
If you see this kind of error: 
```bash
file:///home/user/NomadNotifier/NomadNotifierReact/node_modules/vite/bin/vite.js:7
    await import('source-map-support').then((r) => r.default.install())
```
run these lines of code sequentially, so we can get the right packages to run with npm: 
```bash
sudo agt-get autoremove
npm install
```
For our calendar, we use the React component for FullCalendar by installing:
```bash
npm install @fullcalendar/react @fullcalendar/daygrid @fullcalendar/timegrid @fullcalendar/interaction
```
We are using Firebase as our backend(Database), and so we need to install firebase locally: 
```bash
npm install --save firebase
```
To build our application use command:
```bash
npm run build
```
To run our application use command:
```bash
npm run dev
```
To install our testing environment using Jest, use command: 
```bash
npm install --save-dev jest@latest @testing-library/react @testing-library/jest-dom @testing-library/user-event babel-jest jest-environment-jsdom
```
To run our test's through Jest, use command: 
```bash
npm test
```

## UML Class Diagram
<img width="527" alt="Screen Shot 2024-03-17 at 11 55 10 PM" src="https://github.com/jgonz671/NomadNotifier/assets/129993436/c055ea65-8bd8-413d-a6c0-653f414fc13a">

## UML Case Diagram
<img width="586" alt="Screen Shot 2024-03-17 at 11 56 23 PM" src="https://github.com/jgonz671/NomadNotifier/assets/129993436/b94f4c90-8607-40a1-8a24-81586eb79068">


