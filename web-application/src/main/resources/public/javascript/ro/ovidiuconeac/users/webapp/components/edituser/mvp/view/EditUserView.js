"use strict";

/**
 * Created by ovidiu on 3/22/17.
 */
function EditUserView(user) {

    var user = user;
    var presenter = new EditUserPresenter(this);
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
    });

    EditUserView.prototype.requestUpdateUser = function () {
        debugger;
        presenter.requestUpdateUser(db, {
            id: user.id,
            name: nameValue,
            age: ageValue,
            sex: sexValue
        });
    }

    EditUserView.prototype.postUpdateUserSuccessful = function () {
        debugger;
        message.text('User modified successfully');
        message.css('color', 'green');
    }

    EditUserView.prototype.requestRemoveUser = function () {
        debugger;
        presenter.requestRemoveUser(db, {
            id: user.id,
            name: user.name,
            age: user.age,
            sex: user.sex
        });
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
            debugger
            message.text('');
        }, 3000);
    }

    EditUserView.prototype.requestShowUsers = function () {
        debugger;
        setTimeout(function () {
            debugger
            new UsersView();
        }, 3000);
    }
}