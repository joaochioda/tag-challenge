/* eslint-disable no-undef */
import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import Home from "../Home";
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
