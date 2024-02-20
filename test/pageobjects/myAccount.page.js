class MyAccountPage {
    get emailHeader() {
        return $('//android.widget.TextView[@resource-id="com.fivemobile.thescore:id/headline"]')
    }

    async verifyEmailHeader() {
        await this.emailHeader.waitForDisplayed({ timeout: 10000 })

    }
}
export default new MyAccountPage()