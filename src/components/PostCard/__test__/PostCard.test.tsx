import * as ReactDOM from "react-dom";
import PostCard from "../PostCard";

describe("postcard component test", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    ReactDOM.render(<PostCard />, container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("correctly renders the initial component", () => {
    const divs = container.querySelectorAll("div");
    expect(divs).toHaveLength(5);
  });

  it(" correctly renders the image", () => {
    const images = container.querySelectorAll("img");
    expect(images).toHaveLength(1);
  });
  it("correctly renders the title", () => {
    const h2 = container.querySelectorAll("h2");
    expect(h2).toHaveLength(1);
  });
  it("correctly renders the description", () => {
    const p = container.querySelectorAll("p");
    expect(p).toHaveLength(1);
  });
});
