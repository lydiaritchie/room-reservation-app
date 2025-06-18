const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const service = require("./users.service");

async function readUserFirstName(req, res, next){
    console.log("reading user first name...");
    next();
}

module.exports ={
    read: asyncErrorBoundary(readUserFirstName),
}