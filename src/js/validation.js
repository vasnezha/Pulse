
    //Валидация 
    function valideForms(form) {
        $(form).validate({
            //rulse - позволяет настраивать каждое отдельное поле под определенное правило
            rulse: {
                name: "required",
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: "Пожалуйста, введиде свое имя",
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                    required: "Пожалуйста, введиде свою почту",
                    email: "Неправильно введен адрес почты"
                }
              }
    
        });
    }

    valideForms('#consultation-form');
    valideForms('#consultation form');
    valideForms('#order form');


    $('input[name=phone]').mask("+7 (999) 999-99-99");