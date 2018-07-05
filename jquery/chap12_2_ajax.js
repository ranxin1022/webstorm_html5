$(function () {


    $('form input[type=button]').click(function () {
        alert('hehe');
        $.ajax({
            type: 'post',
            url: 'test.php',
            data: {
              user : $('form input[type=user]').val(),
              email: $('form input[type=email]').val()
            },
            success: function(response, status, xhr){
                $('#box').html(response);
            }
        });
    });




});