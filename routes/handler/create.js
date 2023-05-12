const { People } = require('../../models')
const Validator = require('fastest-validator')
const v = new Validator()

module.exports = async (req, res) => {
    const { slug, name, native_name, gender, birthday, biography } = req.body

    const schema = {
        slug: 'string|empty:false',
        name: 'string|empty:false',
        native_name: 'string|optional:true',
        gender: { type: 'enum', values: ['male', 'female'] },
        birthday: 'date|optional:true',
        biography: 'string|optional:true'
    }

    const validate = v.validate(req.body, schema)

    if (validate.length) {
        return res.status(400).json({
            status: 'error',
            message: validate
        })
    }

    const data = { slug, name, native_name, gender, birthday, biography }

    const createPeople = await People.create(data)

    return res.json({
        status: 'success',
        data: createPeople
    })
}
