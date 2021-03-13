describe('ui: SocialWidget component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=socialwidget--primary&knob-githubLink='));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ui!');
    });
});
