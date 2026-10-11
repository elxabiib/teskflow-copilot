//test
import { describe, it, expect } from "vitest";
import {TaskService} from "../src/task";

describe("TaskService", () => {
  it("should add a new task", () => {
    const service = new TaskService();
    const task = service.add("Write chapter notes");
    expect(task).toEqual({ id: 1, title: "Write chapter notes", status: "todo" });
    });

  it("returns added tasks", () => {
    const service = new TaskService();
    service.add("First task");
    service.add("Second task");
    const tasks = service.list();
    expect(service.list()).toHaveLength(2);
  });

//     it("should list all tasks", () => {
//     const service = new TaskService();
//     service.add("Write chapter notes");
//     service.add("Review code");
//     const tasks = service.list();
//     expect(tasks).toEqual([
//       { id: 1, title: "Write chapter notes", status: "todo" },
//       { id: 2, title: "Review code", status: "todo" }
//     ]);
//   });


});