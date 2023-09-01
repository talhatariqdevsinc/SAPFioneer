export class Sap {

	menuItems = [
		{ id: '29961', title: 'Banking' },
		{ id: '29972', title: 'Insurance' },
		{ id: '29979', title: 'Finance & ESG' },
		{ id: '29985', title: 'Services' },
		{ id: '26', title: 'Partners' },
		{ id: '26834', title: 'Company' },
		{ id: '26831', title: 'Resources' },
	]
	formFields = [
		{ selector: '.hs-firstname', validationMessage: 'Please complete this required field.' },
		{ selector: '.hs-lastname', validationMessage: 'Please complete this required field.' },
		{ selector: '.hs_email', validationMessage: 'Please complete this required field.' },
		{ selector: '.hs_country__new_', validationMessage: 'Please select an option from the dropdown menu.' },
		{ selector: '.hs_how_can_we_help_you_', validationMessage: 'Please complete this required field.' },
		{ selector: '.hs-dependent-field', validationMessage: 'Please complete this required field.' },
		{ selector: '.hs_error_rollup', validationMessage: 'Please complete all required fields.' },
	]

	getFinanceAndESG() {
		return cy.get('[id="header"]').find('[id="menu-item-29979"]')
	}
	getFinanceControl() {
		return cy.get('[id="header"]').find('.ux-menu-link__link')
	}
	getURL() {
		return cy.url()
	}
	getInTouchButton() {
		return cy.get('[id="header"]').find('.header-button')
	}
	getBookmarks() {
		this.menuItems.forEach((item) => {
			cy.get('[id="header"]').within(() => {
				cy.get(`[id="menu-item-${item.id}"]`)
					.find('[href="#"]')
					.should('be.visible')
					.and('have.text', item.title)
			})
		})
	}
	getForm() {
		let error = '.hs-error-msg'
		cy.get('iframe#hs-form-iframe-0').then(($iframe) => {
			const iframeDoc = $iframe.contents();
			cy.wrap(iframeDoc).within(() => {
				cy.get('[type="submit"]').click();
				this.formFields.forEach((field) => {
					if (field.selector == '.hs_error_rollup') {
						error = 'label'
					}
					cy.get(field.selector)
						.find(error)
						.should('be.visible')
						.and('have.text', field.validationMessage);
				})
			})
		})
	}
}

export const sapPOM = new Sap();
