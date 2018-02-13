# TiDropboxChooser Module

The TiDropboxChooser module enables you to select files from Dropbox account and retrieve URL link of selected file.

This project can be found on github at [https://github.com/wecobi/TiDropboxChooser](here).

## Before you start

* This is an Android module designed to work with Titanium SDK 7.0.1 or greater.

## Accessing the TiDropboxChooser Module
To access this module from JavaScript, you would do the following:
<pre><code>var TiDropboxChooser = require("ti.dropboxchooser");</code></pre>

### Method

### Initialize
<pre><code>
TiDropboxChooser.init({
	"appKey" : "YOUR_APP_KEY",
	"resultType" : TiDropboxChooser.DIRECT_LINK
});
</code></pre>

You can create an request for initialize using below properties
* <b>appKey</b> (Required) (String) Dropbox Application Key.
* <b>resultType</b> (Optional) (Constant) TiDropboxChooser Defined Constant used to retrieve file path. (Default, <span>DIRECT_LINK</span>)

### Open Dropbox Dialog
<pre><code>
// Open the Dropbox dialog to Read Remote File Url from Dropbox account. 
// This method called after init().
TiDropboxChooser.openDialog(function(e) {
	if (e.resultCode == -1) {
		var fileUrl = e.url || "";
		// TODO REST CODE
	}
});
</code></pre>


### Constant

### Dropbox resultType Constant
* PREVIEW_LINK
* DIRECT_LINK


## Author
* Abidhusain Chidi
* abidhusain.wecobi@gmail.com

## Licensing & Support
This project is licensed under the MIT approved License. For details please see the license associated with each project.

## Contributing
Code contributions are greatly appreciated, please submit a new [https://github.com/wecobi/TiDropboxChooser/pull/new/master](pull request)!

## References
[https://www.dropbox.com/developers/downloads/sdks/chooser/android/dropbox-android-chooser-sdk-1.0.1.zip](Dropbox Chooser Android SDK v1.0.1)
[https://www.dropbox.com/developers/chooser](https://www.dropbox.com/developers/chooser)