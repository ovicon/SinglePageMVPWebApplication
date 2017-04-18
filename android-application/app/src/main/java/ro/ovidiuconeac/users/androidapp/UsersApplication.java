package ro.ovidiuconeac.users.androidapp;

import android.app.Application;

import ro.ovidiuconeac.users.androidapp.R;
import uk.co.chrisjenx.calligraphy.CalligraphyConfig;

/**
 * Created by www.ovidiuconeac.ro on 4/18/17.
 */

public class UsersApplication extends Application {
    @Override
    public void onCreate() {
        super.onCreate();
        CalligraphyConfig.initDefault(new CalligraphyConfig.Builder()
                .setDefaultFontPath("fonts/Roboto-Regular.ttf")
                .setFontAttrId(R.attr.fontPath)
                .build()
        );
        //....
    }
}
