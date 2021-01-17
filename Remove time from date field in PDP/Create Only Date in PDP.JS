// Show date without time in Project Server PDP written by Mohamed El-Qassas
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
$(document).ready(function() {
    var datefieldinViewMode = $("div[guid='8aa27b18-be54-eb11-833d-00155d640201']");
    var datefieldinEditMode = $('input[id=idCF_8aa27b18-be54-eb11-833d-00155d640201]');
    if (datefieldinViewMode.text() != "")
        datefieldinViewMode.text(new Date(datefieldinViewMode.text()).toLocaleDateString('en-US'));
    else if (datefieldinEditMode.val() != "")
        datefieldinEditMode.val(new Date(datefieldinEditMode.val()).toLocaleDateString('en-US'));
});
</script>
