import { NestFactory } from '@nestjs/core';
import { CorsOptions } from "@nestjs/common/interfaces/external/cors-options.interface";

import { AppModule } from './app.module';

const corsOptions: CorsOptions = {
  origin: 'http://localhost:4200',
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(corsOptions);
  await app.listen(3000);
}
bootstrap();
