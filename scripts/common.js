!function ($) {
    $.common = {
        doClearTable: function () {
            $('#datatable').DataTable();

            //Buttons examples
            var table = $('#datatable-buttons').DataTable({
                lengthChange: false,
                buttons: ['copy', 'excel', 'pdf']
            });

            table.buttons().container()
                .appendTo('#datatable-buttons_wrapper .col-md-6:eq(0)');
        },
        SetSwitcheryState: function () {
            // init the change all handler
            var changeCheckbox = document.querySelector('.js-switch');

            // attach the change event.
            changeCheckbox.onchange = function () {
                if (changeCheckbox.checked) {
                    var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch-child'));

                    elems.forEach(function (checkboxelement) {
                        var special = checkboxelement;
                        // $(special).attr("checked", true);
                        special.checked = true;
                        if (typeof Event === 'function' || !document.fireEvent) {
                            var event = document.createEvent('HTMLEvents');
                            event.initEvent('change', true, true);
                            special.dispatchEvent(event);
                        } else {
                            special.fireEvent('onchange');
                        }
                    });
                }
                else {
                    var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch-child'));

                    elems.forEach(function (checkboxelement) {
                        var special = checkboxelement;
                        //$(special).attr("checked", false);
                        special.checked = false;
                        if (typeof Event === 'function' || !document.fireEvent) {
                            var event = document.createEvent('HTMLEvents');
                            event.initEvent('change', true, true);
                            special.dispatchEvent(event);
                        } else {
                            special.fireEvent('onchange');
                        }
                    });
                }
            };
        },

        Concurrency: function (tableName, fieldName, idName, objDate, processName) {
            $.ajax({
                url: "/Common/Concurrency",
                type: "POST",
                datatype: "json",
                data: {
                    TableName: tableName, FieldName: fieldName, IDName: idName
                },
                success: function (d) {
                    debugger;
                    var formatdate = $.common.formatDate(d);
                    var formatdate2 = $.common.formatDate(objDate);


                    console.log(formatdate);
                    console.log(formatdate2);

                    if (d > objDate) {
                        console.log('error concurrency');
                        swal({
                            title: 'Warning!',
                            text: "Concurrency has occurred in " + processName + " process",
                            type: 'warning',
                            showCloseButton: true,
                            confirmButtonColor: '#4fa7f3'
                        })
                    } else {
                        console.log('next step');
                    }
                }
            });
        },

        formatDate: function (date) {
            var d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear(),
                hour = d.getHours(),
                minute = d.getMinutes(),
                second = d.getSeconds();


            if (month.length < 2)
                month = '0' + month;
            if (day.length < 2)
                day = '0' + day;

            return [year, month, day].join('-');
        },
        isNumberKey: function (evt) {
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if (charCode > 31 && (charCode < 48 || charCode > 57))
                return false;
            return true;
        },

        DropDownList: function (tableName, fieldValue, fieldName, objectName) {
            $.ajax({
                url: "/Common/DropDownList",
                type: "POST",
                contentsType: "application/json",
                data: {
                    TableName: tableName, FieldValue: fieldValue, FieldName: fieldName
                },
                success: function (res) {
                    if (res.length > 0) {
                        $.each(res, function (i) {
                            var optionhtml = '<option value="' +
                                res[i].value + '">' + res[i].description + '</option>';
                            $("#" + objectName).append(optionhtml);
                        });
                    }
                },
                failure: function () {
                    swal({
                        title: 'Alert',
                        type: 'error',
                        text: 'Failed load data to drop down ' + objectName,
                        showCloseButton: true,
                        confirmButtonColor: '#4fa7f3'
                    })
                }
            });
        },

        Delete: function (url, id, emailAddress) {
            swal({
                title: 'Confirmation',
                text: "Are you sure you want to delete this data?",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#4fa7f3',
                cancelButtonColor: '#d57171',
                confirmButtonText: 'OK'
            }).then(function () {
                $.ajax({
                    url: url,
                    type: "DELETE",
                    datatype: "json",
                    data: {
                        Id: id,
                        emailAddress: emailAddress
                    },
                    success: function (d) {
                        if (d.isSuccess) {
                            swal(
                                'Deleted!',
                                d.message,
                                'success'
                            )
                            $("#register-edit-modal").modal('hide');
                            GetDatatable();
                        } else {
                            swal({
                                title: 'Alert',
                                type: 'error',
                                text: d.message,
                                showCloseButton: true,
                                confirmButtonColor: '#4fa7f3'
                            })
                        }
                    }
                });
            })
        }
    }
}(window.jQuery);