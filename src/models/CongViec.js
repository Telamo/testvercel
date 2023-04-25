const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return CongViec.init(sequelize, DataTypes);
}

class CongViec extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_cong_viec: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ten_cong_viec: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    danh_gia: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    gia_tien: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hinh_anh: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    mo_ta: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    mo_ta_ngan: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    sao_cong_viec: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_chi_tiet_loai_cong_viec: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ChiTietLoaiCongViec',
        key: 'id_chi_tiet_loai_cong_viec'
      }
    },
    id_nguoi_tao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'NguoiDung',
        key: 'id_nguoi_dung'
      }
    }
  }, {
    sequelize,
    tableName: 'CongViec',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_cong_viec" },
        ]
      },
      {
        name: "id_chi_tiet_loai_cong_viec",
        using: "BTREE",
        fields: [
          { name: "id_chi_tiet_loai_cong_viec" },
        ]
      },
      {
        name: "id_nguoi_tao",
        using: "BTREE",
        fields: [
          { name: "id_nguoi_tao" },
        ]
      },
    ]
  });
  }
}
