package ro.ovidiuconeac.users.androidapp.components.edituser.mvp.presenter;

import ro.ovidiuconeac.users.androidapp.components.edituser.mvp.model.EditUserUseCases;
import ro.ovidiuconeac.users.androidapp.components.edituser.mvp.view.EditUserView;

/**
 * Created by www.ovidiuconeac.ro on 4/18/17.
 */

public class EditUserPresenterImpl implements EditUserPresenter {

    private EditUserView view;
    private EditUserUseCases model;

    public EditUserPresenterImpl(EditUserView view) {
        this.view = view;
        this.model = new EditUserUseCases();
    }

    @Override
    public void requestUpdateUser() {

    }

    @Override
    public void requestRemoveUser() {

    }
}
