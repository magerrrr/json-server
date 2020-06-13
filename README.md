# JSON server on NodeJS.

Hi! I decided to create my own **JSON server**. If you want to work with my example of **JSON server**, you should:
1. Install [Node.js](https://nodejs.org/en/download/) 
2. Fork this repository: [https://github.com/magerrrr/json-server](https://github.com/magerrrr/json-server)
3. Clone your newly created repo: `git clone https://github.com/<%your_github_username%>/json-server/`
4. Go to folder `json-server`
5. To install all dependencies use [`npm i`](https://docs.npmjs.com/cli/install)
6. Run `node index.js` in the command line
7. Open your terminal and run command `curl http://localhost:4000/notes` for testing GET method
8. Run command `curl --header "Content-Type: application/json" --request POST --data '{"text": "Hello, Server"}' http://localhost:4000/notes/new` for testing POST method

## How it works
![How the server works](https://i.ibb.co/HqW7DsT/2020-06-13-17-13-56.png)