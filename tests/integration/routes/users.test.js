const { request, expect } = require('../helpers');

describe('Users routes', () => {
    
    describe('Index', () => {
        it('should return 200 on call GET "/users"', async () => {
            const res = await request.get('/users');
            expect(res).to.have.status(200);
        });
    });
});
