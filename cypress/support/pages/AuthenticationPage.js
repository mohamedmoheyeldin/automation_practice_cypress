/// <reference types="cypress" />

class AuthenticationPage {

    miniNavigationBar(){
        return cy.get('[class="navigation_page"]')
    }

    pageHeaderTitle(){
        return cy.get('[class="page-heading"]')
    }

    emailAddressTextBox(){
        return cy.get('input#email')
    }

    passwordTextBox(){
        return cy.contains('Password').parent().find('input[type="password"]')
    }

    loginButton(){
        return cy.get('[id="SubmitLogin"]')
    }

}

export default AuthenticationPage