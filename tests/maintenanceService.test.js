const maintenanceService = require('../services/maintenanceService');
const maintenanceDao = require('../dao/maintenanceDao');
const Maintenance = require('../model/MaintenanceModel');

jest.mock('../dao/maintenanceDao');

describe('Maintenance Service - Testes Unitários', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test ('Deve salvar a manutenção com sucesso quando os dados forem válidos', async () => {
    const mockMaintenance = new Maintenance ({
      usuario_id: 1,
      veiculo: 'VW Gol G6 1.0',
      tipo_servico: 'Troca de Oleo',
      quilometragem: 105000,
      observacoe: 'Tudo ok'
    });

    maintenanceDao.create.mockResolvedValue(99);

    const resultadoId = await maintenanceService.create(mockMaintenance);

    expect(resultadoId).toBe(99);
    expect(maintenanceDao.create).toHaveBeenCalledTimes(1);
    expect(maintenanceDao.create).toHaveBeenCalledWith(mockMaintenance);
  });

  test ('Deve estourar um erro se faltarem atributos obrigatórios', async () => {
    const mockInvalido = new Maintenance ({
      usuario_id: 1,
      veiculo: 'VW Gol G6 1.0'
    });

    await expect(maintenanceService.create(mockInvalido)).rejects.toThrow(
      'Dados incompletos para a manutenção. Veículo e tipo de serviço são obrigatórios'
    );

    expect(maintenanceDao.create).not.toHaveBeenCalled();
  });
});