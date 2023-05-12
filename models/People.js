module.exports = (sequelize, DataTypes) => {
    const people = sequelize.define('People', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        slug: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        native_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        gender: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ['male', 'female']
        },
        birthday: {
            type: DataTypes.DATE,
            allowNull: true
        },
        biography: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        createdAt: {
            field: 'created_at',
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            field: 'updated_at',
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        tableName: 'people',
        timestamps: true
    })
    return people
}