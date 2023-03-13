const names = require("./1-names");
console.log(names);

const sayHi = require("./2-utils");
const data = require("./3-alternatives");
require("./4-MindGrenade");
sayHi(names.pete);
sayHi(names.susan);
sayHi(data.singlePerson);
