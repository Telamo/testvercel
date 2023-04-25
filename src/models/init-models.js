const DataTypes = require("sequelize").DataTypes;
const _BinhLuan = require("./BinhLuan");
const _ChiTietLoaiCongViec = require("./ChiTietLoaiCongViec");
const _CongViec = require("./CongViec");
const _LoaiCongViec = require("./LoaiCongViec");
const _NguoiDung = require("./NguoiDung");
const _ThueCongViec = require("./ThueCongViec");

function initModels(sequelize) {
  const BinhLuan = _BinhLuan(sequelize, DataTypes);
  const ChiTietLoaiCongViec = _ChiTietLoaiCongViec(sequelize, DataTypes);
  const CongViec = _CongViec(sequelize, DataTypes);
  const LoaiCongViec = _LoaiCongViec(sequelize, DataTypes);
  const NguoiDung = _NguoiDung(sequelize, DataTypes);
  const ThueCongViec = _ThueCongViec(sequelize, DataTypes);

  CongViec.belongsTo(ChiTietLoaiCongViec, { as: "id_chi_tiet_loai_cong_viec_ChiTietLoaiCongViec", foreignKey: "id_chi_tiet_loai_cong_viec"});
  ChiTietLoaiCongViec.hasMany(CongViec, { as: "CongViecs", foreignKey: "id_chi_tiet_loai_cong_viec"});
  BinhLuan.belongsTo(CongViec, { as: "id_cong_viec_CongViec", foreignKey: "id_cong_viec"});
  CongViec.hasMany(BinhLuan, { as: "BinhLuans", foreignKey: "id_cong_viec"});
  ThueCongViec.belongsTo(CongViec, { as: "id_cong_viec_CongViec", foreignKey: "id_cong_viec"});
  CongViec.hasMany(ThueCongViec, { as: "ThueCongViecs", foreignKey: "id_cong_viec"});
  ChiTietLoaiCongViec.belongsTo(LoaiCongViec, { as: "id_loai_cong_viec_LoaiCongViec", foreignKey: "id_loai_cong_viec"});
  LoaiCongViec.hasMany(ChiTietLoaiCongViec, { as: "ChiTietLoaiCongViecs", foreignKey: "id_loai_cong_viec"});
  BinhLuan.belongsTo(NguoiDung, { as: "id_nguoi_binh_luan_NguoiDung", foreignKey: "id_nguoi_binh_luan"});
  NguoiDung.hasMany(BinhLuan, { as: "BinhLuans", foreignKey: "id_nguoi_binh_luan"});
  CongViec.belongsTo(NguoiDung, { as: "id_nguoi_tao_NguoiDung", foreignKey: "id_nguoi_tao"});
  NguoiDung.hasMany(CongViec, { as: "CongViecs", foreignKey: "id_nguoi_tao"});
  ThueCongViec.belongsTo(NguoiDung, { as: "id_nguoi_thue_NguoiDung", foreignKey: "id_nguoi_thue"});
  NguoiDung.hasMany(ThueCongViec, { as: "ThueCongViecs", foreignKey: "id_nguoi_thue"});

  return {
    BinhLuan,
    ChiTietLoaiCongViec,
    CongViec,
    LoaiCongViec,
    NguoiDung,
    ThueCongViec,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
