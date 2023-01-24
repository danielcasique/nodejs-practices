const fs = require("fs");
const path = require("path");
const fs1 = require("fs").promises;

const filepath = path.join(process.cwd(), "hello.txt");

//Asynchronous way
fs.readFile(filepath, "utf8", (err, contents) => {
    if (err) {
        return console.log(err);
    }
    console.log("AW: File Contents:", contents);
    const upperContents = contents.toUpperCase();

    //updateFile(filepath, upperContents);
    setTimeout(() => updateFile(filepath, upperContents), 10);
});

function updateFile(filepath, contents) {
    fs.writeFile(filepath, contents, (err) => {
    if (err) throw err;
        console.log("AW: File updated.");
    });
}

setInterval(() => process.stdout.write("**** \n"),1).unref();

//Synchronous way
const contents = fs.readFileSync(filepath, "utf8");
console.log("SW: File Contents:", contents);
const upperContents = contents.toUpperCase();
fs.writeFileSync(filepath, upperContents);
console.log("SW: File updated.");




//promises with async and await format
async function run() {
    try {
        const contents = await fs1.readFile(filepath, "utf8");
        console.log("A-A WAY File Contents:", contents);
    } catch (error) {
        console.error(error);
    }
}

run();    

//Promises
fs1.readFile(filepath, "utf8").then((contents) => {
    console.log("Promises: File Contents:", contents);
});

