import RoomPreview from './room-preview';

$(() => {
  const $rooms = $('.js-room-preview');

  $rooms.each((i, val) => {
    new RoomPreview(val);
  });
});
