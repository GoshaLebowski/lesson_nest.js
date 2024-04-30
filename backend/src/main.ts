import {NestFactory} from '@nestjs/core';
import {AppModule} from './modules/app/app.module';
import {ConfigService} from '@nestjs/config';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import {ValidationPipe, HttpStatus, BadRequestException} from '@nestjs/common';
import {ValidationError} from 'class-validator';

class CustomValidationException extends BadRequestException {
    constructor(errors: ValidationError[]) {
        super(errors.map(error => Object.values(error.constraints)).join(', '));
    }
}

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const configService = app.get(ConfigService);
    const port = configService.get('port');

    app.useGlobalPipes(
        new ValidationPipe({
            exceptionFactory: (errors) => new CustomValidationException(errors),
            errorHttpStatusCode: HttpStatus.BAD_REQUEST,
        }),
    );

    const config = new DocumentBuilder()
        .setTitle(`Lesson API`)
        .setDescription(`This API is for lessons`)
        .setVersion('1.0')
        .addTag('API')
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    await app.listen(port);
}
bootstrap();
