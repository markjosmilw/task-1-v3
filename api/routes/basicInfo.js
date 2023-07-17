const Router = require('koa-router')
const router = new Router();

const { getBasicInfos, getBasicInfo, postBasicInfo } = require("../controllers/basicInfo");

router.get("/test", (ctx) => ctx.body = "test ok");
router.get("/api/infos", getBasicInfos);
router.get("/api/infos/:id", getBasicInfo);

router.post('/api/infos', postBasicInfo)

module.exports = router;