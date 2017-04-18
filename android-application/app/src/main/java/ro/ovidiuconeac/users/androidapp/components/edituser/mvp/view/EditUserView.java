package ro.ovidiuconeac.users.androidapp.components.edituser.mvp.view;

/**
 * Created by www.ovidiuconeac.ro on 4/18/17.
 */

public interface EditUserView {
    void requestUpdateUser();
    void postUpdateUserSuccessful();
    void requestRemoveUser();
    void postRemoveUserSuccessful();
    void postWrongUserInput();
    void requestResetUserInterface();
    void requestResetUserMessage();
    void requestShowUsers();
}
