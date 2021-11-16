// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


import Home_page from "./pages/HomePage";
import AuthenticationPage from "./pages/AuthenticationPage";
import MyAccountPage from "./pages/MyAccountPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import userinfo from "../fixtures/user_information.json";

const homePage = new Home_page()
const authPage = new AuthenticationPage()
const myAccPage = new MyAccountPage()
const mySearchResultsPage = new SearchResultsPage()


beforeEach(() => {
        cy.visit('/')
        cy.title().should('eq', 'My Store')
        homePage.logo().should('be.visible')
        homePage.footer().should('be.visible')
})

/*beforeEach(() => {
    cy.login(loginInfo.emailAddress,loginInfo.password,loginInfo.accountName)
})*/


afterEach(() => {
    homePage.signOutButton().click()
    homePage.signOutButton().should('not.exist')
})


Cypress.Commands.add('login', (emailAddress, password, actualUsername) => {
    homePage.signInButton().click()
    authPage.miniNavigationBar().should('be.visible').and('contain.text','Authentication')
    authPage.pageHeaderTitle().should('be.visible').and('contain.text','Authentication')
    authPage.emailAddressTextBox().type(emailAddress,{ log: false })
    authPage.passwordTextBox().type(password, { log: false })
    authPage.loginButton().click()
    authPage.miniNavigationBar().should('be.visible').and('have.text','My account')
    myAccPage.pageHeaderTitle().should('be.visible').and('have.text','My account')
    homePage.visibleUserName().should('have.text',actualUsername)
    homePage.signOutButton().should('be.visible')
})

Cypress.Commands.add('searchForProduct', (ProductName) => {
    homePage.searchBox().type(ProductName).submit()
    homePage.searchResultHeaderText().should('contain.text',ProductName)
})

Cypress.Commands.add('firstSearchResultsProductMoreButton', (ProductNameOrTitle) => {
    mySearchResultsPage.firstItemOnTheResults().should('be.visible').and('contain.text',ProductNameOrTitle)
    mySearchResultsPage.firstItemOnTheResults().trigger('mouseover')
    mySearchResultsPage.clickOnFirstSearchResultsProductMoreButton().should('be.visible')
})











