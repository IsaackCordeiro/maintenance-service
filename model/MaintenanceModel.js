class Maintenance {
  constructor({usuario_id, veiculo, tipo_servico, quilometragem, observacoes}){
    this.usuario_id = usuario_id;
    this.veiculo = veiculo;
    this.tipo_servico = tipo_servico;
    this.quilometragem = quilometragem || null;
    this.observacoes = observacoes || '';
    this.data_registro = new Date();
  }

  isValid(){
    return this.usuario_id && this.veiculo && this.tipo_servico;
  }
}

module.exports = Maintenance;