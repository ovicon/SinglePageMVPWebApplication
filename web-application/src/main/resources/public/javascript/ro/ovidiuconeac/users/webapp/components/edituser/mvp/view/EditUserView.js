"use strict";

/**
 * Created by ovidiu on 3/22/17.
 */
function EditUserView() {

    var nameValue = undefined;
    var ageValue = undefined;
    var sexValue = undefined;

    var back = $('#back');
    back.click(function () {
        Navigation.getInstance().showUsers();
    });

    var name = $('#name');
    name.change(function () {
        nameValue = name.val();
    });
    var age = $('#age');
    age.change(function () {
        ageValue = age.val();
    });

    var sex = $('#sex');
    sex.change(function () {
        sexValue = $('#sex option:selected').text();
    });

    var remove = $('#remove');
    remove.click(function () {
        // TODO remove id
        EditUserView.prototype.remove('KhYh8aQ--66QlAHu8yp');
    });

    var save = $('#requestSaveUser');
    save.click(function () {
        EditUserView.prototype.requestSaveUser();
    });

    var presenter = new EditUserPresenter(this);

    EditUserView.prototype.requestSaveUser = function (id) {
        var util = Util.getInstance();
        if (util.isValid(nameValue) &&
            util.isValid(ageValue) &&
            util.isValid(sexValue)) {
            presenter.requestSaveUser(id, nameValue, ageValue, sexValue);
        } else {
            alert('Check Input');
        }
    }

    EditUserView.prototype.removeSuccessful = function () {
        alert('User successfully removed');
    }

    EditUserView.prototype.showUsers = function () {
        Navigation.getInstance().showUsers();
    }

    EditUserView.prototype.remove = function (id) {
        presenter.remove(id);
    }

}