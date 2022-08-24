import * as ReactDOM from "react-dom";
import { MemoryRouter, Router } from "react-router-dom";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import Layout from "../Layout";

describe("Layout component test", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    ReactDOM.render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>,
      container
    );
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("correctly renders the initial component ", () => {
    const div = container.querySelectorAll("div");
    expect(div).toHaveLength(6);
  });
  describe("layout is rendered", () => {
    test("should pass", () => {
      const history = createMemoryHistory({ initialEntries: ["/"] });
      render(
        <Router location={history.location} navigator={history}>
          <Layout />
        </Router>
      );
    });
  });
});
