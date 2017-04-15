"use strict";

/**
 * Created by ovidiu on 3/24/17.
 */
function NewUserUseCases() {

    NewUserUseCases.prototype.requestSaveUser = function (db, user) {
        // Creates a user with an unique ID
        var ref = db.ref('users');
        ref.push(user);
    }
}