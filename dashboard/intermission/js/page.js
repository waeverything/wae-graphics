const textInput = document.querySelector('#textInput');
const submit = document.querySelector('#submit');

const textReplicant = nodecg.Replicant('intermission-text');

textReplicant.on('change', (newValue, oldValue) => {
  textInput.value = newValue;
});

submit.onclick = () => {
  textReplicant.value = textInput.value;
};
