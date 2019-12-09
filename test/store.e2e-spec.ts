import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { StoreData } from './../src/data/store-data';

describe('StoreController (e2e)', () => {
  let app: INestApplication;
  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('api/stores (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/stores')
      .expect(200)
      .expect('Hello World!');
  });

  it(`api/stores (POST)`, async () => {
    return await request(app.getHttpServer())
      .post('/api/stores')
      .send(new StoreData().data())
      .expect(200);
  });
});
