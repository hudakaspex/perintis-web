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

    var hourOptions = {
        format: 'HH',
        collapse: false,
        ignoreReadonly: true,
        widgetPositioning: {
            horizontal: 'auto',
            vertical: 'bottom'
        }
    };
     
    $('#datePicker').datetimepicker(options);
    $('#timePicker').datetimepicker(hourOptions);
    $("#datePickerSrcVal").hide(); 
})  
 

$("#btnClose").click(function () {
    $("#scheduleModal").modal('hide');
}); 