import { UseGuards } from "@nestjs/common/decorators/core/use-guards.decorator";
import { AuthGuard } from "@nestjs/passport/dist/auth.guard";

export const Auth = () => UseGuards(AuthGuard('jwt'))