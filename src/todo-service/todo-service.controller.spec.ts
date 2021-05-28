import { Test, TestingModule } from "@nestjs/testing";
import { TodoServiceController } from "./todo-service.controller";

describe("TodoServiceController", () => {
  let controller: TodoServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodoServiceController],
    }).compile();

    controller = module.get<TodoServiceController>(TodoServiceController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
