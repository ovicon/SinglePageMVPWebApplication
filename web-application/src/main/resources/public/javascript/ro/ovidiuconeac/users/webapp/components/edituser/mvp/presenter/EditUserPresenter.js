"use strict";

/**
 * Created by ovidiu on 3/22/17.
 */
function EditUserPresenter(view) {

    var model = new EditUserUseCases();
    var util = Util.getInstance();

    EditUserPresenter.prototype.requestUpdateUser = function (db, user) {
        debugger;
        if (util.isUserValid(user)) {
            model.updateUser(db, user)
            view.postUpdateUserSuccessful();
            view.requestShowUsers();
        } else {
            view.postWrongUserInput();
        }
        view.requestResetUserMessage();
    }

    EditUserPresenter.prototype.requestRemoveUser = function (db, user) {
        debugger;
        if (util.isUserValid(user)) {
            model.removeUser(db, user);
            view.postRemoveUserSuccessful();
            view.requestShowUsers();
        } else {
            view.postWrongUserInput();
        }
        view.requestResetUserMessage();
    }
}