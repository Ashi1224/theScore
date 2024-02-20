class GetStartedPage {

    get getStarted() {
        return $(`//android.widget.TextView[@resource-id="com.fivemobile.thescore:id/action_button_text" and @text="Get Started"]`)
    }

    get NflField() {
        return $('//android.widget.TextView[@text="NFL Football"]')
    }

    get continueButton() {
        return $('//android.widget.TextView[@resource-id="com.fivemobile.thescore:id/action_button_text"]')

    }

    get allowLoctaion() {
        return $('//*[@text="Allow Location"]')

    }
    get whileUsingTheApp() {
        return $('//*[@text="While using the app"]')

    }

    get followIcon() {
        return $('(//android.widget.ImageView[@resource-id="com.fivemobile.thescore:id/follow_icon"])[2]')
    }

    get continueAction() {
        return $(`//android.widget.TextView[@resource-id="com.fivemobile.thescore:id/action_button_text" and @text="Continue"]`)
    }

    get doneButton() {
        return $('//*[@text="Done"]')
    }

    get closebutton() {
        return $('#dismiss_modal')

    }


    async clickGetStarted() {
        await this.getStarted.click()
    }

    async clickNflButton() {
        await this.NflField.click()
    }

    async clickOnContinue() {
        await this.continueButton.click()
    }

    async clickAllowLoctaion() {
        await this.allowLoctaion.click()
    }

    async clickWhileUsingTheApp() {
        await this.whileUsingTheApp.click()
    }

    async clickAllowLoctaion() {
        await this.allowLoctaion.click()
    }

    async clickFollowIcon() {
        await this.followIcon.click()
    }

    async clickcontinueAction() {
        await this.continueAction.click()
    }

    async clickDoneButton() {
        await this.doneButton.click()
    }

    async clickCloseButton() {
        await this.closebutton.click()
    }
}
export default new GetStartedPage();


