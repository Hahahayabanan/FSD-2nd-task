const checkboxesList = document.querySelectorAll('.expandable-checkbox');

if(checkboxesList){
    const checkboxes = Array.from(checkboxesList, (val)=>{
      
      const dropdownOption_exp = val.querySelector('.expandable-checkbox__option');
      const keyboard_arrow_exp = val.querySelector('.expandable-checkbox__keyboard-arrow');
      const materialIcons =  keyboard_arrow_exp.querySelector('.material-icons');
      val.addEventListener('click', function() {
        dropdownOption_exp.classList.toggle('expandable-checkbox__option_unvisible');
        materialIcons.innerHTML = (materialIcons.innerHTML == 'keyboard_arrow_down' ) ? 'keyboard_arrow_up' : 'keyboard_arrow_down';
      });
  });
}

