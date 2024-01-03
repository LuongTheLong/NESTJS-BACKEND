import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UploadedFile, UseInterceptors, UploadedFiles, InternalServerErrorException } from "@nestjs/common";
import { EmployeesService } from "./employees.service";
import { Prisma } from "@prisma/client";
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiExtraModels, ApiOperation, ApiResponse, ApiTags, getSchemaPath } from "@nestjs/swagger";
import { CreateEmployeeDto } from "./dto/create_employee_dto";
import { AnyFilesInterceptor, FileFieldsInterceptor, FileInterceptor, FilesInterceptor } from "@nestjs/platform-express";

@Controller("employees")
@ApiTags("employees")
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  // @Post()
  // create(@Body() createEmployeeDto: CreateEmployeeDto) {
  //   return this.employeesService.create(createEmployeeDto);
  // }

  // @Get()
  // findAll(@Query('role') role?: 'ADMIN' | 'MEMBER' | 'USER') {
  //   return this.employeesService.findAll(role);
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.employeesService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateEmployeeDto: Prisma.EmployeesUpdateInput) {
  //   return this.employeesService.update(+id, updateEmployeeDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.employeesService.remove(+id);
  // }

  // @Post('upload-file')
  // @ApiExtraModels(CreateEmployeeDto)
  // @ApiBody({
  //   schema: {
  //     type: 'object',
  //     properties: {
  //       object: {
  //         $ref: getSchemaPath(CreateEmployeeDto),
  //       },
  //       // 👈  field names need to be repeated for swagger
  //       avatar: {
  //         type: 'array',
  //         items: { type: 'string' , format: 'binary'}
  //       },
  //       background: {
  //         type: 'array',
  //         items: { type: 'string' , format: 'binary'}
  //       },
  //     },
  //   },
  // })
  // @ApiConsumes('multipart/form-data')
  // @UseInterceptors(
  //   FileFieldsInterceptor([ // 👈  multiple files with different field names
  //     { name: 'avatar', maxCount: 5 },
  //     { name: 'background', maxCount: 5 },
  //   ]),
  // )
  // async uploadFile(@Body() createEmployeeDto: CreateEmployeeDto, @UploadedFiles() files: Express.Multer.File[]) {
  //   try {
  //     // Process your request here
  //     console.log(files); // Contains uploaded files information
  //     console.log(createEmployeeDto); // Contains other form data

  //     // Your business logic here

  //     return { success: true, message: 'Employee created successfully' };
  //   } catch (error) {
  //     console.error(error);
  //     throw new InternalServerErrorException('Internal Server Error');
  //   }
  // }
}
