$(document).ready(function() {
    //DELETE
    $('input[name="delete"]').on('click',function (){
        var id = $(this).closest('tr').data('id');
        var table = "readers";
        var ident = "reader_id";
        $.ajax({
            url:'../delete.php',
            method:'POST',
            data: 'id=' + id + '&table=' + table + '&ident=' + ident,
            type: 'Json',
            success: function(data){
                data = jQuery.parseJSON(data);
                if(data.status=='success'){
                    $("tr[data-id='" + id +"']").remove();
                } else {//NEVEDOMAYA HUJNYA
                    $("#errorModal").modal("show");
                }
            }
        });
    });
    //ADD
    $('button[name=add]').on('click', function(){
        var sname = $('input#inputSname').val();
        var fname = $('input#inputFname').val();
        var adress = $('input#inputAdress').val();
        var passport = $('input#inputPassport').val();
        var phone = $('input#inputPhone').val();
        $.ajax({
            url:'../add_reader.php',
            method:'post',
            data:'sname=' + sname + '&fname=' + fname + '&adress=' + adress + '&passport=' + passport + '&phone=' + phone,
            type:'json',
            success:function(data){
                $("#addModal").modal("hide");
            }
        });
    });
    //EDIT
    $('button[name=edit]').on('click', function(){
        var id = $(this).closest('tr').data('id');
        var sname = $(this).closest('tr').data('sname');
        var fname = $(this).closest('tr').data('fname');
        var adress = $(this).closest('tr').data('adress');
        var passport = $(this).closest('tr').data('passport');
        var phone = $(this).closest('tr').data('phone');
        $('#editModal').attr('data-id',id);
        $('#editModal').attr('data-sname',sname);
        $('#editModal').attr('data-fname',fname);
        $('#editModal').attr('data-adress',adress);
        $('#editModal').attr('data-passport',passport);
        $('#editModal').attr('data-phone',phone);
        $('input#inputSname').val(sname);
        $('input#inputFname').val(fname);
        $('input#inputAdress').val(adress);
        $('input#inputPassport').val(passport);
        $('input#inputPhone').val(phone);
    });
    $('button[name=save]').on('click', function(){
        var id = $('#editModal').data('id');
        var sname = $('#editModal input[name="sname"]').val();
        var fname = $('#editModal input[name="fname"]').val();
        var adress = $('#editModal input[name="adress"]').val();
        var passport = $('#editModal input[name="passport"]').val();
        var phone = $('#editModal input[name="phone"]').val();
        $.ajax({
            url:'../update_reader.php',
            method:'post',
            data:'id=' + id + '&sname=' + sname + '&fname=' + fname + '&adress=' + adress + '&passport=' + passport + '&phone=' + phone,
            type:'json',
            success:function(data){
                $("#addModal").modal("hide");
            }
        });
    });
})