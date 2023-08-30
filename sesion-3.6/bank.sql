-- Personalizar la presentación en sqlite
-- .headers on
-- .mode column

CREATE TABLE accounts(
    id INTEGER PRIMARY KEY,
    account_numbre VARCHAR (16) NOT NULL UNIQUE,
    amount FLOAT NOT NULL CHECK(amount>=0)
);

INSERT INTO accounts Values(1,'1298436728374372',500);
INSERT INTO accounts Values(2,'1298335722376753',1000);


--¿Cómo la cuenta 1 le puede transferir $200 a la cuenta 2?
--Se recupera la información de la cuenta 1

--Transaction: Es una o más instrucciones de SQL que se ejecutan en una sola operación.
--Las transacciones siguen el comportamiento de ACID
BEGIN TRANSACTION; --a partir de este momento se define la transacción
--Es decir, todas las instrucciones siguientes formarán parte de la transacción
SELECT * FROM accounts WHERE id = 1;

--Se descuenta el dinero de la cuenta 1
UPDATE accounts SET amount = amount - 200 WHERE id = 1;

--Agregar el dinero a la cuenta 2
UPDATE accounts SET amount = amount + 200 WHERE id = 2;

--La cuenta 2 tendría un saldo de $1200 y la cuenta 1 tendría $300
--Si se tuviera problema con las operaciones

--Para rechazar los cambios se utiliza
ROLLBACK;

--Para confirmar los cambios se utiliza
COMMIT;

-- Las base de datos relacionales se basan en ACID
-- Atomicity: En una transacción se ejecutan todas las instrucciones o no se ejecuta ninguna
-- Consistency: Los datos siempre están actualizados
-- Isolation: Las transacciones no se afectan entre sí
-- Durability: Las transacciones siempre terminan en un estado válido


-- Las bases de datos no sql se basan en BASE
--Basically Available
--Soft state
--Eventually consistant



