/// <reference types="cypress" />

class SearchResultsPage {

    firstItemOnTheResults(){
        return cy.get(':nth-child(1) > .product-container')

    }

    clickOnFirstSearchResultsProductMoreButton(){
        return cy.get('li:nth-of-type(1) [title=\'View\'] span')
    }




}

export default SearchResultsPage