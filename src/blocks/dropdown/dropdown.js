let dropdown_guests = document.querySelector('.dropdown-select_guests');
let dropdownOption_guests = document.querySelector('.dropdown-option_guests');
let option_guests = document.querySelectorAll('.option_guests')
let option_array_guests = Array.prototype.slice.call(option_guests);
let summ = 0;

dropdown_guests.addEventListener('click', function() {
    dropdown_guests.classList.toggle('dropdown-select_active');
    dropdownOption_guests.style.visibility = (dropdownOption_guests.style.visibility == 'visible') ? 'hidden' : 'visible';
});




option_array_guests.forEach(function(elem, item){
    let text = elem.querySelector('.option')     // name of option element
    let option = elem.querySelector('.option__inner')    // control element
    let minus = option.querySelector('.option__item_circle_minus')  // minus button
    let number = option.querySelector('.option__item_number') // control number that user inputs
    let plus = option.querySelector('.option__item_circle_plus')  // plus button
    
    minus_unactive(number, minus);

    plus.addEventListener('click', function(){
        let tmp = Number(number.innerHTML);
        number.innerHTML = tmp + Number('1');
        minus_unactive(number, minus);
        get_sum('+');        
    });
    
    minus.addEventListener('click', function(){
        if(Number(number.innerHTML) > 0){
            let tmp = Number(number.innerHTML);
            number.innerHTML = tmp - Number('1');
            minus_unactive(number, minus);
            get_sum('-');
        }
    });
});


function minus_unactive(number, minus){
    if(number.innerHTML != 0){
        minus.classList.remove('option__item_circle_unactive');
    }
    if(number.innerHTML == 0){
        minus.classList.add('option__item_circle_unactive');
    }
}

function get_sum(sign){
    if(sign == '+') summ += Number('1');
    if(sign == '-') summ -= Number('1');
    
    let lastone = summ.toString().split('').pop();
    let guest = 'гость';

    
    if(Number(lastone) == 1) guest =' гость'
    else if (Number(lastone) > 1 && Number(lastone) < 6) guest =' гостя'
    else guest =' гостей'

    if(Number(summ) > 9 && Number(summ) < 21){
        guest =' гостей';
    }

    dropdown_guests.innerHTML = summ + guest;
}