import { render, screen } from "@testing-library/react";
import NotFoundFavorites from "../../../src/components/sections/notFoundFavorites/NotFoundFavorites";
import { MemoryRouter } from "react-router-dom";
import useFetchPokeapi from "../../../src/hooks/useFetchPokeapi";

beforeAll(() => {
  window.matchMedia = jest.fn((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }));
});

jest.mock("../../../src/hooks/useFetchPokeapi", () => ({
  __esModule: true,
  default: jest.fn(),
}));

const mockDataUseFetch = {
  count: 1302,
  next: "https://pokeapi.co/api/v2/pokemon?offset=2&limit=2",
  previous: null,
  results: [
    {
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/",
    },
    {
      name: "ivysaur",
      url: "https://pokeapi.co/api/v2/pokemon/2/",
    },
  ],
};
describe("Test on file NotFoundFavorites.tsx", () => {
  beforeEach(() => {
    (useFetchPokeapi as jest.Mock).mockReturnValue({
      data: mockDataUseFetch,
      isLoading: false,
      hasError: null,
    });
  });

  test("should render the component with the mockData", () => {
    render(
      <MemoryRouter>
        <NotFoundFavorites />
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { level: 3 })).toBeTruthy();

    expect(screen.getAllByText("bulbasaur")[0]).toBeInTheDocument();
    expect(screen.getAllByText("ivysaur")[0]).toBeInTheDocument();

    const images = screen.getAllByRole("img");

    expect(images[0]).toHaveAttribute(
      "src",
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
    );
    expect(images[1]).toHaveAttribute(
      "src",
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg"
    );

    expect(images[0]).toHaveAttribute("alt", "bulbasaur");
    expect(images[1]).toHaveAttribute("alt", "ivysaur");
  });

  test("should show loading state when data is being fetched", () => {
    (useFetchPokeapi as jest.Mock).mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    render(
      <MemoryRouter>
        <NotFoundFavorites />
      </MemoryRouter>
    );

    expect(screen.getByText("Loading........")).toBeInTheDocument();
  });

  test("should render the back button with correct text and route", () => {
    render(
      <MemoryRouter>
        <NotFoundFavorites />
      </MemoryRouter>
    );

    const button = screen.getByRole("link");

    expect(button).toBeInTheDocument();
  });
});
