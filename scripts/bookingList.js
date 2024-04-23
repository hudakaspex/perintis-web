$(document).ready(function () {
    var options = {
        format: 'DD MMMM YYYY',
        collapse: false,
        ignoreReadonly: true,
        sideBySide: true,
        widgetPositioning: {
            horizontal: 'auto',
            vertical: 'bottom'
        }
    };

    $('#datePicker').datetimepicker(options);
    $("#datePickerSrcVal").hide();

    $('#datatable').DataTable();

    //Buttons examples
    var table = $('#datatable-buttons').DataTable({
        //lengthChange: false,
        //buttons: ['excel', 'pdf'],
        layout: {
            topStart: {
                buttons: [
                    {
                        extend: 'pdfHtml5',
                        orientation: 'landscape',
                        pageSize: 'LEGAL'
                    }
                ]
            }
        }
    });

    table.buttons().container()
        .appendTo('#datatable-buttons_wrapper .col-md-6:eq(0)'); 
})

var ID = 0;
var getName = [];
var getIdChecked = [];
var getData = '';
var nameBooking; var phonenumber; var numberofperson; var numberofclothes; var theme; var additionalnote; var bookingdate; var bookinghour;
var feestatus = 0; var duration;var imageDataUrl;
function ymActivityPatrolFunction(id, name, phone, numberperson, numberclothes, theme, notes, date, time, fee, duration) {  
	ID = id,
	nameBooking = name,
    bookinghour = hour;
    feestatus = status; 
} 

function Edit(_id, _name, _phone, _numberperson, _numberclothes, _theme, _notes, _date, _time, _fee, _duration, _urlImage){ 
	ID = _id,
	nameBooking = _name;
	phonenumber = _phone;
	numberofperson = _numberperson;
	numberofclothes = _numberclothes;
	theme = _theme;
	additionalnote = _notes;
	bookingdate = _date;
    bookinghour = _time;
    feestatus = _fee; 
	duration = _duration;
	imageDataUrl = _urlImage;
    
	$("#addEditModal").modal('show');
	
    $("#paidOffVal").hide();
    document.getElementById('lblModalTitle').innerHTML = 'Pelunasan Biaya';	
} 

function Delete(_id, _name,_phone, _numberperson, _numberclothes, _theme, _notes, _date, _time, _fee, _duration){  
	ID = _id;
	nameBooking = _name;
	phonenumber = _phone;
	numberofperson = _numberperson;
	numberofclothes = _numberclothes;
	theme = _theme;
	additionalnote = _notes;
	bookingdate = _date;
    bookinghour = _time;
    feestatus = _fee; 
	duration = _duration;
	
    document.getElementById('lblBookedName').innerHTML = _name + ' ?';	
	$("#DeleteModal").modal('show');
}
 
$("#btnEdit").click(function () {
    $("#addEditModal").modal('show');

    $("#paidOffVal").hide();
    document.getElementById('lblModalTitle').innerHTML = 'Pelunasan Biaya';
    $('table #' + ID + ':checked').each(function () { 
        nameBooking = $(this).closest('tr').find('td.row-value-name').text();
        phonenumber = $(this).closest('tr').find('td.row-value-phonenumber').text();
        numberofperson = $(this).closest('tr').find('td.row-value-numberofperson').text();
        numberofclothes = $(this).closest('tr').find('td.row-value-numberofclothes').text();
        theme = $(this).closest('tr').find('td.row-value-theme').text();
        additionalnote = $(this).closest('tr').find('td.row-value-additionalnote').text();
        document.getElementById("DPInput").value = $(this).closest('tr').find('td.row-value-bookingfee').text();
        document.getElementById("paidOffInput").value = $(this).closest('tr').find('td.row-value-paidoff').text();
		duration = $(this).closest('tr').find('td.row-value-duration').text();
        const datearr = $(this).closest('tr').find('td.row-value-datetime').text().split(",");
        bookingdate = Date.parse(datearr[1]);
    });  
}); 