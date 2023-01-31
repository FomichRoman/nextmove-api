import { CurrentUser } from './../user/user.decorator';
import { Body, Controller, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CommentService } from './comment.service';
import { CommentDto } from './comment.dto';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post()
  @Auth()
   async upditeUser(@CurrentUser('id') id: string, @Body() dto: CommentDto) {
    return this.commentService.create(+id, dto)
  }
}
