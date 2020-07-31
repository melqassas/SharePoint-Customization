<script language = "javascript" type = "text/javascript"src = "//ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js"> </script>
<script type = "text/javascript" src = "https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js"> </script>   
<script language = "javascript" type = "text/javascript">
    $(document).ready(function() {
        if ($.cookie('SPCookie') != 'Once') {
            SP.SOD.executeFunc('sp.js', 'SP.ClientContext', showModalPopUp);
            setSPCookies();
        }
    });

function showModalPopUp() {
    //Set options for Modal PopUp  
    var options = {
        url: 'http://epm:19812/pmo/', //Set the url of the page  
        title: 'Show SharePoint Modal Popup once per session', //Set the title for the pop up  
        allowMaximize: false,
        showClose: true,
        width: 600,
        height: 400
    };
    //Invoke the modal dialog by passing in the options array variable  
    SP.SOD.execute('sp.ui.dialog.js', 'SP.UI.ModalDialog.showModalDialog', options);
    return false;
}

function setSPCookies() {
    $.cookie('SPCookie', 'Once', {
        expires: (new Date()).getTime() + (48 * 60 * 60 * 1000) // Time in Milliseconds (Expire after 2 Days)
    });
} 
</script>
