Hooks.once('ready', function() {
     
  game.settings.register('old-crt-effects', 'flickering', {
    name: game.i18n.localize('OCE.flickering'),
    hint: game.i18n.localize('OCE.flickeringHint'),
    scope: 'client',
    type: Boolean,
    default: false,
    config: true,
    onChange: () => {
      location.reload();
    },
  });
  
  game.settings.register('old-crt-effects', 'screenDoor', {
    name: game.i18n.localize('OCE.screenDoor'),
    hint: game.i18n.localize('OCE.screenDoorHint'),
    scope: 'client',
    type: Boolean,
    default: false,
    config: true,
    onChange: () => {
      location.reload();
    },
  });  
  
  game.settings.register('old-crt-effects', 'scanline', {
    name: game.i18n.localize('OCE.scanline'),
    hint: game.i18n.localize('OCE.scanlineHint'),
    scope: 'client',
    type: Boolean,
    default: true,
    config: true,
    onChange: () => {
      location.reload();
    },
  });
  
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


