package ro.ovidiuconeac.users.androidapp.components.newuser.mvp.view;

/**
 * Created by www.ovidiuconeac.ro on 4/18/17.
 */

public interface NewUserView {
    void requestSaveUser();
    void postSaveUserSuccessful();
    void postWrongUserInput();
    void requestResetUserInterface();
    void requestResetUserMessage();
}
