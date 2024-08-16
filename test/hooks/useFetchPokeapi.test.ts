
import { act, renderHook } from "@testing-library/react"
import useFetchPokeapi from "../../src/hooks/useFetchPokeapi";
import { type PokemonsResponse } from "../../src/models/pokemon/Pokemons"


global.fetch = jest.fn();
describe('Test on file useFetchPokeapi', () => {

   beforeEach(() => {
    (fetch as jest.Mock).mockClear();
  });

  test('should return initial loading state', () => {
    (fetch as jest.Mock).mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ results: [] })
    }));

    const { result } = renderHook(() => useFetchPokeapi<PokemonsResponse>("https://pokeapi.co/api/v2/pokemon?limit=16&offset=0"));

    const { isLoading, hasError } = result.current;

    expect(isLoading).toBe(true);
    expect(hasError).toBe(false);
  });

  test('should return data on successful fetch', async () => {
    const mockData = {
      count: 1,
      next: null,
      previous: null,
      results: [{ name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" }]
    };

    (fetch as jest.Mock).mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockData)
    }));

    const { result } = renderHook(() => useFetchPokeapi<PokemonsResponse>("https://pokeapi.co/api/v2/pokemon?limit=1&offset=0"));

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });

    const { data, isLoading, hasError } = result.current;

    expect(isLoading).toBe(false);
    expect(hasError).toBe(false);
    expect(data).toEqual(mockData);
  });

  test('should use local cache when available', async () => {
    const mockData = {
      count: 1,
      next: null,
      previous: null,
      results: [{ name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" }]
    };

    (fetch as jest.Mock).mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockData)
    }));

    const { result: firstRender } = renderHook(() => useFetchPokeapi<PokemonsResponse>("https://pokeapi.co/api/v2/pokemon?limit=1&offset=0"));

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });

    expect(firstRender.current.data).toEqual(mockData);

    (fetch as jest.Mock).mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({}) 
    }));

    const { result: secondRender } = renderHook(() => useFetchPokeapi<PokemonsResponse>("https://pokeapi.co/api/v2/pokemon?limit=1&offset=0"));

    expect(secondRender.current.data).toEqual(mockData);
    expect(secondRender.current.isLoading).toBe(false);
    expect(secondRender.current.hasError).toBe(false);
  });
})
