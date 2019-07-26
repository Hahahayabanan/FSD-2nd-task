if(document.querySelector('.dropdown_guests')!= null){

    let dropdown_guests_list = document.querySelectorAll('.dropdown_guests');
    let dropdown_guests_all = Array.prototype.slice.call(dropdown_guests_list);

dropdown_guests_all.forEach(function(dropdown_guests,item){

    
    let dropdownOption_guests = dropdown_guests.querySelector('.dropdown-option_guests');
    let option_button_clear = dropdown_guests.querySelector('.option-button__clear');
    let option_button_apply = dropdown_guests.querySelector('.option-button__apply');
    let option_guests = dropdown_guests.querySelectorAll('.option')
    let option_array_guests = Array.prototype.slice.call(option_guests);


    let guests_num = dropdown_guests.querySelector('.guests-num');
    let guests_text = dropdown_guests.querySelector('.guests-text');
    let baby_num = dropdown_guests.querySelector('.baby-num');
    let baby_text = dropdown_guests.querySelector('.baby-text');


    let summ = 0;

    dropdown_guests.querySelector('.dropdown-select_guests').addEventListener('click', function() {
        // dropdown_guests.classList.toggle('dropdown-select_active');
        dropdown_guests.querySelector('.dropdown-select_guests').classList.toggle('dropdown-select_active');
        
        dropdownOption_guests.style.visibility = (dropdownOption_guests.style.visibility == 'visible') ? 'hidden' : 'visible';
        
        if(guests_num.innerHTML > 0 || baby_num.innerHTML) option_button_clear.style.visibility = (option_button_clear.style.visibility == 'visible') ? 'hidden' : 'visible';
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
            option_button_clear.style.visibility = 'visible';
        });
        
        minus.addEventListener('click', function(){
            if(Number(number.innerHTML) > 0){
                let tmp = Number(number.innerHTML);
                number.innerHTML = tmp - Number('1');
                minus_unactive(number, minus);
                get_sum(number.innerHTML, text.innerHTML, '-');
            }
        });

        option_button_clear.addEventListener('click', function(){
            clear_all();
            option_button_clear.style.visibility = 'hidden';
        });
        option_button_apply.addEventListener('click', function(){
            dropdownOption_guests.style.visibility = 'hidden';
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



    function clear_all(){
        option_array_guests.forEach(function(elem, item){
            let option = elem.querySelector('.option__inner')               // control element
            let number = option.querySelector('.option__item_number')

            number.innerHTML = 0;
            
        });

        summ = 0;

        guests_num.innerHTML = 'Cколько '
        guests_text.innerHTML = 'гостей'
        baby_num.innerHTML = '';
        baby_text.innerHTML = '';
        
    }




});
}