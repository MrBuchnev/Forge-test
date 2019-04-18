$('form').on('submit', function (event) {
    var errorClass = 'errored';
    var successClass = 'success';
    var hiddenClass = 'hidden';
    var visibleClass = 'visible';

    event.preventDefault();

    $('input, select', this).each(function () {
        var input = $(this).removeClass(errorClass).removeClass(successClass);

        if (input.attr('data-required') === 'true') {
            input.addClass(input.val().length > 0 ? successClass : errorClass);
        } else {
            input.addClass(successClass);
        }
    });

    if ($('.' + errorClass, this).length > 0) {
        $('.modal__error').addClass(visibleClass);

        $('.' + errorClass).each(function() {
            $('.modal__error .errored-fields').append('<li class="error-field">' + $(this).attr('id') + '</li>');
        });

        $('.btn__close--error').on('click', function () {
            $('.modal__error').removeClass(visibleClass);
            $('.modal__error .error-field').remove();
            $('.' + errorClass).first().focus();
        });
    } else {
        $('.modal__success').addClass(visibleClass);
        $('.btn__close--success').on('click', function () {
            $('.modal__success').removeClass(visibleClass);
        });
    }
});
