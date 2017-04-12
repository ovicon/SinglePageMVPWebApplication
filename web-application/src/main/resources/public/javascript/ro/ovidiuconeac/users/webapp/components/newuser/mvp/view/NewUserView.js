/**
 * Created by ovidiu on 3/24/17.
 */
function NewUserView() {

    var nameValue = undefined;
    var ageValue = undefined;
    var sexValue = $('#sex option:selected').text();

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

    var cancel = $('#cancel');
    cancel.click(function () {
        NewUserView.prototype.cancel();
    });

    var save = $('#save');
    save.click(function () {
        NewUserView.prototype.save();
    });

    var presenter = new NewUserPresenter(this);

    NewUserView.prototype.save = function () {
        var util = Util.getInstance();
        if (util.isValid(nameValue) &&
            util.isValid(ageValue) &&
            util.isValid(sexValue)) {
            presenter.save(nameValue, ageValue, sexValue);
        } else {
            alert('Check Input');
        }
    }

    NewUserView.prototype.saveSuccessful = function () {
        alert('New user added successful');
    }

    NewUserView.prototype.resetUi = function () {
        name.val('');
        age.val('');
        $('#sex').val('').change();
    }
}