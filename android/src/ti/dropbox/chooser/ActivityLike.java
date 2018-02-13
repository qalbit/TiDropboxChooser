package ti.dropbox.chooser;

import android.app.FragmentManager;
import android.content.ActivityNotFoundException;
import android.content.ContentResolver;
import android.content.Intent;
import android.content.pm.PackageManager;

interface ActivityLike {
	void startActivity(Intent intent) throws ActivityNotFoundException;
    void startActivityForResult(Intent intent, int requestCode) throws ActivityNotFoundException;
    /** Might be null */
    ContentResolver getContentResolver();
    /** Might be null */
    PackageManager getPackageManager();
    /** Might be null */
    FragmentManager getFragmentManager();
    /** Might be null */
    android.support.v4.app.FragmentManager getSupportFragmentManager();
}