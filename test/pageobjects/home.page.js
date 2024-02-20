
class HomePage {
    get profileIcon() {
        return $('.android.widget.ImageButton')
    }

    get navigateUp() {
        return $('//android.widget.ImageButton[@content-desc="Navigate up"]')
    }

    async clickProfileIcon() {
        await this.profileIcon.click()
    }

    async clickNavigateUp() {
        await this.navigateUp.click()
    }
}
export default new HomePage();
