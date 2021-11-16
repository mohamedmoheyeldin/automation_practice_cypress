/// <reference types="cypress" />

class MyAccountPage {

    miniNavigationBar(){
        return cy.get('[class="navigation_page"]')
    }

    pageHeaderTitle(){
        return cy.get('[class="page-heading"]')
    }




}

export default MyAccountPage