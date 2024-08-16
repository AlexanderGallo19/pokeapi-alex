import { render, screen } from "@testing-library/react";
import InfoCommunity from "../../../src/components/sections/infoCommunity/InfoCommunity";
import { MemoryRouter } from "react-router-dom";

describe("InfoCommunity component", () => {
  test("should render the component with the correct content", () => {
    render(
      <MemoryRouter>
        <InfoCommunity />
      </MemoryRouter>
    );

    expect(
      screen.getByText(
        /Join the UNITE community, go clone the repo and feel free to add whatever you want/i
      )
    ).toBeInTheDocument();

    const logoCommunityImage = screen.getByAltText("logo-community");
    expect(logoCommunityImage).toBeInTheDocument();
    expect(logoCommunityImage).toHaveAttribute(
      "src",
      "../../../public/img/logo-comunity.png"
    );

    expect(screen.getByText(/Pokemon GO/i)).toBeInTheDocument();

    const swiperImage = screen.getByAltText("Image-swiper");
    expect(swiperImage).toBeInTheDocument();
    expect(swiperImage).toHaveAttribute(
      "src",
      "../../../public/img/swipper-type.png"
    );
  });
});
