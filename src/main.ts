import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import {
  DocumentBuilder,
  SwaggerModule,
} from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  app.setGlobalPrefix('api');

  if (process.env.NODE_ENV === 'development') {
    const options = new DocumentBuilder()
    .setTitle('Nest App')
    .setDescription('The Nest API description')
    .setVersion('1.0')
    .setBasePath('api')
    .addBearerAuth()
    .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('/docs', app, document);

  }

  await app.listen(3000);
}
bootstrap();
