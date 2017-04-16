"use strict";

/**
 * Created by ovidiu on 3/24/17.
 */
function NewUserView() {

    var db = firebase.database();
    var nameValue = undefined;
    var ageValue = undefined;
    var sexValue = $('#sex option:selected').text();
    var back = $('#back');
    back.on('click', function () {
        Navigation.getInstance().showUsers()
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
    var cancel = $('#cancel');
    cancel.on('click', function () {
        NewUserView.prototype.cancel();
    });
    var save = $('#save');
    save.on('click', function () {
        NewUserView.prototype.requestSaveUser()
    });
    var message = $('#message');
    var presenter = new NewUserPresenter(this);

    NewUserView.prototype.requestSaveUser = function () {
        debugger;
        var user = {
            name: nameValue,
            age: ageValue,
            sex: sexValue
        }
        presenter.requestSaveUser(db, user);
    }

    NewUserView.prototype.postSaveUserSuccessful = function () {
        debugger;
        message.text('New user added successfully');
        message.css('color', 'green');
    }

    NewUserView.prototype.postWrongUserInput = function () {
        debugger;
        message.text('Check Input');
        message.css('color', 'red');
    }

    NewUserView.prototype.requestResetUserInterface = function () {
        debugger;
        name.val('');
        age.val('');
        $('#sex').val('').change();
    }

    NewUserView.prototype.requestResetUserMessage = function () {
        debugger;
        setTimeout(function () {
            message.text('');
        }, 3000);
    }
}