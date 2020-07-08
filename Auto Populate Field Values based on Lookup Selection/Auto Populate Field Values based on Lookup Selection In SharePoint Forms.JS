//Auto Populate Field Values based on Lookup Selection In SharePoint, check the details at https://spgeeks.devoworx.com/autofill-list-form-fields-based-on-lookup-selection-in-sharepoint/
<script language = "javascript" src = "http://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"> </script> 
<script language = "javascript">

	$(document).ready(function () {
		// Set the lookup field name in the new form
		var LookupField = $("select[title='Serial Number']");
		LookupField.change(function () {
			PopulateLookupField();
		});
	});

var ListItem;

function PopulateLookupField() {
	// Set the lookup field name in the new form	
	var LookupField = $("select[title='Serial Number'] option:selected").text();

	var clientContext = new SP.ClientContext.get_current();
	//set lookup list name
	var LookupList = clientContext.get_web().get_lists().getByTitle('Lookup List');
	var camlQuery = new SP.CamlQuery();
	camlQuery.set_viewXml('<View><Query><Where><Eq> <FieldRef Name=\'Serial_x0020_Numaber\' /> <Value Type=\'Text\'>' + LookupField + '</Value></Eq></Where></Query><RowLimit>1</RowLimit></View>');
	ListItem = LookupList.getItems(camlQuery);
	clientContext.load(ListItem);
	clientContext.executeQueryAsync(Function.createDelegate(this, this.Succed), Function.createDelegate(this, this.Failed));
}

function Succed(sender, args) {

	//if( ListItem.get_count()>0){
	var item = ListItem.getItemAtIndex(0);
	// Number
	$("input[title='Salary']").val(item.get_item('Salary'));
	//Date
	var joinDate = new Date(item.get_item('Join_x0020_Date'));
	var JoinDateFormat = joinDate.format("MM/dd/yyyy");
	$("input[title='Join Date']").val(JoinDateFormat);
	//Lookup

	$("select[title='Department']").val(item.get_item('Department').get_lookupId());
	//Choice
	//console.trace(item.get_item('Nationality'));
	$("select[title='Nationality']").val(item.get_item('Nationality'));
	//People
	var context = SP.ClientContext.get_current();
	var web = context.get_web();
	var user = web.ensureUser(item.get_item('User_x0020_Name').get_lookupValue());
	context.load(user);
	context.executeQueryAsync(function () {
		var form = $("table[class='ms-formtable']");
		var userField = form.find("input[id$='ClientPeoplePicker_EditorInput']").get(0);
		var peoplepicker = SPClientPeoplePicker.PickerObjectFromSubElement(userField);
		// clear people Picker
		while (peoplepicker.TotalUserCount > 0) {
			peoplepicker.DeleteProcessedUser();
		}
		var loginName = user.get_loginName();
		peoplepicker.AddUserKeys(loginName);
	}, function (sender, args) { // on error 
		alert(args.get_message());
	});
	// Text
	$("input[title='Name']").val(item.get_item('Title'));

	// }

}

function Failed(sender, args) {
	alert('Error. ' + args.get_message() + '\n' + args.get_stackTrace());
} 
</script>
