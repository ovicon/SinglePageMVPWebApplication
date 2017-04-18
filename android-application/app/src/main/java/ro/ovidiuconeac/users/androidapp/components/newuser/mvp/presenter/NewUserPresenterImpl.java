package ro.ovidiuconeac.users.androidapp.components.newuser.mvp.presenter;

import ro.ovidiuconeac.users.androidapp.components.newuser.mvp.model.NewUserUseCases;
import ro.ovidiuconeac.users.androidapp.components.newuser.mvp.view.NewUserView;

/**
 * Created by www.ovidiuconeac.ro on 4/18/17.
 */

public class NewUserPresenterImpl implements NewUserPresenter {

    private NewUserView view;
    private NewUserUseCases model;

    public NewUserPresenterImpl(NewUserView view) {
        this.view = view;
        this.model = new NewUserUseCases();
    }

    @Override
    public void requestSaveUser() {

    }
}
