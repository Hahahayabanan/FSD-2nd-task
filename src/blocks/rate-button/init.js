import RateButton from './rate-button';

document.addEventListener('DOMContentLoaded', () => {
  const rateButtons = document.querySelectorAll('.js-rate-button');
  rateButtons.forEach((val) => new RateButton(val));
});
