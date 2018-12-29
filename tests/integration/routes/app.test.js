const { request, expect } = require('../helpers');

describe('App basic routes', () => {
    
    it('should return 204 on call "/"', async () => {
        const res = await request.get('/');
        expect(res).to.have.status(204);
    });

    it('should return 204 on call "/status"', async () => {
        const res = await request.get('/status');
        expect(res).to.have.status(204);
    });

    it('should return 404 on call invalid route "/yolo"', async () => {
        const res = await request.get('/yolo');
        expect(res).to.have.status(404);
    });
});
