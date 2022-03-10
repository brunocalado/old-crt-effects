class swffgUIModule {

  constructor() {
    // Random id to prevent collision with other modules;
    this.ID = randomID(24);
  }

  async init() {
    game.settings.register('old-crt-effects', 'flickering', {
      name: game.i18n.localize('SWFFG.flickering'),
      hint: game.i18n.localize('SWFFG.flickeringHint'),
      scope: 'client',
      type: Boolean,
      default: false,
      config: true,
      onChange: () => {
        location.reload();
      },
    });
    game.settings.register('old-crt-effects', 'screenDoor', {
      name: game.i18n.localize('SWFFG.screenDoor'),
      hint: game.i18n.localize('SWFFG.screenDoorHint'),
      scope: 'client',
      type: Boolean,
      default: false,
      config: true,
      onChange: () => {
        location.reload();
      },
    });
    game.settings.register('old-crt-effects', 'scanline', {
      name: game.i18n.localize('SWFFG.scanline'),
      hint: game.i18n.localize('SWFFG.scanlineHint'),
      scope: 'client',
      type: Boolean,
      default: true,
      config: true,
      onChange: () => {
        location.reload();
      },
    });


    //here
  }
}

Hooks.on("ready", () => {
  swffgUIModule.singleton = new swffgUIModule();
  swffgUIModule.singleton.init();
});

Hooks.once('ready', function() {
  if (game.settings.get('old-crt-effects', 'scanline')) {
    const scanline = $('<div>').addClass('scanline');
    $('body').append(scanline);
  }
  if (game.settings.get('old-crt-effects', 'flickering')) {
    $('body').addClass('flickering');
  }
  if (game.settings.get('old-crt-effects', 'screenDoor')) {
    $('body').addClass('screen-door');
  }
});


