class LeaugesPage {

    get editFavouriteLeagues() {
        return $('//*[@text="Edit"]')
    }

    get saveFavouriteLeagues() {
        return $('//*[@text="Done"]')
    }

    get standings() {
        return $(`//*[@text="STANDINGS"]`)
    }

    get leaders() {
        return $(`//*[@text="LEADERS"]`)
    }

    async clickEditFavouriteLeagues() {
        await this.editFavouriteLeagues.click()
    }
    async clickSaveFavouriteLeagues() {
        await this.saveFavouriteLeagues.click()
    }

    async clickOnStandings() {
        await this.standings.click()
    }

    async clickOnLeaders() {
        await this.leaders.click()
    }

    async clickOnStandingCategories(standing) {
        await $(`//*[@text="${standing}"]`).click()
    }

    async verifyStandingCategories(standing) {
        expect(await $(`//*[@text="${standing}"]`)).toBeDisplayed();
    }

    async clickOnLeaderCategories(leader) {
        await $(`//*[@text="${leader}"]`).click()
    }

    async verifyLeaderCategories(leader) {
        expect(await $(`//*[@text="${leader}"]`)).toBeDisplayed();
    }
}

export default new LeaugesPage();
