Cypress.Commands.add(
  'moveAndReleaseMapFrom',
  { prevSubject: 'element' },
  (element, { x, y }) => {
    const canvas = element.get(0);
    const rect = canvas.getBoundingClientRect();
    const absX = rect.left + x;
    const absY = rect.top + y;
    const width = rect.width;
    const height = rect.height; 

    canvas.dispatchEvent(
      new MouseEvent('mousedown', {
        clientX: width*0.5,
        clientY: height*0.5,
        bubbles: true,
      })
    );

    canvas.dispatchEvent(
      new MouseEvent('mousemove', {
        clientX: absX,
        clientY: absY,
        bubbles: true,
      })
    );
    canvas.dispatchEvent(
      new MouseEvent('mouseup', {
        clientX: absX,
        clientY: absY,
        bubbles: true,
      })
    );

    canvas.dispatchEvent(
      new MouseEvent('mousedown', {
        clientX: width*0.5,
        clientY: height*0.2,
        bubbles: true,
      })
    );

    canvas.dispatchEvent(
      new MouseEvent('mouseup', {
        clientX: width*0.5,
        clientY: height*0.2,
        bubbles: true,
      })
    );
  }
);

describe('Hotel search flow', () => {
  context('1080p resolution', () => {
      beforeEach(() => {
        cy.viewport(1920, 1080);
    })
    
    it('End to end flow', () => {
      cy.visit('/');
      

      // Feature 1

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

      cy.get('[aria-label="August 28, 2025"]').click()


      cy.get('[aria-label="August 29, 2025"]').click()


      // Select Guests and room
      cy.get('[data-testid="guest-room-toggle"]').click();
      cy.get('.adult-add').click();
      cy.get('.adult-add').click();
      cy.get('.room-add').click();
      cy.get('.room-add').click();

      cy.get('body').click(0, 0);


      // Prepare for Feature 2 API intercepts
      cy.intercept('GET', '**/Destinations/getAllDestinations').as('getDestinations');
      cy.intercept('GET', '**/api/hotels/syncByCity*').as('syncByCity');
      cy.intercept('GET', '**/hotels/getHotelsByCity*').as('getHotelsByCity');
      cy.intercept('GET', '**/api/hotels/prices*').as('getHotelPrice');
      
      // Search to go Feature 2
      cy.get('.btn-position-md-middle > .icon-lg').click();
      
      // Feature 2
      
      // Wait for getHotelPrice API call
      cy.wait('@getHotelPrice', { timeout: 25000 });

      // Test filter stars rating
      cy.get(':nth-child(4) > .btn').click();

      // Test guest rating slider
      cy.get('.MuiSlider-root').then($slider => {
        const { left, width } = $slider[0].getBoundingClientRect();

        cy.get('.MuiSlider-thumb').eq(0)
          .trigger('mousedown', { button: 0, force: true })
          .trigger('mousemove', { clientX: left + width * 0.8, force: true })
          .trigger('mouseup', { force: true });
      });
      
      // Test price tange
      cy.get(':nth-child(5) > .form-check-label').click();

      // Tets filter button
      // cy.get('.d-flex > .btn-primary').click();


      // Prepare for Feature 3 API intercepts
      cy.intercept('GET', '**/api/hotels/*').as('getHotelDetails');
      cy.intercept('GET', '**/api/hotels/*/price*').as('getHotelPrice');
      
      // Select Room to go to Feature 3
      cy.get(':nth-child(1) > .g-0 > .col-md-7 > .py-md-2 > .d-sm-flex > .mt-3 > .mb-0').click();

      // Feature 3

      // Wait for getHotelPrice API call
      cy.wait('@getHotelPrice', { timeout: 10000 });

      // Test opening of images and close
      cy.get('.card-grid-lg').click()
      cy.get('body').click(0, 0);

      cy.on('uncaught:exception', (err) => {
        if (err.message.includes('Request failed with status code 404')) {
          return false;
        }
      });

      // Test small map dragging and recentre
      cy.get('.leaflet-container').moveAndReleaseMapFrom({ x: 50, y: 50 });
      cy.get('.leaflet-container > .btn').click();

      // Test opening of bigger map
      cy.get('.card-body > .btn').click();
      cy.get('[style="cursor: pointer; position: relative; height: 80%; width: 80%; border-radius: 16px; overflow: hidden;"] > .leaflet-container').moveAndReleaseMapFrom({ x: 50, y: 50 });
      cy.get('.leaflet-container > .btn').click();
      cy.get('[style="cursor: pointer; position: absolute; top: 20px; right: 20px; z-index: 2000; border: none; background: white; color: black;"]').click();

      // Select Room to goto Feature 4
      cy.get('.mt-3 > .mb-0').click();

      // Feature 4

      // Hotel and Room Details
      cy.get('.form-control').eq(0).type('Late check in – 30 Mins');
      cy.get('.btn-primary').click();

      // Test Guest Details details

      // Main Guest Details
      cy.get('.col-12 > :nth-child(1) > .card-body > .row > .col-md-2 > .form-size-lg > .form-select')
        .select('Mr');

      cy.get('.col-12 > :nth-child(1) > .card-body > .row > :nth-child(2) > .form-control-lg')
        .type("Justin");
      cy.get('.col-12 > :nth-child(1) > .card-body > .row > :nth-child(3) > .form-control-lg')
        .type("Kok")
      cy.get('.col-12 > :nth-child(1) > .card-body > .row > .col-md-4 > .form-control-lg')
        .type("58 Somapah Rd")
      cy.get('.col-12 > :nth-child(1) > .card-body > .row > :nth-child(5) > :nth-child(1) > .form-control-lg')
        .type("justinkok28@gmail.com")
      cy.get('.col-12 > :nth-child(1) > .card-body > .row > :nth-child(6) > .form-control-lg')
        .type("+6583021575")
      
      // Adult 1
      cy.get(':nth-child(2) > :nth-child(1) > .card-body > .row > .col-md-2 > .form-size-lg > .form-select')
        .select("Mr")
      cy.get(':nth-child(2) > :nth-child(1) > .card-body > .row > :nth-child(2) > .form-control-lg')
        .type("Justin");
      cy.get(':nth-child(2) > :nth-child(1) > .card-body > .row > :nth-child(3) > .form-control-lg')
        .type("Kok")
      cy.get(':nth-child(2) > :nth-child(1) > .card-body > .row > .col-md-4 > .form-control-lg')
        .type("Singapore")
      cy.get(':nth-child(2) > :nth-child(1) > .card-body > .row > :nth-child(5) > div > .form-control-lg')
        .type("justinkok28@gmail.com")
      cy.get(':nth-child(2) > :nth-child(1) > .card-body > .row > :nth-child(6) > .form-control-lg')
        .type("+6583021575")
      
      // Adult 2
      cy.get(':nth-child(2) > .card-body > .row > .col-md-2 > .form-size-lg > .form-select')
        .select("Mrs")
      cy.get(':nth-child(2) > .card-body > .row > :nth-child(2) > .form-control-lg')
        .type("Rachel");
      cy.get(':nth-child(2) > .card-body > .row > :nth-child(3) > .form-control-lg')
        .type("Tan")
      cy.get(':nth-child(2) > .card-body > .row > .col-md-4 > .form-control-lg')
        .type("Singapore")
      cy.get(':nth-child(2) > .card-body > .row > :nth-child(5) > div > .form-control-lg')
        .type("racheltan28@gmail.com")
      cy.get(':nth-child(2) > .card-body > .row > :nth-child(6) > .form-control-lg')
        .type("+6583243933")
      
      // Child 1
      cy.get(':nth-child(3) > .card-body > .row > .col-md-2 > .form-size-lg > .form-select')
        .select("Mr")
      cy.get(':nth-child(3) > .card-body > .row > :nth-child(2) > .form-control-lg')
        .type("Luna");
      cy.get(':nth-child(3) > .card-body > .row > :nth-child(3) > .form-control-lg')
        .type("Li")
      cy.get(':nth-child(3) > .card-body > .row > .col-md-4 > .form-control-lg')
        .type("Singapore")
      cy.get(':nth-child(3) > .card-body > .row > :nth-child(5) > div > .form-control-lg')
        .type("lunali28@gmail.com")
      cy.get(':nth-child(3) > .card-body > .row > :nth-child(6) > .form-control-lg')
        .type("+6583133143")
      
      cy.get('.btn-primary').click();


      // Make Payment
      cy.get('.position-relative > .form-control')
        .type("4000056655665556")
      cy.get('[maxlength="2"]')
        .type("03");
      cy.get('.input-group > [maxlength="4"]')
        .type("2029")
      cy.get(':nth-child(3) > .form-control')
        .type("123")
      cy.get(':nth-child(4) > .form-control')
        .type("Justin Kok")

      cy.get('.btn-success').click();
      cy.on('uncaught:exception', (err) => {
        if (err.message.includes("Cannot read properties of undefined (reading 'words')")) {
          return false;
          }
        });
    })
  })
})
