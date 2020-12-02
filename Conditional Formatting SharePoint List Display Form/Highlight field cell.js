<script src = "https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script>
    $(document).ready(function() {
        if ($('h3:contains("Project Status")').closest('td').next('td').text().indexOf('In Progress') != -1) {
            $('h3:contains("Project Status")').closest('td').next('td').css("background-color", "green");
            $('h3:contains("Project Status")').closest('td').next('td').css("color", "white");
        } else if ($('h3:contains("Project Status")').closest('td').next('td').text().indexOf('Not Started') != -1) {
            $('h3:contains("Project Status")').closest('td').next('td').css("background-color", "red");
            $('h3:contains("Project Status")').closest('td').next('td').css("color", "white");
        } else {
            $('h3:contains("Project Status")').closest('td').next('td').css("background-color", "blue");
            $('h3:contains("Project Status")').closest('td').next('td').css("color", "white");
        }
    }); 
</script>
