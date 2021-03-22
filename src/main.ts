import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { text } from 'body-parser';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(text());
  const configService = app.get(ConfigService);
  const servicePort = configService.get('SVC_PORT');
  const port = (servicePort ? servicePort : 3000);
  app.listen(port).then(() => console.log(`Service Started and Listening on Port=${port}`));
}
bootstrap();
