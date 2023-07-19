const knex = require("../database/db");
const Joi = require('joi')

const basicInfoSchema = Joi.object({
  name: Joi.string().min(3).required(),
  age: Joi.number().min(1).max(100).required(),
  address: Joi.string().min(5).required()
});

const getBasicInfos = async (ctx) => {
  try {
    const infos = await knex("basicinfo");
    ctx.body = infos;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: error };
  }
};

const getBasicInfo = async (ctx) => {};

const postBasicInfo = async (ctx) => {
  const { name, age, address } = ctx.request.body;
  try {
    await basicInfoSchema.validateAsync(ctx.request.body);
    await knex("basicinfo").insert({ name, age, address });
    ctx.body = "Your basic information is received!";
  } catch (error) {
    //error condition
    ctx.status = 500;
    ctx.body = error.details[0].message;
  }
};

module.exports = {
  getBasicInfos,
  getBasicInfo,
  postBasicInfo,
};

//lodash