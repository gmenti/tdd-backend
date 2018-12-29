const supertest = require('supertest');
const chai = require('chai');
const chaiHttp = require('chai-http');
const nock = require('nock');
const server = require('../../src/app');

const expect = chai.expect;
const should = chai.should();
const request = supertest(server);

chai.use(chaiHttp);

module.exports = {
    chai,
    should,
    request,
    expect,
    nock,
};
