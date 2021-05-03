const $calc = document.getElementById('calc-main-form');
const $result = document.getElementById('result'); 

$calc.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = new FormData($calc);
  let height = parseInt(form.get('height'), 10);
  let weight = parseInt(form.get('weight'), 10);
  let age = parseInt(form.get('age'), 10);
  let activity = parseFloat(form.get('activityLevel'));

  if (form.get('gender') === 'male') {
    $result.innerHTML = Math.round(((weight * 10) + (height * 6.25) - (age * 5) + 5) *  activity) + ' калорій необхідно споживати щодня';
  } else if (form.get('gender') === 'female') {
    $result.innerHTML = Math.round(((weight * 10) + (height * 6.25) - (age * 5) - 161) *  activity) + ' калорій необхідно споживати щодня';
  }
});