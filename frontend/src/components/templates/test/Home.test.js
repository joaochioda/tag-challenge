/* eslint-disable no-undef */
import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import ReactRouter from "react-router";

import Home from "../Home";
import Book from "../Book";

import Theme from "../../../styles/theme";
import axios from "axios";

import { dataTag } from "./tagjson";
import { dataGoodRead } from "./goodReadjson";

jest.mock("axios", () => {
  return {
    get: jest.fn(() => Promise.resolve()),
    create: jest.fn(function () {
      return this;
    }),
  };
});

describe("Home", () => {
  beforeEach(async () => {
    axios.get.mockImplementation((url) => {
      switch (url) {
        case "/tag/books":
          return Promise.resolve({ data: dataTag });
        case "/goodreads/books/9788525063557,9788520926499,9788573262711":
          return Promise.resolve({ data: dataGoodRead });
        default:
          return Promise.reject(new Error("not found"));
      }
    });
    await waitFor(async () =>
      render(
        <Theme>
          <Home />
        </Theme>
      )
    );
  });

  test("Should render 3 books", async () => {
    const element = screen.getAllByTestId("book");
    expect(element.length).toBe(3);
  });

  test("Should render sorted books", async () => {
    const element = screen.getAllByTestId("book");
    expect(element[0].textContent).toEqual("TAG4.39GOODREADS3.99");
    expect(element[1].textContent).toEqual("TAG3.83GOODREADS3.90");
    expect(element[2].textContent).toEqual("TAG4.30GOODREADS4.18");
  });
});

describe("Book", () => {
  beforeEach(async () => {
    axios.get.mockImplementation((url) => {
      switch (url) {
        case "/tag/book/1WHexRrC5v":
          return Promise.resolve({ data: dataTag[0] });
        case "/goodreads/books/9788525063557":
          return Promise.resolve({ data: dataGoodRead[0] });
        default:
          return Promise.reject(new Error("not found"));
      }
    });
    jest
      .spyOn(ReactRouter, "useParams")
      .mockReturnValue({ bookId: dataTag[0].objectId });

    await waitFor(async () =>
      render(
        <Theme>
          <Book />
        </Theme>
      )
    );
  });

  test("Should render title", async () => {
    const title = screen.getByText("O Xará");
    expect(title).toBeTruthy();
  });

  test("Should render img", async () => {
    const img = screen.getByRole("img");
    expect(img.src).toEqual(dataTag[0].cover.url);
  });

  test("Should render pages", async () => {
    const pages = screen.getByText("336 páginas");
    expect(pages).toBeTruthy();
  });
});
