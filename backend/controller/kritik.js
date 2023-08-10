const db = require('../db');

//get data admin
exports.getSaran = (req, res) => {
    db.query('SELECT * FROM kritik', (err, rows) => {
        if (err) throw err;
        res.status(200).json({
            message: 'Data get Saran',
            data: rows
        });
    });
}

exports.getSaranById = (req, res) => {
    const saranId = req.params.id;
    db.query(`SELECT * FROM kritik WHERE id = ${saranId}`, (err, rows) => {
        if (err) throw err;
        res.status(200).json({
            message: 'Data get admin by id',
            data: rows
        });
    });
}

exports.postSaran = (req, res) => {
    const { name, kritik, saran } = req.body;
    const sql = `INSERT INTO kritik (name, kritik, saran) VALUES ('${name}', '${kritik}', '${saran}')`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.status(201).json({
            message: 'Data post admin',
            data: result
        });
    }
    );
}

exports.putSaran = (req, res) => {
    const {id} = req.params;
    const { name, kritik, saran } = req.body;
    db.query(`UPDATE kritik SET name = '${name}', kritik = '${kritik}', saran = '${saran}' WHERE id = ${id}`, (err, result) => {
        if (err) throw err;
        res.status(200).json({
            message: 'Data put Saran',
            data: result
        });
    });
}

//delete data admin
exports.deleteSaran = (req, res) => {
    const saranId = req.params.id;
    const sql = `DELETE FROM kritik WHERE id = ${saranId}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.status(200).json({
            message: 'Data delete Saran',
            data: result
        });
    });
}