/// <reference types="cypress" />

class HomePage {

    logo(){
        return cy.get('[class="logo img-responsive"]')
    }

    visibleUserName(){
        return cy.get('[title="View my customer account"]')
    }

    footer(){
        return cy.get('footer#footer > .row')
    }

    signInButton(){
        return cy.get('[title="Log in to your customer account"]')
    }

    signOutButton(){
        return cy.get('[title="Log me out"]')
    }

    searchBox(){
        return cy.get('[id="searchbox"]')
    }

    searchResultHeaderText(){
        return cy.get('[class="lighter"]')
    }


}

export default HomePage