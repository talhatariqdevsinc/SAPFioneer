Feature: SAP Pioneer Website

Scenario: Verify Bookmarks are Visible
	Given user navigates to website
	When user navigates to homepage and can see bookmarks are visible

Scenario: Verify Financial Control page
	Given user navigates to website
	When user hovers over the Finance & ESG bookmark
	And user clicks on the Financial Control option
	Then user is redirected to Financial Control page

Scenario: Verify Validation Messages
	Given user navigates to website
	And user clicks on the Get in touch button
	Then user is redirected to the contact page
	And user clicks on empty contact form click Submit button