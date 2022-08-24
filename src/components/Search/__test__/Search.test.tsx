import * as ReactDOM from "react-dom";
import Search from "../Search";

describe("Search component test", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    ReactDOM.render(<Search />, container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("correctly renders the initial component (h2)", () => {
    const h2 = container.querySelectorAll("h2");
    expect(h2).toHaveLength(1);
  });
});
