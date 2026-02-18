CREATE TABLE manutencoes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL, 
    veiculo VARCHAR(100) NOT NULL,
    tipo_servico VARCHAR(100) NOT NULL,
    quilometragem INT,
    observacoes TEXT,
    data_registro DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_usuario 
    FOREIGN KEY (usuario_id) 
    REFERENCES usuarios(id) 
    ON DELETE CASCADE 
);