"use strict";

/**
 * Created by ovidiu on 3/22/17.
 */
function UsersPresenter(view) {

    var model = new UsersUseCases();
    var callback = this;

    UsersPresenter.prototype.requestShowUsers = function(db) {
        debugger;
        model.getAllUsers(db, callback);
        view.postShowUsers(users);
    }

    UsersPresenter.prototype.postShowUsers = function(users) {
        debugger;
        view.postShowUsers(users);
    }
}