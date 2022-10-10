import { applyDecorators, CanActivate, ExecutionContext, UseGuards } from "@nestjs/common"

export const MethodDecorator = (args: any) => {
    return applyDecorators(UseGuards(new MethodCanActivate(args)));
}

class MethodCanActivate implements CanActivate {
    constructor(private args: any) { }
    canActivate(context: ExecutionContext) {
        return false;
    }
} 