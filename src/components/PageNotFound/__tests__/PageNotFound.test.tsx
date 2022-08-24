import * as ReactDOM from "react-dom";
import PageNotFound from "../PageNotFound";

describe("pageNotFound component test", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    ReactDOM.render(<PageNotFound />, container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("correctly renders the initial component", () => {
    const div = container.querySelectorAll("div");
    expect(div).toHaveLength(1);
  });
  it("correctly renders the p tag", () => {
    const p = container.querySelectorAll("p");
    expect(p).toHaveLength(1);
  });
});
