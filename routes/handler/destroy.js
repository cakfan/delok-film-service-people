const { People } = require('../../models')

module.exports = async (req, res) => {
    const id = req.params.id

    const people = await People.findByPk(id)
    if (!people) {
        return res.status(404).json({
            status: 'error',
            message: 'Not Found'
        })
    }

    await People.destroy({
        where: { id }
    })

    return res.json({
        status: 'success',
        message: 'People has been deleted'
    })
}
