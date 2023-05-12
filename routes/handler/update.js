const { People } = require('../../models')
const Validator = require('fastest-validator')
const v = new Validator()

module.exports = async (req, res) => {
    const id = req.params.id

    const schema = {
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

    const people = await People.findByPk(id)

    if (!people) {
        return res.status(404).json({
            status: 'error',
            message: 'Not Found'
        })
    }

    const updated = await people.update(req.body)

    return res.json({
        status: 'success',
        data: updated
    })
}
