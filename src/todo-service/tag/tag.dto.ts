import { TagType } from "./tag.type";

export class TagDto implements TagType {
  id: number;

  value: string;
}
