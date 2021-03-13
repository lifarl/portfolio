describe('ui: ScrollArrow component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=scrollarrow--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to ui!');
  });
});
