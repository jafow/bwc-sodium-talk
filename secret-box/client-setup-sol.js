var sodium = require('sodium-native')
var http = require('http')
/* configuration details for connecting and sending data to the recipient */
var HOST = 'localhost'
var PORT = 3888

var requestKeyOptions = {hostname: HOST, port: PORT, method: 'GET', path: '/pk'}
var sendMessageOptions = {hostname: HOST, port: PORT, method: 'POST', path: '/msg'}


var publicKey = Buffer.alloc(sodium.crypto_box_PUBLICKEYBYTES)

var secretKey = Buffer.alloc(sodium.crypto_box_SECRETKEYBYTES)
// if you need a reference look here --> https://github.com/sodium-friends/sodium-native#public--secret-key-box-encryption

// use the `crypto_box_keypair` method to fill those buffers with keys
// for reference look at:
// https://github.com/sodium-friends/sodium-native#crypto_box_keypairpublickey-secretkey
sodium.crypto_box_keypair(publicKey, secretKey)

var plainTextMessage = 'This is fun!' // 3. write something here! This will be the string that gets encrypted and sent

var cipherText = Buffer.alloc(sodium.crypto_box_SEALBYTES + plainTextMessage.length)
// for reference read about sodium's `crypto_box_seal`: 
// https://github.com/sodium-friends/sodium-native#crypto_box_sealcipher-message-publickey

var getTheirPublicKeyConnection = http.request(requestKeyOptions, getTheirPublicKey)

function getTheirPublicKey (connection) {
  connection.on('data', (data) => {
    var theirPublicKey = data
    // When the connection is made, we listen for data to be sent;
    // On 'data' event means they sent us their key!
    
    // 5. encrypt the ciphertext with recipient's pk that we got from their server
    // for reference read through the section on `crypto_box_seal`
    // https://github.com/sodium-friends/sodium-native#crypto_box_sealcipher-message-publickey
    sodium.crypto_box_seal(cipherText, Buffer.from(plainTextMessage), theirPublicKey)
    
    // 6. post the message (encrypted with their public key!) back to them
    var sendMessageConnection = http.request(sendMessageOptions, sendMessageResponseHandler)
    sendMessageConnection.write(cipherText) //What do we want to send to our friend? NOT our secret key! */)
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

// watch out for errors! and close the connection after it's done
getTheirPublicKeyConnection.on('err', (e) => { console.error('error: ', e) })
getTheirPublicKeyConnection.end()
