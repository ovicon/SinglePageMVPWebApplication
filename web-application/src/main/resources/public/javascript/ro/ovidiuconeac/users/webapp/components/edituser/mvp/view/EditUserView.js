/**
 * Created by ovidiu on 3/22/17.
 */
function EditUserView() {

    var name = $('#name');
    var age = $('#age');
    var sex = $('#sex');
    var name = $('#cancel');
    var cancel = $('#cancel');
    cancel.click(function () {
        EditUserView.prototype.cancel();
    });
    var save = $('#save');
    save.click(function () {
        EditUserView.prototype.save();
    });

    EditUserView.prototype.save = function () {
        alert('save');
        EditUserView.prototype.cancel();
    }

    EditUserView.prototype.cancel = function () {
        Navigation.getInstance().showUsers();
    }
}