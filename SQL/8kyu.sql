-- ======================
-- Opposite number
-- Very simple, given a number, find its opposite.

-- Examples:

-- 1: -1
-- 14: -14
-- -34: 34
-- You will be given a table: opposite, with a column: number. Return a table with a column: res.

SELECT number * -1 AS res
FROM opposite;


-- ======================
-- Multiply

SELECT price * amount AS total
FROM items


-- ======================
-- Even or Odd
-- SQL Notes:
-- You will be given a table, numbers, with one column number.

-- Return a table with a column is_even containing "Even" or "Odd" depending on number column values.

-- numbers table schema
-- number INT
-- output table schema
-- is_even STRING

SELECT number,
    CASE
    WHEN number % 2 = 0 THEN 'Even'
    ELSE 'Odd'
END AS is_even
FROM numbers;