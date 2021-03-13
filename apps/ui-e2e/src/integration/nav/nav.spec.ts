describe('ui: Nav component', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=nav--primary&knob-githubLink=&knob-logoLabel=&knob-navItems'
    )
  );

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to ui!');
  });
});
