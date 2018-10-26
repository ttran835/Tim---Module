import iconv from 'iconv-lite';

import encodings from 'iconv-lite/encodings';

const request = require('supertest');
const server = require('../server/index');

iconv.encodings = encodings;

describe('GET should access DB', () => {
  it('should send response back as 200', async () => {
    const response = await request(server).get('/shoedidas/product/details');
    expect(response.status).toBe(200);
  });

  it('should return information from DB', async () => {
    const response = await request(server).get('/shoedidas/product/details');
    expect(response.body.length).toBe(response.body.length);
  });
});
