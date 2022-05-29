it('returns an OK status when we hit /api/user/signin/', () => {
    cy.request('GET', 'localhost:4000/api/user/signin/')
    .then((response) =>{
        expect(response.status).to.eq(200);
    })
});