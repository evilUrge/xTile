# xTile
#### Make your desktop into a console
![xTile screenshot](https://storage.googleapis.com/shell-gems.appspot.com/img/xtilescreen.png)
---
# Archived - Because of [Playnite](https://github.com/JosefNemec/Playnite/)❤️

---

## Motivation
Since I ditched my Playstation in favor of cloud gaming, I needed a small processing unit to act as a console.
So I got myself the [Chuwi Larkbox](https://www.indiegogo.com/projects/chuwi-larkbox-world-s-smallest-4k-mini-pc), A low power single board computer with Intel Celeron CPU and chipset.
Coming with pre-install Windows 10, that OS I haven't really used since Windows Vista.

Everything works great, but the interface is sucky on a big TV and not really compatible with using a gamepad only.
I don't know if you remember this, but along ago there was an alternative "shell" for windows called "Litestep" which replaced windows.exe and supported a vast amount of themes and plugins.

But I didn't want to create a Litestep alternative as it's just too big, instead I went with creating a dedicated game launcher that will support my gamepad as the main controller, will manage to execute binaries, GeForce Now shortcuts (for cloud) and steam's metalinks.

I always wanted to use electron and build my own cross-platform chromium based desktop app, though I'm not a frontend developer - Vuejs is kind of funky.


There's still a lot of work to be done.

---
### TODO:
 - [ ] Make `add new item` prompt functional +nicer UI.
 - [ ] Add Gamepad support for navigation.
 - [ ] Fix electron storage issue.
 - [ ] Add support for steam metalinks.
 - [ ] Add support for GeForceNow games execution.
 - [ ] Change app icon + disabled navbar.
 - [ ] Enable Github action for exec tests and creating a build.
 - [ ] Write E2E& Unittests.

---
### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9080
npm run dev

# build electron application for production
npm run build

# run unit & end-to-end tests
npm test


# lint all JS/Vue component files in `src/`
npm run lint

```

---

_Copyleft - Gilad Maoz_
