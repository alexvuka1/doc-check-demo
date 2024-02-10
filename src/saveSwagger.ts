import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { writeFileSync } from 'fs';

const saveSwagger = async () => {
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('doc-check-demo')
        .setDescription('The doc-check-demo API description')
        .setVersion('1.0')
        .build();
    const document = SwaggerModule.createDocument(app, config);

    writeFileSync('./assets/swagger.json', JSON.stringify(document));
};
saveSwagger();