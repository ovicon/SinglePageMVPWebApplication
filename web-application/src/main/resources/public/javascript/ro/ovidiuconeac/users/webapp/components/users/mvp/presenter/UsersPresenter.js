"use strict";

/**
 * Created by ovidiu on 3/22/17.
 */
function UsersPresenter(view) {

    var model = new UsersUseCases(this);

    UsersPresenter.prototype.requestShowUsers = function(db) {
        debugger;
        model.getAllUsers(db);
        view.postShowUsers(users);
    }

    UsersPresenter.prototype.postShowUsers = function(users) {
        debugger;
        view.postShowUsers(users);
    }
}