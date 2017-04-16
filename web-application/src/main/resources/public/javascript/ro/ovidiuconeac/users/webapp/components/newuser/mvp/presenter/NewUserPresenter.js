"use strict";

/**
 * Created by ovidiu on 3/24/17.
 */
function NewUserPresenter(view) {

    var model = new NewUserUseCases();
    var util = Util.getInstance();

    NewUserPresenter.prototype.requestSaveUser = function (db, user) {
        debugger;
        if (util.isUserValid(user)) {
            model.saveUser(db, user);
            view.postSaveUserSuccessful();
            view.requestResetUserInterface();
        } else {
            view.postWrongUserInput();
        }
        view.requestResetUserMessage();
    }
}