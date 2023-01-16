// Route.js file

// import { fs } from "./account";

// export default undefined 
var express = require("express")
const router = express.Router();
var fs = require('fs');
var accountRoutes = require('./account.js') // import account route
router.use(accountRoutes) // use account route
module.exports = router;
// 