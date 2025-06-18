/**
 * Defines the router for reservation resources.
 *
 * @type {Router}
 */

const router = require("express").Router();
const notFound = require("../errors/notFound");
const controller = require("./users.controller");

router.route("/").get(controller.read).all(notFound);

module.exports = router;