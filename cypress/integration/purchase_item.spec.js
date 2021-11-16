/// <reference types="cypress" />

const userinfo = require('../fixtures/user_information.json')
const products = require('../fixtures/products.json')
const ProductPage = require("../support/pages/ProductPage");
const productPage = new ProductPage()


context('Purchase item', () => {

    userinfo.forEach((loginInfo) => {
    it('Purchase one item with login', () => {
        cy.login( loginInfo.emailAddress,loginInfo.password,loginInfo.accountName);
        cy.searchForProduct(products.items.dress.searchKeyWord)
        cy.firstSearchResultsProductMoreButton(products.items.dress.expectedItemResult).click()
        productPage.productOptionsBox().should('be.visible')
        productPage.productPrice().should('have.text',products.items.dress.price)
        productPage.quantity().clear().type('5')
        productPage.size().select('3')
        productPage.addToCartButton().click()
        productPage.popUpWindowLeft().should('be.visible')
        productPage.popUpWindowRight().should('be.visible')
        productPage.popUpWindowAddToCartConfirmationText().should('contain.text','Product successfully added to your shopping cart')
        productPage.ProceedToCheckoutButton().click()
    })
    })

})
