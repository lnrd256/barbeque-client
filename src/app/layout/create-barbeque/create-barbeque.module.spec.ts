import { CreateBarbequeModule } from './create-barbeque.module';

describe('CreateBarbequeModule', () => {
  let createBarbequeModule: CreateBarbequeModule;

  beforeEach(() => {
    createBarbequeModule = new CreateBarbequeModule();
  });

  it('should create an instance', () => {
    expect(createBarbequeModule).toBeTruthy();
  });
});
