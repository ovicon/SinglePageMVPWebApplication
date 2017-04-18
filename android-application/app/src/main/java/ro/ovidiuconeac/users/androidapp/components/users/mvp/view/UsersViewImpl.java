package ro.ovidiuconeac.users.androidapp.components.users.mvp.view;

import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import ro.ovidiuconeac.users.androidapp.R;
import ro.ovidiuconeac.users.androidapp.components.users.mvp.presenter.UsersPresenter;

/**
 * Created by www.ovidiuconeac.ro on 4/18/17.
 */

public class UsersViewImpl extends Fragment implements UsersView {

    private UsersPresenter presenter;

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.users_view, container, false);

        // Bind to view items

        return view;
    }


    @Override
    public void requestShowUsers() {

    }

    @Override
    public void postShowUsers() {

    }

    @Override
    public void requestEditUser() {

    }
}
