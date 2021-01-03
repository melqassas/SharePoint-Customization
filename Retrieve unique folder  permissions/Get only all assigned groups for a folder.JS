<script type="text/javascript">


function GetFolderGroupPermissions() {
    var ctx = new SP.ClientContext.get_current();
    var docLib = ctx.get_web().get_lists().getByTitle('Documents');
    var folderQuery = SP.CamlQuery.createAllFoldersQuery();
    var GetFolders = docLib.getItems(folderQuery);
    ctx.load(GetFolders, 'Include(DisplayName, RoleAssignments, RoleAssignments.Include(Member))');
    ctx.executeQueryAsync(function() {
        var GetFolderEnum = GetFolders.getEnumerator();
        while (GetFolderEnum.moveNext()) {
            var curruntFolder = GetFolderEnum.get_current();

            var GetRoles = curruntFolder.get_roleAssignments().getEnumerator();
            if (curruntFolder.get_displayName() == "devoworx") {
                while (GetRoles.moveNext()) {
                    var currentRole = GetRoles.get_current();
                    var permissionType = currentRole.get_member().get_principalType();
                    var permissionName = currentRole.get_member().get_loginName();
                    if ( permissionType == 8 && permissionName != "Style Resource Readers")
                    alert(permissionName);
                }
                break;
            } else {
                continue;
                
            }

        }
    }, function() {})
} 

ExecuteOrDelayUntilScriptLoaded(GetFolderGroupPermissions, 'sp.js');

</script>
