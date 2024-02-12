import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { writeFileSync } from 'fs';

const saveOAS = async () => {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('doc-check-demo')
    .setDescription('The doc-check-demo API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  writeFileSync('./openapi.json', JSON.stringify(document));
};
saveOAS();
