$(document).foundation()

$(document).ready(function () {

    $('input.celular').mask('(00) 00000-0000');

    /* FORM SUBMIT */
    $(document)
        .ajaxStart(function () {
            $(".submit .normal").hide();
            $(".submit .ok").hide();
            $(".submit .load-ajax").show();
        })
        .ajaxStop(function () {
            $(".submit .load-ajax").hide();
            $(".submit .ok").show();
        });

    var validator = $("#cadastro-newsletter").validate({
        rules: {
            name: {
                required: true
            },
            phone: {
                required: true
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Por favor preencher este campo"
            },
            phone: {
                required: "Por favor preencher este campo"
            },
            email: {
                required: "Por favor preencher este campo",
                email: "Por favor preencher com email"
            }
        },
        submitHandler: function (form) {
            $("#cadastro-newsletter input[type=submit]").attr(
                "disabled",
                "disabled"
            );
            $('input.celular').unmask();
			const url = 'https://secure-woodland-24244.herokuapp.com/no/cadastrarProspecto'
			$.ajax({
                type: "POST",
                url,
                dataType: "json",
                data: $(form).serialize(),
                success: function (result) {
					console.log('ajax', result)
                    if (result.ok) {
                        $("#cadastro-newsletter .form-fields").fadeOut(400, function () {
                            $("#cadastro-newsletter .form-success").fadeIn();
                        });
                        $("#cadastro-newsletter").closest("form").find("input, textarea").val("");
                        validator.resetForm();
                        $('input.celular').mask('(00) 00000-0000');
                    } else {
                        $('input.celular').mask('(00) 00000-0000');
                        $("#cadastro-newsletter h5.mensagem").html(result.mensagem);
                    }
                }
            });
        }
    });

    var validatorCover = $("#cadastro-newsletter-cover").validate({
        rules: {
            name: {
                required: true
            },
            phone: {
                required: true
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Por favor preencher este campo"
            },
            phone: {
                required: "Por favor preencher este campo"
            },
            email: {
                required: "Por favor preencher este campo",
                email: "Por favor preencher com email"
            }
        },
        submitHandler: function (form) {
            $("#cadastro-newsletter-cover input[type=submit]").attr(
                "disabled",
                "disabled"
            );
            $('input.celular').unmask();
            $.ajax({
                type: "POST",
                url: "https://api.bnutri.com.br/lead/createToKort",
                dataType: "json",
                data: $(form).serialize(),
                success: function (result) {
                    if (result.status) {
                        $("#cadastro-newsletter-cover .form-fields").fadeOut(400, function () {
                            $("#cadastro-newsletter-cover .form-success").fadeIn();
                        });
                        $("#cadastro-newsletter-cover").closest("form").find("input, textarea").val("");
                        validatorCover.resetForm();
                        $('input.celular').mask('(00) 00000-0000');
                    } else {
                        $('input.celular').mask('(00) 00000-0000');
                        $("#cadastro-newsletter-cover h5.mensagem").html(result.message);
                    }
                }
            });
        }
    });


});
