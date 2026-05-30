import { MODULE_ID } from "./constants.js";

Hooks.once("init", () => {
  game.settings.register(MODULE_ID, "flickering", {
    name: "Flickering screen effect.",
    hint: "Flickering effect like an old CRT screen.",
    scope: "client",
    type: Boolean,
    default: false,
    config: true,
    requiresReload: true
  });

  game.settings.register(MODULE_ID, "screenDoor", {
    name: "Screen lines.",
    hint: "Display screen horizontal lines.",
    scope: "client",
    type: Boolean,
    default: false,
    config: true,
    requiresReload: true
  });

  game.settings.register(MODULE_ID, "scanline", {
    name: "Refresh screen effect.",
    hint: "Refresh screen like an old CRT monitor.",
    scope: "client",
    type: Boolean,
    default: true,
    config: true,
    requiresReload: true
  });
});

Hooks.once("ready", () => {
  document.body.classList.add(MODULE_ID);

  if (game.settings.get(MODULE_ID, "scanline")) {
    const scanline = document.createElement("div");
    scanline.classList.add("scanline");
    document.body.appendChild(scanline);
  }

  if (game.settings.get(MODULE_ID, "flickering")) {
    document.body.classList.add("flickering");
  }

  if (game.settings.get(MODULE_ID, "screenDoor")) {
    document.body.classList.add("screen-door");
  }
});
