import DropdownCalendar from '../dropdown-calendar/dropdown-calendar.js';


const dropdownCalendar = document.querySelectorAll('.js-dropdown-date');

if(dropdownCalendar){
  const dropdownCalendarArray = Array.from(dropdownCalendar, (val)=>{
    let inputs = [];
    inputs.push(val.querySelector('.dropdown-date__input-start-date'));
    inputs.push(val.querySelector('.dropdown-date__input-end-date'));
    return new DropdownCalendar(val, inputs);
  });
}