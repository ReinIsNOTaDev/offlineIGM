# offlineIGM
Idle Game Maker, offline. Just the way it was(n't) intended.
## What?
IGM normally runs on `orteil.dashnet.net/igm/`, but it's based on html/css/js, so in theory you could run it offline if you had the files. These are the files.

Included are all of the needed files to run IGM, it's guide/documentation, and it's preview game Bunny Clicker. NOT Included are the server.php that is used (by IGM atleast) to fetch websites, though there is a replacement server in lib/server.js
## Changes
- Reworked the fetch logic completely. There's now an (optional) proxy server you can launch through node.js, which works for just about everything (except local files, but I made it so it doesn't handle that)
## Issues
- (if you use it with the proxy server) There are no issues. Yep. None.
- If you don't use it with the proxy server, you lose access to websites like pastebin that didn't setup CORS/put an allowlist on CORS (which likely won't include localhost, lol)
- If you use it by opening the index.html file, you lose access preview/hosted games (though that's next up on my todo list)
## How to run
Clone this repo. Run it by either opening index.html (slighly restricted access), launching an http server (slightly more access), and/or launching the accompanying proxy server (slightly more access again).

For an http server, I personally use the npm package http-server, and for the proxy server I coded it on node.js, and for ease of use I use the npm package concurrently to launch the main and proxy servers... concurrently.
