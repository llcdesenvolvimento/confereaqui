-- Create table to store blocked CPF requests (LGPD removal requests)
CREATE TABLE IF NOT EXISTS cpfs_bloqueados (
  id BIGSERIAL PRIMARY KEY,
  cpf TEXT NOT NULL,
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  created_at TEXT NOT NULL
);
