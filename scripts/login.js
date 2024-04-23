$(document).ready(function () {
    $("#UserVal").hide();
    $("#EmailVal").hide();
})

$("#toggle_pwd").click(function () {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var type = $(this).hasClass("fa-eye-slash") ? "text" : "password";
    $("[id*=passwordInput]").attr("type", type);
});

$("#btnSignIn").click(function () {
    $("#loaderModal").modal('show');
	$("#UserVal").hide();
    $("#EmailVal").hide();
    if ($('#userNameInput').val() == '' || $('#userNameInput').val() == null) {
        $("#loaderModal").modal('hide');
		$("#UserVal").show();
        $("#UserVal").html("Silahkan isi nama pengguna."); 
    }
	else if ($('#passwordInput').val() == '' || $('#passwordInput').val() == null){ 
		$("#loaderModal").modal('hide');
		$("#EmailVal").show();
        $("#EmailVal").html("Silahkan isi nama user.");
	}
    else {
		if ($('#userNameInput').val() == 'ezzan' && $('#passwordInput').val() == 'admin'){
			window.location.href = "booking_list.html";
		}
		else {
			$("#loaderModal").modal('hide');
			swal({
				title: 'Alert',
				type: 'error',
				text: 'Nama pengguna atau password salah.',
				showCloseButton: true,
				confirmButtonColor: '#4fa7f3'
			})
		}
        /* $.ajax({
            url: "/Master/DoLogin",
            type: "POST",
            datatype: "json",
            data: {
                userName: $('#userNameInput').val(), password: $('#passwordInput').val()
            },
            success: function (d) {
                console.log(d);
                $("#loaderModal").modal('hide');
                if (d.isSuccess) {
                    window.location.href = "/Master/BookingList";
                }
                else {
                    swal({
                        title: 'Alert',
                        type: 'error',
                        text: d.message,
                        showCloseButton: true,
                        confirmButtonColor: '#4fa7f3'
                    })
                }
            }
        }); */
    }
});
