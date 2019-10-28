import TextField from './text-field';

$(() => {
  const $textFields = $('.js-text-field');

  $textFields.each((i, val) => {
    const isMaskedTextField = $(val).hasClass('text-field_masked');
    if (isMaskedTextField) {
      new TextField(val);
    }
  });
});
