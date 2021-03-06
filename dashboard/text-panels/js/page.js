//Input fields
const bottomInput = document.querySelector('#bottomPanelText');

//Buttons
const showBottom5 = document.querySelector('#showBottom5');
const showBottom10 = document.querySelector('#showBottom10');

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

  if (newValue != null) {
    let array = newValue.split('§');
    let inputs = document.getElementsByClassName('input-left');

    for (let i in inputs) {
      inputs[i].value = array[i];
    }
  }
});

rightReplicant.on('change', (newValue, oldValue) => {
  if (newValue != null) {
    let array = newValue.split('§');
    let inputs = document.getElementsByClassName('input-right');

    for (let i in inputs) {
      inputs[i].value = array[i];
    }
  }
});

//Button clicks
showBottom5.onclick = () => {
  bottomReplicant.value = bottomInput.value;

  nodecg.sendMessage('bottomPanelTime', 5)
  .catch(error => {
    console.error(error);
  });

  nodecg.sendMessage('bottomMessage', bottomInput.value)
    .catch(error => {
      console.error(error);
    });
};

showBottom10.onclick = () => {
  bottomReplicant.value = bottomInput.value;

  nodecg.sendMessage('bottomPanelTime', 10)
  .catch(error => {
    console.error(error);
  });

  nodecg.sendMessage('bottomMessage', bottomInput.value)
    .catch(error => {
      console.error(error);
    });
};

showLeft.onclick = () => {
  sendLeft();
};
showRight.onclick = () => {
  sendRight();
};
showLR.onclick = () => {
  sendLeft();
  sendRight();
};

function sendLeft() {
  let inputs = document.getElementsByClassName('input-left'),
    leftInputText = [].map.call(inputs, function(input) {
      return input.value;
    }).join('§');

  leftReplicant.value = leftInputText;

  nodecg.sendMessage('leftMessage', leftInputText)
    .catch(error => {
      console.error(error);
    });
}

function sendRight() {
  let inputs = document.getElementsByClassName('input-right'),
    rightInputText = [].map.call(inputs, function(input) {
      return input.value;
    }).join('§');

  rightReplicant.value = rightInputText;

  nodecg.sendMessage('rightMessage', rightInputText)
    .catch(error => {
      console.error(error);
    });
}
