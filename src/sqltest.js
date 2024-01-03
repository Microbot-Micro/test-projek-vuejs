const query1 = `SELECT DISTINCT  item FROM asset`

const query2 = `
SELECT 
  u.user_id,
  GROUP_CONCAT(a.item) AS asset
FROM USER u
JOIN asset a ON u.user_id = a.user_id
GROUP BY u.user_id;
`