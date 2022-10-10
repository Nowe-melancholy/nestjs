import { applyDecorators, CanActivate, ExecutionContext, UseGuards } from "@nestjs/common"

export const ClassDecorator = () => {
    console.log('これは実行される')
    return applyDecorators(UseGuards(ClassCanActivate));
}

class ClassCanActivate implements CanActivate {
    canActivate(context: ExecutionContext) {
        console.log('これは実行されない')
        return false;
    }
} 