if(document.querySelector('.dropdown-select_furniture')){

    let dropdown_furniture = document.querySelector('.dropdown-select_furniture');
    let dropdownOption_furniture = document.querySelector('.dropdown-option_furniture');
    let option_furniture = dropdownOption_furniture.querySelectorAll('.option')
    let option_array_furniture = Array.prototype.slice.call(option_furniture);





    dropdown_furniture.addEventListener('click', function() {
        dropdown_furniture.classList.toggle('dropdown-select_active');
        dropdownOption_furniture.style.visibility = (dropdownOption_furniture.style.visibility == 'visible') ? 'hidden' : 'visible';
    });



    option_array_furniture.forEach(function(elem, item){
        let text = elem.querySelector('.option__title');                // name of option element
        let option = elem.querySelector('.option__inner');              // control element
        let minus = option.querySelector('.option__item_circle_minus'); // minus button
        let number = option.querySelector('.option__item_number');      // control number that user inputs
        let plus = option.querySelector('.option__item_circle_plus');   // plus button
        
        minus_unactive(number, minus);


        plus.addEventListener('click', function(){
            let tmp = Number(number.innerHTML);
            number.innerHTML = tmp + Number('1');
            minus_unactive(number, minus);
            get_sum(number.innerHTML, text.innerHTML);        
        });
        
        minus.addEventListener('click', function(){
            if(Number(number.innerHTML) > 0){
                let tmp = Number(number.innerHTML);
                number.innerHTML = tmp - Number('1');
                minus_unactive(number, minus);
                get_sum(number.innerHTML, text.innerHTML);
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


    let bedroom_num = document.querySelector('.bedroom-num');
    let bedroom_text = document.querySelector('.bedroom-text');
    let bed_num = document.querySelector('.bed-num');
    let bed_text = document.querySelector('.bed-text');
    let bathroom_num = document.querySelector('.bathroom-num');
    let bathroom_text = document.querySelector('.bathroom-text');


    function get_sum(num, title){

        

        titles = {
            'спальни' : ['спальня, ', 'спальни, ', 'спален, ' ],
            'кровати' : ['кровать, ', 'кровати, ', 'кроватей, '],
            'ванные комнаты' : ['ванная комната ', 'ванные комнаты ', 'ванных комнат ']
        }


        switch(title.toLowerCase()){
            case 'спальни': 
                bedroom_num.innerHTML = num + ' ';
                bedroom_text.innerHTML = titles['спальни'][check_pad(num)];
                break;
            case 'кровати': 
                bed_num.innerHTML = num + ' ';
                bed_text.innerHTML = titles['кровати'][check_pad(num)];
                break;
            case 'ванные комнаты': 
                bathroom_num.innerHTML = num + ' ';
                bathroom_text.innerHTML = titles['ванные комнаты'][check_pad(num)];
                break;
        }

        
    }


    function check_pad(num){
        let lastone = num.toString().split('').pop();
        let tmp;
        if(Number(lastone) == 1) tmp = 0;
            else if (Number(lastone) > 1 && Number(lastone) < 6) tmp = 1;
            else tmp = 2;
        if(Number(num) > 9 && Number(num) < 21){
            tmp = 2;
        }
        return tmp;
    }
}