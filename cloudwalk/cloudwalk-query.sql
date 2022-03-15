CREATE DATABASE cloudwalk;

USE cloudwalk;

CREATE TABLE `clientes` (
    `user_id` INT(20) NOT NULL PRIMARY KEY, 
    `cnpj` VARCHAR(100) NOT NULL,
    `nome_do_cliente` VARCHAR(100)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

# Utilizado date import wizard para importar os dados da tabelas em csv para o MySQL

CREATE TABLE `clientes` (
    `user_id` INT(20) NOT NULL PRIMARY KEY, 
    `status` VARCHAR(100) NOT NULL,
    `data_horario_do_status` DATE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

# Requisito 1 - Criar query com todos os CNPJs, data de compra, e tempo de aprovação

SELECT cnpj, DATE(pending_kyc) AS purchase_date, TIMEDIFF(approved, pending_kyc) AS approved_time
FROM (SELECT c.user_id, c.cnpj, s.data_horario_do_status AS approved, s1.data_horario_do_status AS pending_kyc FROM clientes AS c
INNER JOIN `status` AS s
ON s.user_id = c.user_id AND s.`status` = 'approved'
INNER JOIN `status` AS s1
ON s1.user_id = c.user_id AND s1.`status` = 'pending_kyc') AS `dif`;

# ----------------------------------------------------------------------------------------------------------------------------------------

# Requisito 2 - Criar query com CNPJ, data de compra, e o tempo do cliente com maior tempo de aprovação
SELECT cnpj, DATE(pending_kyc) AS purchase_date, approved_time AS highest_approved_time
FROM (SELECT user_id, cnpj, pending_kyc, TIMEDIFF(approved, pending_kyc) AS approved_time
FROM (SELECT c.user_id, c.cnpj, s.data_horario_do_status AS approved, s1.data_horario_do_status AS pending_kyc FROM clientes AS c
INNER JOIN `status` AS s
ON s.user_id = c.user_id AND s.`status` = 'approved'
INNER JOIN `status` AS s1
ON s1.user_id = c.user_id AND s1.`status` = 'pending_kyc') AS `dif`) AS `max` ORDER BY approved_time DESC LIMIT 1;

-----------------------------------

# Requisito 3 - Criar query com CNPJ, data de compra, e o tempo do cliente com menor tempo de aprovação

SELECT cnpj, DATE(pending_kyc) AS purchase_date, approved_time AS smallest_approved_time
FROM (SELECT user_id, cnpj, pending_kyc, TIMEDIFF(approved, pending_kyc) AS approved_time
FROM (SELECT c.user_id, c.cnpj, s.data_horario_do_status AS approved, s1.data_horario_do_status AS pending_kyc FROM clientes AS c
INNER JOIN `status` AS s
ON s.user_id = c.user_id AND s.`status` = 'approved'
INNER JOIN `status` AS s1
ON s1.user_id = c.user_id AND s1.`status` = 'pending_kyc') AS `dif`) AS `max` ORDER BY approved_time LIMIT 1;

-----------------------------------

# Requisito 4 - Criar query média do tempo de aprovação de todos os clientes

SELECT AVG(approved_time) AS average_approved_time
FROM (SELECT user_id, cnpj, pending_kyc, TIMEDIFF(approved, pending_kyc) AS approved_time
FROM (SELECT c.user_id, c.cnpj, s.data_horario_do_status AS approved, s1.data_horario_do_status AS pending_kyc FROM clientes AS c
INNER JOIN `status` AS s
ON s.user_id = c.user_id AND s.`status` = 'approved'
INNER JOIN `status` AS s1
ON s1.user_id = c.user_id AND s1.`status` = 'pending_kyc') AS `dif`) AS `average`;
