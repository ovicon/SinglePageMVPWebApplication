"use strict";

/**
 * Created by ovidiu on 3/24/17.
 */
function NewUserView() {

    var presenter = new NewUserPresenter(this);
    var db = firebase.database();
    var nameValue = undefined;
    var ageValue = undefined;
    var sexValue = $('#sex option:selected').text();
    var back = undefined;
    var name = undefined;
    var age = undefined;
    var sex = undefined;
    var save = undefined;
    var message = undefined;

    $('#includedContent').load('resources/layout/NewUserView.html', function () {
        back = $('#back-button');
        back.on('click', function () {
            debugger;
            new UsersView();
        });
        name = $('#name');
        name.on('change', function () {
            debugger;
            nameValue = name.val();
        });
        age = $('#age');
        age.on('change', function () {
            debugger;
            ageValue = age.val();
        });
        sex = $('#sex');
        sex.on('change', function () {
            debugger;
            sexValue = $('#sex option:selected').text();
        });
        save = $('#save-button');
        save.on('click', function () {
            debugger
            NewUserView.prototype.requestSaveUser()
        });
        message = $('#message');
    });

    NewUserView.prototype.requestSaveUser = function () {
        debugger;
        presenter.requestSaveUser(db, {
            name: nameValue,
            age: ageValue,
            sex: sexValue
        });
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
            debugger
            message.text('');
        }, 3000);
    }
}