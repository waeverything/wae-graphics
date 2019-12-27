const playButton = document.querySelector('#audioLocator');

playButton.onclick = () => {
  nodecg.sendMessage('audioLocator', true)
    .catch(error => {
      console.error(error);
    });
};
