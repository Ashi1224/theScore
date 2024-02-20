import LoginPage from '../pageobjects/login.page.js'
import HomePage from '../pageobjects/home.page.js'
import GetStartedPage from '../pageobjects/getStarted.page.js'
import LeaguesPage from '../pageobjects/leagues.page.js'
import MyAccountPage from '../pageobjects/myAccount.page.js'


const games = {
    NFL: {
        "game": "NFL",
        "standings": ['PLAYOFFS', 'AFC', 'NFC', 'OVERALL', 'WILDCARD'],
        "leaders": ['Passing Yards', 'Passing Touchdowns']
    },
    NHL: {
        "game": "NHL",
        "standings": ['DIVISION', 'WILD CARD', 'CONFERENCE', 'OVERALL'],
        "leaders": ['Points', 'Goals Scored']
    },
    MLB: {
        "game": "MLB",
        "standings": ['CACTUS', 'GRAPEFRUIT'],
        "leaders": ['AL LEADERS', 'NL LEADERS', 'MLB LEADERS']
    },
    NBA: {
        "game": "NBA",
        "standings": ['CONFERENCE', 'DIVISION', 'OVERALL'],
        "leaders": ['Points per Game', 'Rebounds per Game', 'Assists per Game', 'Steals per Game', 'Blocks per Game']
    },
    NCAAFootball: {
        "game": "NCAA Football",
        "standings": ['STANDINGS', 'PLAYOFF', 'AP TOP 25', 'COACHES'],
        "leaders": ['Passing Yards', 'Passing Touchdowns', 'Receiving Yards', 'Receiving Touchdowns']
    },

}

describe('My Login application', () => {
    it('Score Get Started', async () => {
        await GetStartedPage.clickGetStarted()
        await GetStartedPage.clickNflButton()
        await GetStartedPage.clickOnContinue()
        await GetStartedPage.clickAllowLoctaion()
        await GetStartedPage.clickWhileUsingTheApp()
        await GetStartedPage.clickFollowIcon()
        await GetStartedPage.clickcontinueAction()
        await GetStartedPage.clickDoneButton()
        await GetStartedPage.clickCloseButton()
    })



    it('should login with valid credentials', async () => {
        await HomePage.clickProfileIcon()
        await LoginPage.login('parte.ashi24@gmail.com', 'shadow12')
        await MyAccountPage.verifyEmailHeader()
        await HomePage.clickNavigateUp()
    })

    for (let sport in games) {
        it(`should  be able to verify ${sport} League`, async () => {

            let sportValues = games[sport];
            await LoginPage.navigateToLeagues()
            await LeaguesPage.clickEditFavouriteLeagues()
            await LeaguesPage.clickSaveFavouriteLeagues()
            await LoginPage.openLeague(sportValues.game)
            await LoginPage.verifyLeagueTitle(sportValues.game)
            await LeaguesPage.clickOnStandings()
            sportValues.standings.forEach(async (standing) => {
                await LeaguesPage.clickOnStandingCategories(standing)
                await LeaguesPage.verifyStandingCategories(standing)
            })

            await LeaguesPage.clickOnLeaders()
            sportValues.leaders.forEach(async (leader) => {
                await LeaguesPage.clickOnLeaderCategories(leader)
                await LeaguesPage.verifyLeaderCategories(leader)
            })
            await LoginPage.navigateToLeagues()
        })

    }
})