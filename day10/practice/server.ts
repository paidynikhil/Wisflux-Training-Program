import http, { Server, IncomingMessage, ServerResponse } from "http"
import os from "os";
import fs from "fs"
import path from "path";
const express = require('express');
const app = express();

// const hostname:string = "127.0.0.1";
// const port: number = 5000;

// const server: Server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/html");
//   //fs module.
//   fs.readFile(path.join(__dirname,'data.txt'), 'utf-8',(err, data) => {
//     if (err) {
//       console.log(err)
//     }
//     fs.writeFile(path.join(__dirname, "note.txt"), data, "utf-8", (err) => {
//       if (err) {
//         console.log(err);
//       }
//       res.end("data is written to a file!");
//     });
//     // res.end(data);
//   })
//   //OS module.
//   let osData = {
//     hostname: os.hostname(),
//     freeMemory: os.freemem(),
//     totalMemory: os.totalmem(),
//     platform: os.platform(),
//     type: os.type(),
//     homedir: os.homedir(),
//   };
//   res.end(`<h3 style="color:green;"> hello from server side</h3>`);

//   // res.end(JSON.stringify(osData));
// })

// server.listen(port, hostname, () => {
//   console.log("server listening on port")
// })
