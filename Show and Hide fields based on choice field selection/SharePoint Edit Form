//Show and Hide fields based on Choice field selection in Edit Form
<script src = "https://code.jquery.com/jquery-1.7.2.min.js"type = "text/javascript"> </script>
<script type = "text/javascript">
    $(document).ready(function() {
        if ($("select[title=’City’]").val() != "other") {
            $('nobr: contains("OtherCity")').closest('tr').hide();
        } else {
            $('nobr: contains("OtherCity")').closest('tr').show();
        }

        //Show/hide columns based on Drop Down Selection
        $("select[title=’City’]").change(function() {
            if ($("select[title='City']").val() != "other") {
                $('nobr: contains("OtherCity")').closest('tr').hide();
            } else {
                $('nobr: contains("OtherCity")').closest('tr').show();
            }
        });
    }); 
</script>
