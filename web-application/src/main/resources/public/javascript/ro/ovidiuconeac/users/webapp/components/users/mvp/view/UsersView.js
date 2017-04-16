"use strict";

/**
 * Created by ovidiu on 3/22/17.
 */
var user = {}

function UsersView() {

    var db = firebase.database();
    var addNew = $('#add-new-button');
    addNew.on('click', function () {
        Navigation.getInstance().showNewUser()
    });
    var loading = $('#loading-users');
    var users = $('#users');
    var presenter = new UsersPresenter(this);





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

        $('.row').on('click', function (event) {
            var parent = $(this);
            var id = parent.attr('id');
            var name = parent.find('#name').html();
            var sex = parent.find('#sex').html();
            var age = parent.find('#age').html();
            user = {
                id: id,
                name: name,
                age: age,
                sex: sex
            }
            Navigation.getInstance().showEditUser();
        });

        loading.hide();
    });

    UsersView.prototype.requestShowUsers = function() {

    }


    UsersView.prototype.requestEditUser = function() {

    }

}