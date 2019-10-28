import RateButton from './rate-button';

document.addEventListener('DOMContentLoaded', () => {
  const rateButtonLabel = document.querySelectorAll('.js-rate-button');
  rateButtonLabel.forEach((val) => new RateButton(val));
});
