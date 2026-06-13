# offlineIGM
Idle Game Maker, offline. Just the way it was(n't) intended.
## What?
IGM normally runs on `orteil.dashnet.net/igm/`, but it's based on html/css/js, so in theory you could run it offline if you had the files. These are the files.

Included are all of the needed files to run IGM, it's guide/documentation, and it's preview game Bunny Clicker.

NOT Included are the server.php that is used (by IGM atleast) to fetch websites
## Branches
We have three branches:
- `orig` for the source code written by orteil
- `lock` for feature lock and compatibility fixes
- `main` for active development, mostly bug fixes
- `feat` for additional features, not guaranteed
This is NOT planned to be a continuation or future version of IGM. This is just a few days of tinkering and hitting-head-at-wall that may turn into a long-term project.
## Changes
### `lock`
- Changed the ajax function to not depend on server.php we can't access (by changing it from fetching a 'server.php?q=fetch|url' to just fetching 'url')
- Changed IGM handling when it detects it's loaded using a file (eg. giving up on fetching stylesheets that aren't appended .css, using a function called LoadScript, *the function used to load javascript files*, for the text file?? Yeah...)
### `main`
- All changes made on the `lock` branch
- Bugfix: Allow version number to be a float
- Bugfix: `req:` now works on Achievements and Shinies
- Bugfix: Upgrades (and Achievements!) can now be lost via on tick effects
- Bugfix: Capital Y is now a valid character for thingKeys
- Bugfix: Parenthesis in background images doesn't cause error
### `feat`
- Fancier URL variables, and more options for file hosters
## Issues
- CORS ): (You can't access /bunnyclicker through just opening the index.html, or any website who doesn't have an "access-control-allow-origin" header set to "*", which includes Pastebin, who just didn't implement it at all lol)
## How to run
Clone this repo. Run it by either opening index.html or running any https server of your choosing. (probably)
