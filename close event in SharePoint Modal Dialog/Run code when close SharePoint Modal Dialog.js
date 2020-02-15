<script>
    function openDialog(pageUrl) {
        var options = {
            url: pageUrl,
            title: 'SPGeeks Ann',
            allowMaximize: false,
            showClose: true,
            width: 726,
            height: 372,
            dialogReturnValueCallback: function(result) {
                // close event
                if (result == SP.UI.DialogResult.cancel) {
                    //Run code after closing  Modal dialog
                    //Redirect to external page
                    window.location.href = 'https://debug.to';
                }
            }
        };
        SP.SOD.execute('sp.ui.dialog.js', 'SP.UI.ModalDialog.showModalDialog', options);
    } 
</script>
