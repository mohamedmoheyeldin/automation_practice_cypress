/// <reference types="cypress" />

class ProductPage {

    productOptionsBox(){
        return cy.get('[id="buy_block"]')
    }

    productPrice(){
        return cy.get('[itemprop=\'price\']')
    }

    quantity(){
        return cy.get('#quantity_wanted')
    }

    size(){
        return cy.get('#group_1')
    }

    addToCartButton(){
        return cy.get('#add_to_cart')
    }

    popUpWindowLeft(){
        return cy.get('.layer_cart_product')
    }

    popUpWindowRight(){
        return cy.get('.layer_cart_cart')
    }

    popUpWindowAddToCartConfirmationText(){
        return cy.get('.layer_cart_product > h2')
    }

    ProceedToCheckoutButton(){
        return cy.get('.button-medium > span')
    }




}

export default ProductPage