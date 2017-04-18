package ro.ovidiuconeac.users.androidapp.components;

import android.content.Context;
import android.os.Bundle;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentTransaction;
import android.support.v7.app.AppCompatActivity;

import ro.ovidiuconeac.users.androidapp.R;
import ro.ovidiuconeac.users.androidapp.components.users.mvp.view.UsersViewImpl;
import uk.co.chrisjenx.calligraphy.CalligraphyContextWrapper;

/**
 * Created by www.ovidiuconeac.ro on 4/18/17.
 */

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
        FragmentManager manager = getSupportFragmentManager();
        FragmentTransaction fragmentTransaction = manager.beginTransaction();
        fragmentTransaction.replace(R.id.main_ui_hook, new UsersViewImpl());
        fragmentTransaction.commit();
    }

    @Override
    protected void attachBaseContext(Context newBase) {
        super.attachBaseContext(CalligraphyContextWrapper.wrap(newBase));
    }
}
