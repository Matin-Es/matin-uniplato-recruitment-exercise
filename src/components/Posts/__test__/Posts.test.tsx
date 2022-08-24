import * as ReactDOM from "react-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Posts from "../Posts";

describe("posts component test", () => {
  let container: HTMLDivElement;
  const queryClient = new QueryClient();
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    ReactDOM.render(
      <QueryClientProvider client={queryClient}>
        <Posts />
      </QueryClientProvider>,
      container
    );
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("correctly renders the initial component", () => {
    const divs = container.querySelectorAll("div");
    expect(divs).toHaveLength(1);
  });
});
