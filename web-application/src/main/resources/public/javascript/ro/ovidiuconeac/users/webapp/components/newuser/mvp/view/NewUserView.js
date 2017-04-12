/**
 * Created by ovidiu on 3/24/17.
 */
function NewUserView() {

    var name = $('#name');
    var age = $('#age');
    var sex = $('#sex');
    var name = $('#cancel');
    var cancel = $('#cancel');
    cancel.click(function () {
        NewUserView.prototype.cancel();
    });
    var save = $('#save');
    save.click(function () {
        NewUserView.prototype.save();
    });

    NewUserView.prototype.save = function () {
        alert('save');
        NewUserView.prototype.cancel();
    }

    NewUserView.prototype.cancel = function () {
        Navigation.getInstance().showUsers();
    }
}