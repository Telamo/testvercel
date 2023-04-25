const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return NguoiDung.init(sequelize, DataTypes);
}

class NguoiDung extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_nguoi_dung: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    pass_word: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    birth_day: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    avatar: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    gender: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    role: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    skill: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    certification: {
      type: DataTypes.STRING(1000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'NguoiDung',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_nguoi_dung" },
        ]
      },
    ]
  });
  }
}
