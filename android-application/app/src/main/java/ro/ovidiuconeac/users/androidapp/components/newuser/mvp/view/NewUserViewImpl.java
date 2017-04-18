package ro.ovidiuconeac.users.androidapp.components.newuser.mvp.view;

import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import butterknife.ButterKnife;
import ro.ovidiuconeac.users.androidapp.R;
import ro.ovidiuconeac.users.androidapp.components.newuser.mvp.presenter.NewUserPresenter;

/**
 * Created by www.ovidiuconeac.ro on 4/18/17.
 */

public class NewUserViewImpl extends Fragment implements NewUserView {

    private NewUserPresenter presenter;

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.new_user_view, container, false);

        // Bind to view items

        ButterKnife.bind(this, view);

        return view;
    }

    @Override
    public void requestSaveUser() {

    }

    @Override
    public void postSaveUserSuccessful() {

    }

    @Override
    public void postWrongUserInput() {

    }

    @Override
    public void requestResetUserInterface() {

    }

    @Override
    public void requestResetUserMessage() {

    }
}
