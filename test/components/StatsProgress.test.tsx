import { render, screen } from "@testing-library/react";
import { Stat } from "../../src/models/pokemon/pokemon";
import StatsProgress from "../../src/components/statsProgress/StatsProgress";

const mockStats: Stat[] = [
  {
    base_stat: 45,
    effort: 0,
    stat: {
      name: "hp",
      url: "https://pokeapi.co/api/v2/stat/1/",
    },
  },
  {
    base_stat: 49,
    effort: 0,
    stat: {
      name: "attack",
      url: "https://pokeapi.co/api/v2/stat/2/",
    },
  },
];

describe("Test on file StatsProgress.tsx", () => {
  test("should render stats with correct data ", () => {
    render(<StatsProgress stats={mockStats} />);

    mockStats.forEach((stat) => {
      expect(screen.getByText(stat.stat.name)).toBeInTheDocument();
      expect(screen.getByText(stat.base_stat.toString())).toBeInTheDocument();
    });
  });
});
