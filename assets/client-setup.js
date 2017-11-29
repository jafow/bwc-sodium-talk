var sodium = require('sodium-native')
var http = require('http')
/* configuration details for connecting and sending data to the recipient */
var HOST = '192.81.132.41'
var PORT = 3888
var requestKeyOptions = {hostname: HOST, port: PORT, method: 'GET', path: '/pk'}
var sendMessageOptions = {hostname: HOST, port: PORT, method: 'POST', path: '/msg'}


var publicKey = 0// 1. Allocate some memory using sodium's "crypto_box_PUBLICBYTES" value

var secretKey = 0// 2. Allocate some more memory for the secrety key using the crypto_box_SECRETKEYBYTES value
// if you need a reference look here --> https://github.com/sodium-friends/sodium-native#public--secret-key-box-encryption

// 2.1 Use sodium's `crypto_box_keypair` method to create your public and private keys
// https://github.com/sodium-friends/sodium-native#crypto_box_keypairpublickey-secretkey


var plainTextMessage = '' // 3. write something here! This will be the string that gets encrypted and sent

var cipherText = 0 // 4. Allocate a block of memory that will hold the encrypted text (cipher)
// for reference read about sodium's `crypto_box_seal`: 
// https://github.com/sodium-friends/sodium-native#crypto_box_sealcipher-message-publickey

// This creates the connection to our friend
var getTheirPublicKeyConnection = http.request(requestKeyOptions, getTheirPublicKey)
// watch out for errors! and close the connection after it's done
getTheirPublicKeyConnection.on('err', (e) => { console.error('error: ', e) })
getTheirPublicKeyConnection.end()


// This is the function that runs after the connection is made
function getTheirPublicKey (connection) {
  connection.on('data', (data) => {
    var theirPublicKey = data
    // When the connection is made, we listen for data to be sent;
    // On 'data' event means they sent us their key!
    
    // 5. encrypt the ciphertext with recipient's pk that we got from their server
    // for reference read through the section on `crypto_box_seal`
    // https://github.com/sodium-friends/sodium-native#crypto_box_sealcipher-message-publickey
    
    // 6. post the message (encrypted with their public key!) back to them
    var sendMessageConnection = http.request(sendMessageOptions, sendMessageResponseHandler)
    sendMessageConnection.write(/* insert ... SOMETHING here. ;-) What do we want to send to our friend? NOT our secret key! */)
    // close the connection after writing
    sendMessageConnection.end()
    // success!
  })
}

function sendMessageResponseHandler (connection) {
  connection.on('end', () => {
    console.log('ended')
  })
  connection.on('data', (data) => {
    console.log('message received status: ', data.toString())
  })
}
