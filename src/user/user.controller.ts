import { UserDto } from './user.dto';
import { Body, Controller, Get, HttpCode, Param, Patch, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CurrentUser } from './user.decorator';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get() 
  async getUsers() {
    return this.userService.getAll()
  }

  @Get('profile')
  @Auth()
  async getProfile(@CurrentUser('id') id: number) {
    return this.userService.byId(id)
  }

  @Get('by-id/:id')
  async getUser(@Param('id') id: string) {
    return this.userService.byId(+id)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put(':id')
  @Auth()
   async upditeUser(@Param('id') id: string, @Body() dto: UserDto) {
    return this.userService.updateUser(+id, dto)
  }

  @HttpCode(200)
  @Patch('subscribe/:channelId')
  @Auth()
   async subcribeToChannel(@CurrentUser('id') id: number, @Param('channelId') channelId: string) {
    return this.userService.subscribe(id, +channelId)
  }
}
