$(document).ready(function () {
    $('#contact').validate({
        debug: true,
        errorClass: 'alert alert-danger',
        errorLabelContainer: '#output-area',
        errorElement: 'div',
        rules: {
            firstName: {
                required: true
            },
            lastName: {
                required: true
            },
            email: {
                email: true,
                required: true
            },
            emailMessage: {
                required: true,
                maxlength: 2000
            }
        },
        messages: {
            firstName: {
                required: 'First name is required.'
            },
            lastName: {
                required: 'Last name is required.'
            },
            email: {
                email: 'Please provide a valid email.',
                required: 'Email is required.'
            },
            emailMessage: {
                required: 'A message is required',
                maxlength: 'Message must be 2000 characters or less.'
            }
        },
        submitHandler: (form) => {
            $('#contact').ajaxSubmit({
                type: 'POST',
                url: $('#contact').attr('action'),
                success: (ajaxOutput) => {
                    $('#output-area').css('display', '')
                    $('#output-area').html(ajaxOutput)

                    if ($('.alert-success') >= 1) {
                        $('#contact')[0].reset()
                    }
                }
            })
        }
    })
})