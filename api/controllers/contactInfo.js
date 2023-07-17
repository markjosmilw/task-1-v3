const knex = require("../database/db");
const Joi = require("joi");

const contactSchema = Joi.object({
  email: Joi.string().min(11).required(),
  phone: Joi.string().regex(/^[0-9]{11}$/).messages({'string.pattern.base': `Phone number must have 11 digits.`}).required(),
});

const getContactInfos = async (ctx) => {
  try {
    const contactInfos = await knex("contactinfo").select();
    ctx.body = contactInfos;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: error };
  }
};

const postContactInfo = async (ctx) => {
    const {email, phone} = ctx.request.body;
    try {
        await contactSchema.validateAsync(ctx.request.body)
        const [contactId] = await knex('contactinfo').insert({email, phone})
        const newContact = await knex('contactinfo').where('id', contactId)
        console.log(newContact);
        ctx.body = "Your contact information is received!"
    } catch (error) {
        ctx.status = 500
        ctx.body = error.details[0].message;
    }
}

module.exports = {
  getContactInfos,
  postContactInfo
};
