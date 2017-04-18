package ro.ovidiuconeac.users.androidapp.components.users.mvp.presenter;

import ro.ovidiuconeac.users.androidapp.components.users.mvp.model.UsersUseCases;
import ro.ovidiuconeac.users.androidapp.components.users.mvp.view.UsersView;

/**
 * Created by www.ovidiuconeac.ro on 4/18/17.
 */

public class UsersPresenterImpl implements UsersPresenter {

    private UsersView view
    private UsersUseCases model;

    public UsersPresenterImpl(UsersView view) {
        this.view = view;
        this.model = new UsersUseCases();
    }

    @Override
    public void requestShowUsers() {

    }

    @Override
    public void postShowUsers() {

    }
}
