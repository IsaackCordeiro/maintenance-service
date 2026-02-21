const maintenanceDao = require ('../dao/maintenanceDao');

exports.create = async (maintenance) => {
    if (!maintenance.isValid()){
      throw new Error('Dados incompletos para a manutenção. Veículo e tipo de serviço são obrigatórios');
    }

    const insertedId = await maintenanceDao.create(maintenance);
    return insertedId;
};

exports.findAll = async (usuario_id) => {
  return await maintenanceDao.findAll(usuario_id);
};

exports.
findById = async (idMaintenance, usuario_id) => {
  const maintenance = await maintenanceDao.findById(idMaintenance, usuario_id);
  if(!maintenance){
    throw new Error('Manutenção não encontrada ou acesso negado.');
  }
  return maintenance;
};

exports.update = async (idMaintenance, updatedMaintenance) => {
  if(!updatedMaintenance.isValid()){
    throw new Error('Dados incompletos para a atualização.');
  }

  const affectedRows = await maintenanceDao.update(idMaintenance, updatedMaintenance);

  if(affectedRows == 0) {
    throw new Error ('Manutenção não encontrada ou acesso negado para edição');
  }

  return affectedRows;
};

exports.delete = async (idMaintenance, usuario_id) => {
  const affectedRows = await maintenanceDao.delete(idMaintenance, usuario_id);

  if (affectedRows == 0) {
    throw new Error('Manutenção não encontrada ou acesso negado para exclusão');
  }

  return affectedRows;
};