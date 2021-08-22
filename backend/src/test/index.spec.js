const request = require("supertest");
const app = require("../server");

describe("Test tag routes", () => {
  it("should return 200 tag ", async () => {
    const res = await request(app).get("/tag/books");
    expect(res.status).toBe(200);
  });

  it("should return 35 books", async () => {
    const res = await request(app).get("/tag/books");
    expect(res.body.length).toBe(35);
  });

  it("should return specified book", async () => {
    const res = await request(app).get("/tag/book/1WHexRrC5v");
    expect(res.body.name).toBe("O Xará");
  });

  it("should return 404 not found book", async () => {
    const res = await request(app).get("/tag/book/teste123");
    expect(res.status).toBe(404);
    expect(res.text).toBe(`{"message":"O livro não foi encontrado"}`);
  });
});

describe("Test Good Read route", () => {
  it("should return 200", async () => {
    const res = await request(app).get("/goodreads/books/9788525063557");
    expect(res.status).toBe(200);
    expect(res.body[0].id).toBe(34136725);
  });
});
