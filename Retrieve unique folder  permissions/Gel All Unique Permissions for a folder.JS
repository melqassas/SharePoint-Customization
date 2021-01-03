<script type="text/javascript">

function GetFolderPermissions() {
    var ctx = new SP.ClientContext.get_current();
    var docLib = ctx.get_web().get_lists().getByTitle('Document Library Name');
    var folderQuery = SP.CamlQuery.createAllFoldersQuery();
    var GetFolders = docLib.getItems(folderQuery);
    ctx.load(GetFolders, 'Include(DisplayName, RoleAssignments, RoleAssignments.Include(Member))');
    ctx.executeQueryAsync(function() {
        var GetFolderEnum = GetFolders.getEnumerator();
        while (GetFolderEnum.moveNext()) {
            var curruntFolder = GetFolderEnum.get_current();
            var GetRoles = curruntFolder.get_roleAssignments().getEnumerator();
            if (curruntFolder.get_displayName() == "Folder Name") {
                while (GetRoles.moveNext()) {
                    var currentRole = GetRoles.get_current();
                    var permissionName = currentRole.get_member().get_loginName();
                    if  (permissionName != "Style Resource Readers")                
                          alert(permissionName);
                }
                break;
            } else {
                continue;
                
            }

        }
    }, function() {})
} 

ExecuteOrDelayUntilScriptLoaded(GetFolderPermissions, 'sp.js');
</script>
