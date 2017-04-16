"use strict";

/**
 * Created by ovidiu on 3/22/17.
 */
function EditUserView() {

    var db = firebase.database();
    var nameValue = undefined;
    var ageValue = undefined;
    var sexValue = undefined;
    var back = $('#back');
    back.on('click', function () {
        Navigation.getInstance().showUsers();
    });
    var name = $('#name');
    name.on('change', function () {
        nameValue = name.val();
    });
    var age = $('#age');
    age.on('change', function () {
        ageValue = age.val();
    });
    var sex = $('#sex');
    sex.on('change', function () {
        sexValue = $('#sex option:selected').text();
    });
    var remove = $('#remove');
    remove.on('click', function () {
        EditUserView.prototype.requestRemoveUser();
    });
    var save = $('#save');
    save.on('click', function () {
        EditUserView.prototype.requestUpdateUser();
    });
    var message = $('#message');
    var presenter = new EditUserPresenter(this);

    EditUserView.prototype.requestUpdateUser = function () {
        debugger;
        var id;
        var user = {
            id: id,
            name: nameValue,
            age: ageValue,
            sex: sexValue
        }
        presenter.requestUpdateUser(db, user);
    }

    EditUserView.prototype.postUpdateUserSuccessful = function () {
        debugger;
        message.text('User modified successfully');
        message.css('color', 'green');
    }

    EditUserView.prototype.requestRemoveUser = function () {
        debugger;
        var user = {
            id: '-KhquOlnX7eQCJxrQGo3',
            name: nameValue,
            age: ageValue,
            sex: sexValue
        }
        presenter.requestRemoveUser(db, user);
    }

    EditUserView.prototype.postRemoveUserSuccessful = function () {
        debugger;
        message.text('User removed successfully');
        message.css('color', 'green');
    }

    EditUserView.prototype.postWrongUserInput = function () {
        debugger;
        message.text('Check Input');
        message.css('color', 'red');
    }

    EditUserView.prototype.requestResetUserMessage = function () {
        debugger;
        setTimeout(function () {
            message.text('');
        }, 3000);
    }

    EditUserView.prototype.requestShowUsers = function () {
        debugger;
        setTimeout(function () {
            Navigation.getInstance().showUsers();
        }, 3000);
    }
}