import { TestBed, inject } from '@angular/core/testing';

import { ProdutoService } from './produto.service';

describe('https://a-virtual-servidor.herokuapp.com/ProdutoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProdutoService]
    });
  });

  it('should be created', inject([ProdutoService], (service: ProdutoService) => {
    expect(service).toBeTruthy();
  }));
});
