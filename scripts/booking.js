$(document).ready(function () {
    $(".select2").select2();
    ClearValidation();
    ClearText();

   
    $("#lblHeader").html("JADWAL PERJANJIAN");
    $("#lblSubHeader").html("Daftar segera sebelum jadwal penuh");
    //$("#content1").hide();
    $("#content2").hide();
    $("#content3").hide();
    $("#Confirmation").hide();
})

function ClearValidation() {
    $("#nameVal").hide();
    $("#WAVal").hide();
    $("#numberPersonVal").hide();
    $("#numberClothesVal").hide();
    $("#photoThemeVal").hide();
    $("#datePickerVal").hide();
    $("#timePickerVal").hide();
    $("#durationVal").hide();
}


function ClearText() {
    document.getElementById("nameInput").value = '';
    document.getElementById("waNumberInput").value = '';
    $("#ddlNumberofPersonInput").val("").trigger('change');
    $("#ddlNumberofClothesInput").val("").trigger('change');
    document.getElementById("datePickerInput").value = '';
    document.getElementById("timePickerInput").value = '';
    $("#ddlPhotoThemeInput").val("").trigger('change');
    document.getElementById("additionalNoteInput").value = '';
}

$('#btnContinue').click(function () {

    if ($('#nameInput').val() == null || $('#nameInput').val() == '') {
        $("#nameVal").show();
        $("#nameVal").html("Silahkan isi nama.");
    }
    else if ($('#waNumberInput').val() == null || $('#waNumberInput').val() == '') {
        $("#WAVal").show();
        $("#WAVal").html("Silahkan isi nomor WA.");
    }
    else if (document.getElementById("ddlNumberofPersonInput").value == null || document.getElementById("ddlNumberofPersonInput").value == '') {
        $("#numberPersonVal").show();
        $("#numberPersonVal").html("Silahkan isi jumlah orang.");
    }
    else if (document.getElementById("ddlNumberofClothesInput").value == null || document.getElementById("ddlNumberofClothesInput").value == '') {
        $("#numberClothesVal").show();
        $("#numberClothesVal").html("Silahkan isi jumlah tema baju.");
    }
    else if (document.getElementById("ddlPhotoThemeInput").value == null || document.getElementById("ddlPhotoThemeInput").value == '') {
        $("#photoThemeVal").show();
        $("#photoThemeVal").html("Silahkan isi tema");
    } else {
        $("#content1").hide();
        $("#content2").show();
    }
	
	$("#ddlDurationInput").empty();
	if (document.getElementById("ddlNumberofPersonInput").value == "16-30" || document.getElementById("ddlNumberofClothesInput").value == "3+")
	{
		$("#ddlDurationInput").append($("<option selected />").val("").text("--Pilih durasi--")); 
		$("#ddlDurationInput").append($("<option />").val("2").text("2 Jam")); 
		$("#ddlDurationInput").append($("<option />").val("3").text("3 Jam")); 
		$("#ddlDurationInput").append($("<option />").val("4").text("4 Jam")); 
		$("#ddlDurationInput").append($("<option />").val("5").text("5 Jam")); 
		$("#ddlDurationInput").append($("<option />").val("6").text("6 Jam")); 
		$("#lblDescDuration").html("Anda tidak bisa memilih sesi 1 jam foto karena jumlah orang lebih dari 15 atau jumlah tema baju lebih dari 2. Karena durasi 1 jam tidak akan cukup.");
	}
	else{		  
		$("#ddlDurationInput").append($("<option selected />").val("").text("--Pilih durasi--")); 		
		$("#ddlDurationInput").append($("<option />").val("1").text("1 Jam")); 
		$("#ddlDurationInput").append($("<option />").val("2").text("2 Jam")); 
		$("#ddlDurationInput").append($("<option />").val("3").text("3 Jam")); 
		$("#ddlDurationInput").append($("<option  />").val("4").text("4 Jam")); 
		$("#ddlDurationInput").append($("<option />").val("5").text("5 Jam")); 
		$("#ddlDurationInput").append($("<option />").val("6").text("6 Jam")); 
		$("#lblDescDuration").html("");
	} 
})

$('#btnBack').click(function () {
    $("#content2").hide();
    $("#content1").show();
})

var ImageUpload ="";

function Image_Upload(event) {  
    var file = event.target.files[0];
    ImageUpload = file.name; 
} 