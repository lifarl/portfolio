describe('ui: HeaderImage component', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=headerimage--primary&knob-children')
  );

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to ui!');
  });
});
