"use strict";

/**
 * Created by ovidiu on 3/22/17.
 */
function UsersUseCases() {

    UsersUseCases.prototype.getAllUsers = function (db) {
        debugger;
        var users = [];
        var ref = db.ref('/users/');
        ref.once('value', function(snapshot) {
            debugger;
            snapshot.forEach(function(childSnapshot) {
                debugger;
                var id = childSnapshot.key;
                var childData = childSnapshot.val();
                users.push({
                    id: id,
                    name: childData.name,
                    age: childData.age,
                    sex: childData.sex
                });
            });

            // Not a good way to do it, the model must not know about the presenter
            UsersPresenter.prototype.postShowUsers(users);
        });
    }
}