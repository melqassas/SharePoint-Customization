// Remove Drag Files Here SharePoint Document Library, check the details at https://spgeeks.devoworx.com/hide-disable-new-doc-drag-drop-files-document-library-sharepoint-2013/

<script language="javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript">
$(document).ready(function () {

	// Stop Drag & Drop and remove drag files here text
	ExecuteOrDelayUntilScriptLoaded(function () {
		g_uploadType = DragDropMode.NOTSUPPORTED;
		SPDragDropManager.DragDropMode = DragDropMode.NOTSUPPORTED;

		$("td.ms-list-addnew:contains(or drag files here)").each(function () {
			var hidedrag = $(this).html().replace(/or drag files here/, "");
			$(this).html(hidedrag);
		});
	}, "DragDrop.js");
});
</script>
