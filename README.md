# Slides and examples

You'll need to have [Node.js](https://nodejs.org/en/download/) installed on your
machine to run the examples and tests.

## Slides
After you download this repo, you can view the slides by opening the
[index.html](index.html) file in your web browser.

## Examples and Tests
#### 1.  First install all dependencies
open this folder in a terminal window and run this command:
```sh
npm install
```

This will download & install the necessary modules to run the code in this project.

#### 2. Complete the exercises and run the tests
After completing a challenge run this command in the terminal:

```sh
npm run test
```

That will run tests against all the coded in the `buffers101.js` file. Green
checkmarks mean passing, red means not!

#### 3. Hack on the client challenge
Included is a "solution" for the client side code that posts a secret box
encrypted message to a server. Try to get it working yourself and check here
[client-setup-sol.js](./secret-box/client-setup-sol.js)
if you're stuck.

You can run these locally on your machine by opening two terminal windows.

In one run this command:
```sh
node secret-box/server.js
```

This will start a server running your machine. You can run the client code
that will send an ecrypted message to the server by opening another terminal
window and running this command:

```sh
node secret-box/client-setup-sol.js
```

# License
MIT
