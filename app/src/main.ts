import express from 'express'

const app = express()
const port = 80

app.all('/*', (req, res) => {
    const data = {
        method: req.method,
        path: req.path,
        protocol: req.protocol,
        host: req.get('host'),
        ip: req.ip,
        headers: req.headers,
        query: req.query,
        body: req.body,
        cookies: req.cookies,
        params: req.params
    }
    res.send(data)
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))