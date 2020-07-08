<script language = "javascript" src = "http://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"> </script> 
<script language = "javascript">

 $(document).ready(function() {
  // the lookup field in the new form
  var IssueIDField = $("select[title='Issue ID']");
  IssueIDField.change(function() {
   Populate();
  });
 });

var ListItem;

function Populate() {
 var IssID = $("select[title='Issue ID']").val();
 var clientContext = new SP.ClientContext.get_current();
 var IssueList = clientContext.get_web().get_lists().getByTitle('Issues');
 ListItem = IssueList.getItemById(IssID);
 clientContext.load(ListItem);
 clientContext.executeQueryAsync(Function.createDelegate(this, this.Succed), Function.createDelegate(this, this.Failed));
}

function Succed(sender, args) {

 $("input[title='Issue Name']").val(ListItem.get_item("Title"));

}

function Failed(sender, args) {
 alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
} 
</script>
