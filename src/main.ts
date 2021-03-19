import { NestFactory } from '@nestjs/core';
import { text } from 'body-parser';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(text());
  await app.listen(3000);
}
bootstrap();
