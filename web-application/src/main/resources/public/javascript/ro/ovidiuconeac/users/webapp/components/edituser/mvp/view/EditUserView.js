"use strict";

/**
 * Created by ovidiu on 3/22/17.
 */
function EditUserView(user) {

    var db = firebase.database();
    var nameValue = undefined;
    var ageValue = undefined;
    var sexValue = undefined;

    var back = undefined;
    var name = undefined;
    var age = undefined;
    var sex = undefined;
    var remove = undefined;
    var save = undefined;
    var message = undefined;
    var presenter = undefined;

    $('#includedContent').load('resources/layout/EditUserView.html', function () {

        back = $('#back-button');
        back.on('click', function () {
            debugger;
            new UsersView();
        });
        name = $('#name');
        name.on('change', function () {
            nameValue = name.val();
        });
        name.val(user.name);
        age = $('#age');
        age.on('change', function () {
            ageValue = age.val();
        });
        age.val(user.age);
        sex = $('#sex');
        sex.val(user.sex).change();
        sex.on('change', function () {
            debugger;
            sexValue = $('#sex option:selected').text();
        });
        remove = $('#remove-button');
        remove.on('click', function () {
            debugger;
            EditUserView.prototype.requestRemoveUser();
        });
        save = $('#save-button');
        save.on('click', function () {
            debugger;
            EditUserView.prototype.requestUpdateUser();
        });

        message = $('#message');
        presenter = new EditUserPresenter(_this);
    });

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
            new UsersView();
        }, 3000);
    }
}