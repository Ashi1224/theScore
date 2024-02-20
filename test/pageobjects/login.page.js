class LoginPage {

    get loginButton() {
        return $('#login')
    }

    get inputUsername() {
        return $('#email_input_edittext')
    }
    get inputPassword() {
        return $('#password_input_edittext')
    }
    get btnSubmit() {
        return $('#login_button');
    }

    get navigateBtnUp() {
        return $('//android.widget.ImageButton[@content-desc="Navigate up"]').click()
    }

    get profileHeader() {
        return $('.android.widget.ImageButton')
    }

    get navigateLeaguesButton() {
        return $('#navigation_leagues')
    }

    get headline() {
        return $('#headline')
    }

    get leagueTitle() {
        return $('#titleTextView')
    }

    get allowNotification() {
        return $('#permission_allow_button')
    }

    get allowNotification() {
        return $('#permission_allow_button').click()
    }
    async login(username, password) {


        await $('#close').click()
        await this.loginButton.click()
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
    async navigateToLeagues() {

        await this.navigateLeaguesButton.click();
    }

    async openLeague(leagueName) {
        await $(`//*[@text="${leagueName}"]`).click()
    }

    async verifyLeagueTitle(title) {
        await expect(this.leagueTitle).toHaveText(title);
    }

    async allowNotification() {
        await $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]').click()
    }

    async navigatebackButton() {
        await this.navigateBtnUp.click()
    }


}
export default new LoginPage();
