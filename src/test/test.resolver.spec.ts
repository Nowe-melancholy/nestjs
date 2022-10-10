import { GUARDS_METADATA } from '@nestjs/common/constants';
import { TestResolver } from './test.resolver';

describe('デコレータのテスト', () => {
  const resolver = new TestResolver();

  it('TestResolver', () => {
    const hoge = Reflect.getMetadata(GUARDS_METADATA, TestResolver)
    const fuga = Reflect.getMetadata(GUARDS_METADATA, resolver.method1)
    const piyo = Reflect.getMetadata(GUARDS_METADATA, resolver.method2)

    expect(hoge[0].name).toEqual('ClassCanActivate');

    expect(fuga[0].constructor.name).toEqual('MethodCanActivate');
    expect(fuga[0].args).toEqual('fuga');

    expect(piyo[0].constructor.name).toEqual('MethodCanActivate');
    expect(piyo[0].args).toEqual('piyo');
  });
});
