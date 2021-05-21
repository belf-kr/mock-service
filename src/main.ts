import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

let APP_PORT = 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  init();
  console.log(APP_PORT);
  await app.listen(APP_PORT);
}
bootstrap();

function init() {
  console.log(process.env.STAGES);
  if (!process.env.STAGES) {
    process.env.STAGES = "LOCAL";
    APP_PORT = 3001;
  }
}
