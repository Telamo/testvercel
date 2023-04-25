const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return ChiTietLoaiCongViec.init(sequelize, DataTypes);
}

class ChiTietLoaiCongViec extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_chi_tiet_loai_cong_viec: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ten_chi_tiet: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    hinh_anh: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    id_loai_cong_viec: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'LoaiCongViec',
        key: 'id_loai_cong_viec'
      }
    }
  }, {
    sequelize,
    tableName: 'ChiTietLoaiCongViec',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_chi_tiet_loai_cong_viec" },
        ]
      },
      {
        name: "id_loai_cong_viec",
        using: "BTREE",
        fields: [
          { name: "id_loai_cong_viec" },
        ]
      },
    ]
  });
  }
}
