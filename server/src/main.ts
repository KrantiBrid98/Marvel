import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  let PORT = process.env.NODE_ENV === `development` ? 8080 : 'http://marvel/comment' 
  await app.listen(PORT);
}
bootstrap();
