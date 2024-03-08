# NomadNotifier
CS180 course project - UCR

## Installing and Building the code  
To run the code you must be in a linux enviroment (such as using WSL) first as we are using ubuntu(must be able to install and run ubuntu before). All of the installation instructions are to be done in the NomadNotifierReact directory(folder). Next, we must install npm twice(in order, must let each finish individually):  
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
