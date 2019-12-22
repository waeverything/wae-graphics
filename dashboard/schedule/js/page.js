//Input fields
const bottomInput = document.querySelector('#bottomPanelText');
const leftInput = document.querySelector('#leftPanelText');
const rightInput = document.querySelector('#rightPanelText');

//Buttons
const showBottom = document.querySelector('#showBottom');
const showLeft = document.querySelector('#showLeft');
const showRight = document.querySelector('#showRight');
const showLR = document.querySelector('#showLR');

//Replicants
const bottomReplicant = nodecg.Replicant('bottomTextPanel');
const leftReplicant = nodecg.Replicant('leftTextPanel');
const rightReplicant = nodecg.Replicant('rightTextPanel');

//Check for changes in replicants
bottomReplicant.on('change', (newValue, oldValue) => {
  bottomInput.value = newValue;
});

leftReplicant.on('change', (newValue, oldValue) => {
  leftInput.value = newValue;
});

rightReplicant.on('change', (newValue, oldValue) => {
  rightInput.value = newValue;
});

//Button clicks
showBottom.onclick = () => {
  bottomReplicant.value = bottomInput.value;

  nodecg.sendMessage('bottomMessage', bottomInput.value)
    .catch(error => {
      console.error(error);
    });
};
showLeft.onclick = () => {
  leftReplicant.value = leftInput.value;

  nodecg.sendMessage('leftMessage', leftInput.value)
    .catch(error => {
      console.error(error);
    });
};
showRight.onclick = () => {
  rightReplicant.value = rightInput.value;

  nodecg.sendMessage('rightMessage', rightInput.value)
    .catch(error => {
      console.error(error);
    });
};
showLR.onclick = () => {
  leftReplicant.value = leftInput.value;
  rightReplicant.value = rightInput.value;

  nodecg.sendMessage('leftMessage', leftInput.value)
    .catch(error => {
      console.error(error);
    });
  nodecg.sendMessage('rightMessage', rightInput.value)
    .catch(error => {
      console.error(error);
    });
};
