<script>
function openDialog(pageUrl) {
var options = {
url: pageUrl,
title: 'Modal Title',
allowMaximize: false,
showClose: true,
width: 726,
height: 372
};
SP.SOD.execute('sp.ui.dialog.js', 'SP.UI.ModalDialog.showModalDialog', options);
}
</script>
