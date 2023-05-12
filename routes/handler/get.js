const { People } = require('../../models')

module.exports = async (req, res) => {
    const ids = req.query.ids
    const sqlOptions = {
        attributes: ['id', 'slug', 'name', 'native_name', 'gender', 'birthday', 'biography']
    }

    if (ids) {
        sqlOptions.where = {
            id: ids
        }
    }

    const peoples = await People.findAll(sqlOptions)

    if (!peoples.length) {
        return res.status(404).json({
            status: 'error',
            message: 'No people found'
        })
    }

    return res.json({
        status: 'success',
        data: peoples
    })

}
