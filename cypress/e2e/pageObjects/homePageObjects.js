import { homePageLocators } from "../locators/homePageLocators";

class HomePageObjects {

    verifyHomePagelogo() {
        cy.get(homePageLocators.greenKarLogo).should('be.visible');
    }

    verifyProduct(productName) {
        cy.get(homePageLocators.searchResult).each(($el, index, $list) => {
            const textVeg = $el.find(homePageLocators.productName).text();
            if (textVeg.includes(productName)) {
                homePageLocators.productImage.should('be.visible');
                homePageLocators.productStepper.should('be.visible');
                homePageLocators.productActionButton.should('be.visible');
            }
        })
    }

    addProductToCart(productName, quantity) {
        cy.get(homePageLocators.searchResult).each(($el, index, $list) => {
            const textVeg = $el.find(homePageLocators.productName).text();
            if (textVeg.includes(productName)) {
                cy.wrap($el).find(homePageLocators.productStepper).clear().type(quantity);
                cy.wrap($el).find(homePageLocators.productActionButton).click();
            }
        })
    }

    verifySearchItem(searchItem) {
        cy.get(homePageLocators.searchBox).clear().type(searchItem);
        cy.get(homePageLocators.searchButton).click();
    }

    verifyElementOnHomePage(elementName) {
        const locator = homePageLocators[elementName];
        cy.get(locator).should('be.visible');
    }

    verifyProductCountOnSearchResult(productCount) {
        cy.get(homePageLocators.searchResult).should('have.length', productCount);
    }

    verifyFollowingElementOnHomePage(DataTable) {
        const elements = DataTable.rawTable.flat();
        elements.array.forEach(element => {
            const locator = homePageLocators[elementName];
            cy.get(locator).should('be.visible');
        });
    }

    verifyNavigationLinks(linksVisibleText) {
        cy.verifyLinksTextsUsingDataTable(linksVisibleText);
    }

}

export default HomePageObjects;