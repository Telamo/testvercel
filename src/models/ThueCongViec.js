const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return ThueCongViec.init(sequelize, DataTypes);
}

class ThueCongViec extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_thue_cong_viec: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_cong_viec: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'CongViec',
        key: 'id_cong_viec'
      }
    },
    id_nguoi_thue: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'NguoiDung',
        key: 'id_nguoi_dung'
      }
    },
    ngay_thue: {
      type: DataTypes.DATE,
      allowNull: true
    },
    hoan_thanh: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ThueCongViec',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_thue_cong_viec" },
        ]
      },
      {
        name: "id_cong_viec",
        using: "BTREE",
        fields: [
          { name: "id_cong_viec" },
        ]
      },
      {
        name: "id_nguoi_thue",
        using: "BTREE",
        fields: [
          { name: "id_nguoi_thue" },
        ]
      },
    ]
  });
  }
}
