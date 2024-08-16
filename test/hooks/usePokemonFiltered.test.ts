import { act, renderHook } from "@testing-library/react";
import usePokemonFiltered from "../../src/hooks/usePokemonFiltered";
import useForm from "../../src/hooks/useForm";
import useFetchPokeapi from "../../src/hooks/useFetchPokeapi";

jest.mock("../../src/hooks/useForm");

jest.mock("../../src/hooks/useFetchPokeapi");

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

const MockInitialState = {
  name: ""
}

describe('usePokemonFiltered hook', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('should initialize with empty filtered list', () => {

    (useFetchPokeapi as jest.Mock).mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null

    });

    (useForm as jest.Mock).mockReturnValue({
      formState: MockInitialState,
      debouncedInputValue: MockInitialState,
      handleInputChange: jest.fn(),

    });

    const { result } = renderHook(() => usePokemonFiltered());


    const {pokemonsFiltered} = result.current;

    expect(pokemonsFiltered).toEqual([]);

  });

  test('should show element filtered', () => {

    (useFetchPokeapi as jest.Mock).mockReturnValue({
      data: mockDataUseFetch,
      isLoading: true,
      hasError: null

    });

    (useForm as jest.Mock).mockReturnValue({
      formState: MockInitialState,
      debouncedInputValue: MockInitialState,
      handleInputChange: jest.fn(),

    });

    const { result } = renderHook(() => usePokemonFiltered());


    const {pokemonsFiltered, handleInputChange} = result.current;

     act(() => {
    handleInputChange({ target: { name: "name", value: "bulbasaur" } } as React.ChangeEvent<HTMLInputElement>);
  });

  expect(pokemonsFiltered[0].name).toEqual("bulbasaur");

  });

  
});