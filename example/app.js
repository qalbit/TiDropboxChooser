var TiDropboxChooser = require("ti.dropboxchooser");

// Initialize with AppKey and ResultType
TiDropboxChooser.init({
	"appKey" : "YOUR_APP_KEY",
	"resultType" : TiDropboxChooser.DIRECT_LINK
});

// open a single window
var win = Ti.UI.createWindow({
	backgroundColor : 'white'
});

var buttonSelectFile = Ti.UI.createButton({
	width : Ti.UI.SIZE,
	height : Ti.UI.SIZE,
	title : "Select File!"
});

buttonSelectFile.addEventListener("click", doSelectFile);

win.add(buttonSelectFile);
win.open();

// Function to Call module and grab file response
var doSelectFile = function() {
	// Open the Dropbox dialog to Read Remote File Url from Dropbox account.
	TiDropboxChooser.openDialog(function(e) {
		if (e.resultCode == -1) {
			var fileUrl = e.url || "";
			// TODO REST CODE
		}
	});
};

