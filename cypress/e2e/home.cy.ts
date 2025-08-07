
describe('Hotel search flow', () => {
  context('1080p resolution', () => {
      beforeEach(() => {
        cy.viewport(1920, 1080);
    })
    
    it('End to end flow', () => {
      cy.visit('/');
      

      // Selects location, dates and guests and trigger search

      cy.intercept('GET', '**/Destinations/getAllDestinations').as('getDestinations');
      // Select Singapore as location
      cy.get('.choices__inner > .choices__list > .choices__item')
        .should('be.visible')
        .type("Singapore");

      cy.get('.choices__list--dropdown .choices__item')
        .eq(0)
        .click({ force: true });

      // Select Dates
      cy.get('.form-control-border > .form-control')
        .should('be.visible')
        .click();

      cy.get('[aria-label="August 17, 2025"]').click()

      cy.get('.form-control-border > .form-control')
        .should('be.visible')
        .click();

      cy.get('[aria-label="August 18, 2025"]').click()


      // Select Guests and room
      cy.get('[data-testid="guest-room-toggle"]').click();
      cy.get('.adult-add').click();
      cy.get('.room-add').click();

      cy.get('body').click(0, 0);


      // Prepare for feature 2 api intercepts
      cy.intercept('GET', '**/Destinations/getAllDestinations').as('getDestinations');
      cy.intercept('GET', '**/api/hotels/syncByCity*').as('syncByCity');
      cy.intercept('GET', '**/hotels/getHotelsByCity*').as('getHotelsByCity');
      cy.intercept('GET', '**/api/hotels/prices*').as('getHotelPrices');
      
      // Search
      cy.get('.btn-position-md-middle > .icon-lg').click();
      

      // Feature 2
      
      cy.wait('@getHotelPrices', { timeout: 20000 });


      // Filter 4 stars
      cy.get(':nth-child(4) > .btn').click();


      cy.get('.MuiSlider-root').then($slider => {
        const { left, width } = $slider[0].getBoundingClientRect();

        cy.get('.MuiSlider-thumb').eq(0)
          .trigger('mousedown', { button: 0, force: true })
          .trigger('mousemove', { clientX: left + width * 0.8, force: true })
          .trigger('mouseup', { force: true });
      });
      
      cy.get(':nth-child(5) > .form-check-label').click();

      //Doesnt work
      // cy.get('.d-flex > .btn-primary').click();


      // Prepare for feature 3 api intercepts
      cy.intercept('GET', '**/api/hotels/*').as('getHotelDetails');
      cy.intercept('GET', '**/api/hotels/*/price*').as('getHotelPrice');

      // Select Room 
      cy.get(':nth-child(1) > .g-0 > .col-md-7 > .py-md-2 > .d-sm-flex > .mt-3 > .mb-0').click();


      // Feature 3
      cy.wait('@getHotelPrices', { timeout: 20000 });

      // Click Images and close
      cy.get('.card-grid-lg').click()
      cy.get('.gnext').click({ force: true });  
      cy.get('.glightbox-close').click({ force: true }); 



      // // Select Singapore as location
      // cy.get('.choices__inner > .choices__list > .choices__item')
      //   .should('be.visible').type("Singapore")

      // cy.get('.choices__list--dropdown .choices__item')
      //   .eq(0)
      //   .click({ force: true });

      // // Select Dates
      // cy.get('.form-control-border > .form-control')
      //   .should('be.visible')
      //   .click()

      // cy.get('[aria-label="August 17, 2025"]').click()

      // cy.get('.form-control-border > .form-control')
      //   .should('be.visible')
      //   .click()

      // cy.get('[aria-label="August 29, 2025"]').click()


      // // Select Guests and room
      // cy.get('[data-testid="guest-room-toggle"]').click();
      // cy.get('.adult-add').click();
      // cy.get('.room-add').click();

      // cy.get('body').click(0, 0);
      
      // // Search
      // cy.get('.btn-position-md-middle > .icon-lg').click
      
    })
  })
})
