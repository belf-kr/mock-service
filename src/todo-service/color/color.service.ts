import { Injectable } from "@nestjs/common";

function randomColor(): string {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
@Injectable()
export class ColorService {
  async getAllColors(): Promise<string[]> {
    const colors = new Array<string>();

    for (let index = 0; index < 10; index++) {
      colors.push(randomColor());
    }

    return colors;
  }
}
