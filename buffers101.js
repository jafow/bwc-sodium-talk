/* Buffers 101 */

/* write a function that creates an empty buffer of size N
 * example:
 * emptyBuffer(6)
 * //=> <Buffer 00 00 00 00 00 00>
 *
 * more info here: https://nodejs.org/api/buffer.html#buffer_class_method_buffer_alloc_size_fill_encoding
 */
function emptyBuffer (size) {

}


/* write a function that creates a buffer of size `size`
* and fills it with the `fillValue`
* example:
* filledBuffer(6, 18)
* //=> <Buffer 12 12 12 12 12 12 >
* more info here: https://nodejs.org/api/buffer.html#buffer_buf_fill_value_offset_end_encoding
*/
function filledBuffer (size, fillValue) {

}


/* write a function to fill a buffer with the numbers 97-107
 * example: 
 * rangeBuffer()
 *  //=> <Buffer 61 62 63 64 65 66 67 68 69 6a 6b>
 *  more info here: https://nodejs.org/api/buffer.html#buffer_buf_index
 */
function rangeBuffer () {

}


/* write a function that converts a string into a Buffer
* and returns that buffer
*
* example:
* convertStringToBuffer('hello world!') 
* //=> <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>
* more info here: https://nodejs.org/api/buffer.html#buffer_class_method_buffer_from_string_encoding
*/
function convertStringToBuffer (str) {

}

module.exports = { emptyBuffer, filledBuffer, rangeBuffer, convertStringToBuffer }
