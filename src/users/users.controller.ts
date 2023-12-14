import { Body, Controller, Param, Patch, Post, Put, Get } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto  } from './dto/update-user.dto';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
  } from '@nestjs/swagger';

@Controller('users')
@ApiBearerAuth()
@ApiTags('users')
export class UsersController {
    @Get() // GET /users
    getListAll(){
        return true;
    }


    @Post() // POST /users
    @ApiOperation({ summary: 'Create user' })
    createUser(@Body() CreateUserInput: CreateUserDto){
        return { CreateUserInput };
    }

    @Put(':id') // PUT /users/:id
    updateUser(@Param('id') id:string, @Body() UpdateUserInput: UpdateUserDto) {
        return {id, ...UpdateUserInput};
    }
}
