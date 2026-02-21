const maintenanceService = require ('../services/maintenanceService');
const Maintenance = require ('../model/MaintenanceModel');

exports.create = async (req, res) => {
  try {
    const usuario_id = req.user.id;

    const {veiculo, tipo_servico, quilometragem, observacoes} = req.body;

    const novaManutencao = new Maintenance({
      usuario_id,
      veiculo,
      tipo_servico,
      quilometragem,
      observacoes
    });

    const id = await maintenanceService.create(novaManutencao);
    
    res.status(201).json({mensagem: 'Manutenção registrada com sucesso!', id});
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
};

exports.findAll = async  (req, res) => {
  try {
    const manutencoesList = await maintenanceService.findAll(req.user.id);

    res.status(200).json(manutencoesList);
  } catch (error) {
    res.status(500).json({erro: error.message});
  }
};

exports.findById = async (req, res) => {
  try {
    const maintenance = await maintenanceService.findById (req.params.id, req.user.id);
    res.status(200).json(maintenance);
  } catch (error) {
    es.status(404).json({erro: error.message});
  }
};

exports.update = async (req, res) => {
  try {
    const updatedMaintenance = new Maintenance({
      ...req.body,
      usuario_id: req.user.id
    });

    await maintenanceService.update(req.params.id, updatedMaintenance);

    res.status(200).json({mensagem: 'Manutenção atualizada com sucesso!'});
  } catch (error) {
    res.status(400).json({erro: error.message});
  }
};

exports.delete = async (req, res) => {
  try {
    await maintenanceService.delete(req.params.id, req.user.id);
    res.status(200).json({mensagem: 'Manutenção excluída com sucesso!'});
  } catch (error) {
    res.status(400).json({erro: error.message});
  }
};