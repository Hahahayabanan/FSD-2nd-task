let dropdown_guests = document.querySelector('.dropdown-select_guests');
let dropdownOption_guests = document.querySelector('.dropdown-option_guests');
let option_guests = dropdownOption_guests.querySelectorAll('.option')
let option_array_guests = Array.prototype.slice.call(option_guests);
let summ = 0;

dropdown_guests.addEventListener('click', function() {
    dropdown_guests.classList.toggle('dropdown-select_active');
    dropdownOption_guests.style.visibility = (dropdownOption_guests.style.visibility == 'visible') ? 'hidden' : 'visible';
});




option_array_guests.forEach(function(elem, item){
    let text = elem.querySelector('.option__title')                 // name of option element
    let option = elem.querySelector('.option__inner')               // control element
    let minus = option.querySelector('.option__item_circle_minus')  // minus button
    let number = option.querySelector('.option__item_number')       // control number that user inputs
    let plus = option.querySelector('.option__item_circle_plus')    // plus button
    
    minus_unactive(number, minus);

    plus.addEventListener('click', function(){
        let tmp = Number(number.innerHTML);
        number.innerHTML = tmp + Number('1');
        minus_unactive(number, minus);
        get_sum(number.innerHTML, text.innerHTML, '+');
    });
    
    minus.addEventListener('click', function(){
        if(Number(number.innerHTML) > 0){
            let tmp = Number(number.innerHTML);
            number.innerHTML = tmp - Number('1');
            minus_unactive(number, minus);
            get_sum(number.innerHTML, text.innerHTML, '-');
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





let guests_num = document.querySelector('.guests-num');
let guests_text = document.querySelector('.guests-text');
let baby_num = document.querySelector('.baby-num');
let baby_text = document.querySelector('.baby-text');



function get_sum(num, title, sign){
    
    titles = {
        'гостей' : ['гость', 'гостя', 'гостей' ],
        'младенцев' : ['младенец', 'младенца', 'младенцев'],
    }

    if(title.toLowerCase() == 'младенцы'){
        baby_num.innerHTML = ', ' + num + ' ';
        baby_text.innerHTML = titles['младенцев'][check_pad(num)];
    }else{
        if(sign == '+') summ += Number(1);
        if(sign == '-') summ -= Number(1);
        
        guests_num.innerHTML = summ + ' ';
        guests_text.innerHTML = titles['гостей'][check_pad(summ)];
    }

    
}


function check_pad(num){
    let lastone = num.toString().split('').pop();
    let tmp;
    if(Number(lastone) == 1) tmp = 0;
        else if (Number(lastone) > 1 && Number(lastone) < 5) tmp = 1;
        else tmp = 2;
    if(Number(num) > 9 && Number(num) < 21){
        tmp = 2;
    }
    return tmp;
}

