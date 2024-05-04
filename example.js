
const fs = require("node:fs");
const os = require("os");
const fileName = './apps.txt';
let dataToWrite = 'hello Moto are you there yes lets fun'

const writeDataFun = (fileName, dataToWrite) => {
    fs.writeFile(fileName, dataToWrite, (err) => {

        if (err) {
            console.log('Error Occurs');
            return;
        }
        console.log('successfully created')
        console.log(dataToWrite);

    })
}

// writeDataFun(fileName, dataToWrite);


const AppendFileFun = (fileName, dataToWrite) => {
    fs.appendFile(fileName, os.EOL + dataToWrite, (err) => {
        if (err) {
            console.log("Error Occurs");
        }
        console.log("successfully Appended");
        console.log(dataToWrite);
    })
}

// AppendFileFun(fileName, dataToWrite)

const readFileFun = (fileName) => {
    // const data = fs.readFileSync("app.txt", { encoding: "utf-8" });
    // console.log(data);
    // return data;
    fs.readFile(fileName, { encoding: "utf-8" }, (err, dataToWrite) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(dataToWrite);
    })

}

readFileFun(fileName)


const deleteFun=(fileName)=> {
    fs.unlink(fileName, (err)=> {
        if(err) {
            console.log("Error Happen");
        }
    })
}

// deleteFun(fileName)




// console.log(__dirname);
// console.log(__filename);

// console.log(os.EOL);