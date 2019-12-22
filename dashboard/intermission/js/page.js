const textInput = document.querySelector('#textInput');
const submit = document.querySelector('#submit');

const textReplicant = nodecg.Replicant('intermission-text');

textReplicant.on('change', (newValue, oldValue) => {
  // The value of the Replicant has changed somewhere in NodeCG,
  // this could be another dashboard panel, a server initiated change,
  // or the doing of another user accessing your dashboard panel.
  nameInput.value = newValue;
});

submit.onclick = () => {
  textReplicant.value = nameInput.value;
};
