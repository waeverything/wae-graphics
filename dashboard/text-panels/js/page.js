const bottomInput = document.querySelector('#bottomPanelText');
const showBottom = document.querySelector('#showBottom');

const leftInput = document.querySelector('#leftPanelText');
const rightInput = document.querySelector('#rightPanelText');
const showLeft = document.querySelector('#showLeft');
const showRight = document.querySelector('#showRight');
const showLR = document.querySelector('#showLR');

showBottom.onclick = () => {
  nodecg.sendMessage('bottomMessage', bottomInput.value)
    .catch(error => {
      console.error(error);
    });
};
showLeft.onclick = () => {
  nodecg.sendMessage('leftMessage', leftInput.value)
    .catch(error => {
      console.error(error);
    });
};
showRight.onclick = () => {
  nodecg.sendMessage('rightMessage', rightInput.value)
    .catch(error => {
      console.error(error);
    });
};
showLR.onclick = () => {
  nodecg.sendMessage('leftMessage', leftInput.value)
    .catch(error => {
      console.error(error);
    });
  nodecg.sendMessage('rightMessage', rightInput.value)
    .catch(error => {
      console.error(error);
    });
};
