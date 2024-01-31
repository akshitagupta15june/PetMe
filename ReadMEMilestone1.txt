How to build the program:
First start by cloning the git repository from the link provided. Next, install Node.js and MongoDB. Once installed in the terminal of your IDE, change your directory to the server folder and install Node.js by typing “npm install”. In the same folder create a file called config.env and enter data as follows: 

    NODE_ENV=development
    PORT=8000
    USERNAME=admin
    PASSWORD=12345
    MONGO_PROD_URI=mongodb://localhost:ip
    MONGO_DEV_URI=mongodb://localhost:ip
    REMOTE=/test/x
    DATABASE=mongodb://localhost:27017/test?retryWrites=true&w=majority

Next, install Mocha by typing npm install --global mocha into the terminal. Lastly, install MongoDB and run a local server by typing npm install mongodb and npm install dotenv --save. Replace the IP with the one provided by MongoDB. You can now start a local MongoDB database. Use npm start to start the program. To run the tests, navigate into the server folder and type “npm test” . You do not need the server and MongoDB to be online for this.
