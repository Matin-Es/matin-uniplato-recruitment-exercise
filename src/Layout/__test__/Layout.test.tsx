import Layout from "../Layout";
import * as ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render } from "@testing-library/react";
import { Router } from "react-router-dom";
describe("postcard component test", () => {
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
