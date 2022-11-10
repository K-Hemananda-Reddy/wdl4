
const todoList = require("../todo");
const { all, add, markAsComplete, overdue, dueToday, dueLater } = todoList();

describe("suite of the todo list being tested", () => {
  // Before starting all tests
  beforeAll(() => {
    add({
      title: "Testing todo",
      dueDate: new Date().toLocaleDateString("en-CA"),
      completed: false,
    });
  });

  //add function
  test("trying to add a new todo to the list", () => {
    const getlength = all.length;
    add({
      title: "Testing todo",
      dueDate: new Date().toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(all.length).toBe(getlength + 1);
  });

  //markAsComplete function
  test("If completed mark the todo as complete", () => {
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  //overdue function
  test("Pending todod", () => {
    add({
      title: "Testing overdue",
      dueDate: new Date(
        new Date().setDate(new Date().getDate() - 1)
      ).toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(overdue().length).toBe(1);
  });

  //dueToday function
  test("todos todo today", () => {
    
    expect(dueToday().length).toBe(2);
  });

  //dueLater function
  test("todos to do later", () => {
    add({
      title: "Test todos to do later",
      dueDate: new Date(
        new Date().setDate(new Date().getDate() + 1)
      ).toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(dueLater().length).toBe(1);
  });
});