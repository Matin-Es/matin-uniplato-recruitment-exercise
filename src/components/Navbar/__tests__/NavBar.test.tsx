import * as ReactDOM from "react-dom";
import Navbar from "./../Navbar";
import { MemoryRouter } from "react-router-dom";
describe("navbar component test", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    ReactDOM.render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
      container
    );
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("correctly renders the initial component", () => {
    const divs = container.querySelectorAll("div");
    expect(divs).toHaveLength(5);
  });
  it("correctly renders the navbar links", () => {
    const links = container.querySelectorAll("a");
    expect(links).toHaveLength(4);
  });
  it("correctly renders the nav tags", () => {
    const navs = container.querySelectorAll("nav");
    expect(navs).toHaveLength(4);
  });
  it("correctly renders the svgs", () => {
    const svgs = container.querySelectorAll("svg");
    expect(svgs).toHaveLength(4);
  });
});
