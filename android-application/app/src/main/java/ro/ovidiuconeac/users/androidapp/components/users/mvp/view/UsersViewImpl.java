package ro.ovidiuconeac.users.androidapp.components.users.mvp.view;

import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentTransaction;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import butterknife.ButterKnife;
import butterknife.OnClick;
import ro.ovidiuconeac.users.androidapp.R;
import ro.ovidiuconeac.users.androidapp.components.edituser.mvp.view.EditUserViewImpl;
import ro.ovidiuconeac.users.androidapp.components.users.mvp.presenter.UsersPresenter;

/**
 * Created by www.ovidiuconeac.ro on 4/18/17.
 */

public class UsersViewImpl extends Fragment implements UsersView {

    private UsersPresenter presenter;

    @OnClick(R.id.add_new_button)
    public void addNew() {
        FragmentManager manager = getActivity().getSupportFragmentManager();
        FragmentTransaction fragmentTransaction = manager.beginTransaction();
        fragmentTransaction.replace(R.id.main_ui_hook, new EditUserViewImpl());
        fragmentTransaction.commit();
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.users_view, container, false);

        // Bind to view items

        ButterKnife.bind(this, view);

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
