import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor"
import HomePageObjects from "../../e2e/pageObjects/homePageObjects"
const homePage = new HomePageObjects()

Given("I am opening a baseURL", () => {
    cy.visit("/")
})

When("I enter {string} in searchBox", (searchItem) => {
    homePage.verifySearchItem(searchItem)
})

Then("I verify the greenKart logo on homePage", () => {
    homePage.verifyHomePagelogo()
})

Then("I verify the {string} element on HomePage", (element) => {
    homePage.verifyElementOnHomePage(element)
})

Then("I verify following link text in Header", (data) => {
    homePage.verifyNavigationLinks(data)
})