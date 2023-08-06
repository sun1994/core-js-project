const form = document.querySelector('form');
const results = document.querySelector('#results');
const underWeight = 18.6;
const overWeight = 24.9;
// NormalRange = between 18.6 to 24.9

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Height value ${height} is not correct`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `weight value ${weight} is not correct`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    const guideTxt = checkWeightValue(bmi);
    results.innerHTML = `${bmi} ${guideTxt}`;
  }
});

function checkWeightValue(bmiValue) {
  if (bmiValue < underWeight) {
    return ' : this value is under weight!';
  } else if (bmiValue > overWeight) {
    return ' : this value is over weight!';
  } else {
    return ' ## Congratulations ##';
  }
}
