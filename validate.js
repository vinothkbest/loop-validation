$('#appointment').on('submit', function(event) {
    $('.input-surname').each(function() {
        $(this).rules("add", 
            {
              text_only: true,
                messages: {
                  text_only: "Please enter valid surname"
                  }
            });
    });
    $('.input-givenname').each(function() {
        $(this).rules("add", 
            {
                required: true,
                text_only: true,
                messages: {
                    required: "Please enter given name",
                    text_only: "Please enter valid given name"
                  }
            });
    });
    $('.input-title').each(function() {
        $(this).rules("add", 
            {
                required: true,
                messages: {
                    required: "Please select title",
                }
            });
    });
    $('.input-passport').each(function() {
        $(this).rules("add", 
            {
                required: true,
                passport: true,
                messages: {
                    required: "Please enter passport number",
                    passport: "Please enter valid passport number"
                }
            });
    });
    $('.input-relation').each(function() {
        $(this).rules("add", 
            {
                required: true,
                messages: {
                    required: "Please select relation",
                }
            });
    });
    
});
