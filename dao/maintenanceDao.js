const db = require ('../config/db');

exports.create = async (maintenance) => {
  const sql = 'INSERT INTO manutencoes (usuario_id, veiculo, tipo_servico, quilometragem, observacoes) VALUES (?, ?, ?, ?, ?)';

  const [result] = await db.query (
    sql, 
    [maintenance.usuario_id, maintenance.veiculo, maintenance.tipo_servico, maintenance.quilometragem, maintenance.observacoes]
  );

  return result.insertId;
};

exports.findAll = async (usuario_id) => {
  const sql = 'SELECT * FROM manutencoes WHERE usuario_id = ? ORDER BY data_registro DESC';

  const [resultList] = await db.query(sql, [usuario_id]);

  return resultList;
};

exports.findById = async (idMaintenance, usuario_id) => {
  const sql = 'SELECT * FROM manutencoes WHERE id = ? and usuario_id = ?';

  const [resultList] = await db.query(sql, [idMaintenance, usuario_id]);

  return resultList[0];
};

exports.update = async (idMaintenance, maintenance) => {
  const sql = 'UPDATE manutencoes SET veiculo = ?, tipo_servico = ?, quilometragem = ?, observacoes = ? WHERE id = ? AND usuario_id = ?';

  const [result] = await db.query(
    sql,
    [maintenance.veiculo, maintenance.tipo_servico, maintenance.quilometragem, maintenance.observacoes, idMaintenance, maintenance.usuario_id]
  );

  return result.affectedRows;
};

exports.delete = async (idMaintenance, usuario_id) => {
  const sql = 'DELETE FROM manutencoes WHERE id = ? and usuario_id = ?';

  const [result] = await db.query(sql, [idMaintenance, usuario_id]);

  return result.affectedRows;
};