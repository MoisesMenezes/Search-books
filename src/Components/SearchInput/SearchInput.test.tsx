import { render } from "../../tests/test-utils";
import SearchInput from ".";

describe("SearchInput", () => {
  test("should renders correctly", () => {
    const { baseElement } = render(<SearchInput />);

    expect(baseElement).toBeTruthy();
  });
});
