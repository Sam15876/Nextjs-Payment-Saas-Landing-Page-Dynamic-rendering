const fs = require('fs')

export default function handler (req, res) {
    const file = fs.readFileSync('./data/db.json');
    const data = JSON.parse(file)
    const downloads = parseInt(data?.downloads ?? 0)
    res.status(200).json(downloads)
}