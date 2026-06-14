# offlineIGM
Idle Game Maker, offline. Just the way it was(n't) intended.
## What?
IGM normally runs on `orteil.dashnet.net/igm/`, but it's based on html/css/js, so in theory you could run it offline if you had the files. These are the files.

Included are all of the needed files to run IGM, it's guide/documentation, and it's preview game Bunny Clicker. NOT Included are the server.php that is used (by IGM atleast) to fetch websites, though there is a replacement server in lib/server.js
## Changes
- Reworked the fetch logic completely. There's now an (optional) proxy server you can launch through node.js, which works for about everything
## Issues
- There are no issues. Yep. None.
## How to run
Clone this repo. Run it by either opening index.html or running any https server of your choosing. (probably)
