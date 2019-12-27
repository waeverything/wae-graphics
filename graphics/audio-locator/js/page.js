nodecg.listenFor('audioLocator', (value, ack) => {
  nodecg.playSound("sinewave");
});
