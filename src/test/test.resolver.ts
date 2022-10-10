import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { ClassDecorator } from '../decorator/class.decorator';
import { MethodDecorator } from '../decorator/method.decorator';

@Resolver()
@ClassDecorator()
export class TestResolver {
    @Query()
    @MethodDecorator('fuga')
    method1(terget: any) { return true }

    @Mutation()
    @MethodDecorator('piyo')
    method2(terget: any) { return true }
}
