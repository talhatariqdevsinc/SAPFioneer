import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { sapPOM } from "../../support/pages/functional"

Given("user navigates to website", () => {
  cy.visitWebsite()
})

When('user navigates to homepage and can see bookmarks are visible', () => {
  sapPOM.getBookmarks()
})

When('user hovers over the Finance & ESG bookmark', () => {
  sapPOM.getFinanceAndESG()
    .trigger('mouseover')
    .click()
})

And('user clicks on the Financial Control option', () => {
  sapPOM.getFinanceControl()
    .contains('Financial Control')
    .click({ force: true })
})

Then('user is redirected to Financial Control page', () => {
  sapPOM.getURL()
    .should('include', '/finance-esg/financial-control/')
})

And('user clicks on the Get in touch button', () => {
  sapPOM.getInTouchButton()
    .first().click()
})

Then('user is redirected to the contact page', () => {
  sapPOM.getURL()
    .should('include', '/contact/')
})

And('user clicks on empty contact form click Submit button', () => {
  sapPOM.getForm()
})
