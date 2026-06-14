import * as http from 'node:http'

const server = http.createServer(async (req,res) => {
    // dies
    try {
        var urlObj = new URL(`http://${process.env.HOST ?? 'localhost'}${req.url}`);
        var fetchUrl = urlObj.searchParams.get("u");
        if (fetchUrl) {
            console.log(fetchUrl);
            const serverRequest = await fetch(fetchUrl);
            const fetchResponse = await serverRequest.text();
            res.writeHead(200, { 'Content-Type': 'text/plain', 'access-control-allow-origin': '*' });
            res.end(fetchResponse);
        } else {
            res.writeHead(200, { 'Content-Type': 'text/plain', 'access-control-allow-origin': '*' });
            res.end("Pinged!");
        }
    } catch(error) {
        console.error(error)
        res.writeHead(500, { 'Content-Type': 'text/plain', 'access-control-allow-origin': '*' });
        res.end("Internal Error");
    }
});

try {
    server.listen(3000);
} catch(error) {
    console.error(error)
}
