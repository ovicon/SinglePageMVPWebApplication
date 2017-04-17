"use strict";

/**
 * Created by ovidiu on 3/22/17.
 */

function UsersView() {

    var _this = this;

    var db = firebase.database();
    var addNew = undefined;
    var loading = undefined;
    var users = undefined;
    var presenter = undefined;

    $('#includedContent').load('resources/layout/UsersView.html', function () {

        db = firebase.database();
        addNew = $('#add-new-button');
        addNew.click(function () {
            new NewUserView();
        });
        loading = $('#loading-users');
        users = $('#users');
        presenter = new UsersPresenter(_this);





        db.ref('/users/').once('value', function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
                var id = childSnapshot.key;
                var childData = childSnapshot.val();
                var newRow = '<br>' +
                    '<div class=\"row\" id=\"' + id + '\"> ' +
                    '<div class=\"column\" id=\"name\">' + childData.name + '</div> ' +
                    '<div class=\"column\" id=\"sex\">' + childData.sex + '</div> ' +
                    '<div class=\"column\" id=\"age\">' +childData.age + '</div> ' +
                    '</div>';
                users.append(newRow);
            });

            $('.row').click(function () {
                var parent = $(this);
                var id = parent.attr('id');
                var name = parent.find('#name').html();
                var sex = parent.find('#sex').html();
                var age = parent.find('#age').html();
                var user = {
                    id: id,
                    name: name,
                    age: age,
                    sex: sex
                }
                debugger;
                UsersView.prototype.requestEditUser(user);
            });

            loading.hide();
        });
    });

    UsersView.prototype.requestShowUsers = function() {
        debugger;
        new UsersView();
    }


    UsersView.prototype.requestEditUser = function(user) {
        debugger;
        new EditUserView(user);
    }
}