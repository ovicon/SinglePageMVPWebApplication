"use strict";

/**
 * Created by ovidiu on 3/24/17.
 */
function NewUserPresenter(view) {

    var model = new NewUserUseCases();

    NewUserPresenter.prototype.requestSaveUser = function (db, user) {
        var util = Util.getInstance();
        if (util.isUserValid(user)) {
            model.requestSaveUser(db, user);
            view.postSaveUserSuccessful();
            view.resetUserInterface();
        } else {
            view.wrongUserInput();
        }
        view.resetUserMessage();
    }
}