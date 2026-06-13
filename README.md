# offlineIGM
Idle Game Maker, offline. Just the way it was(n't) intended.
## What?
IGM normally runs on `orteil.dashnet.net/igm/`, but it's based on html/css/js, so in theory you could run it offline if you had the files. These are the files.

Included are all of the needed files to run IGM, it's guide/documentation, and it's preview game Bunny Clicker.

NOT Included are the server.php that is used (by IGM atleast) to fetch websites
## Changes
- Compatibility: Changed the ajax function to not depend on server.php we can't access (by changing it from fetching a 'server.php?q=fetch|url' to just fetching 'url')
- Compatibility: Changed IGM handling when it detects it's loaded using a file (eg. giving up on fetching stylesheets that aren't appended .css, using a function called LoadScript, *the function used to load javascript files*, for the text file?? Yeah...)
- Bugfix: Allow version number to be a float
- Bugfix: `req:` now works on Achievements and Shinies
- Bugfix: Upgrades (and Achievements!) can now be lost via on tick effects
- Bugfix: Capital Y is now a valid character for thingKeys
- Fancier URL variables, and more options for file hosters
## Issues
- CORS ): (You can't access /bunnyclicker through just opening the index.html, or any website who doesn't have an "access-control-allow-origin" header set to "*", which includes Pastebin, who just didn't implement it at all lol)
## How to run
Clone this repo. Run it by either opening index.html or running any https server of your choosing. (probably)
