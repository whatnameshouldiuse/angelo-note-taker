/**
 * Code from course content
 */
const fs = require('fs');
const util = require('util');

// Promise version of fs.readFile
const readFromFile = util.promisify(fs.readFile);
/**
 *  Function to write data to the JSON file given a destination and some content
 *  @param {string} destination The file you want to write to.
 *  @param {object} content The content you want to write to the file.
 *  @returns {void} Nothing
 */
const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );
/**
 *  Function to read data from a given a file and append some content
 *  @param {object} content The content you want to append to the file.
 *  @param {string} file The path to the file you want to save to.
 *  @returns {void} Nothing
 */
const readAndAppend = (content, file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeToFile(file, parsedData);
    }
  });
};
/**
 * Function to delete data from a given file with a given id
 * @param {string} id Identifying string of the content that should be deleted from the file
 * @param {string} file The path from which a specific content should be deleted from
 */
const deleteByID = (id, file) => {
  console.log(id);
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const parsedData = JSON.parse(data);
            const deleteIndex = parsedData.findIndex((data) => {
                return data.id === id;
            })
            if (deleteIndex != -1) {
                parsedData.splice(deleteIndex, 1);
                writeToFile(file, parsedData);
            } else {
                console.error('id could not be found');
            }
        }
    })
};

module.exports = {
    readFromFile,
    writeToFile,
    readAndAppend,
    deleteByID
};