const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return BinhLuan.init(sequelize, DataTypes);
}

class BinhLuan extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_binh_luan: {
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
    id_nguoi_binh_luan: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'NguoiDung',
        key: 'id_nguoi_dung'
      }
    },
    ngay_binh_luan: {
      type: DataTypes.DATE,
      allowNull: true
    },
    noi_dung: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    sao_binh_luan: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'BinhLuan',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_binh_luan" },
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
        name: "id_nguoi_binh_luan",
        using: "BTREE",
        fields: [
          { name: "id_nguoi_binh_luan" },
        ]
      },
    ]
  });
  }
}
