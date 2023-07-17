const Router = require("koa-router");
const router = new Router();

const { getContactInfos, postContactInfo } = require("../controllers/contactInfo");

router.get("/api/contacts", getContactInfos);
router.post("/api/contacts", postContactInfo);

module.exports = router;
