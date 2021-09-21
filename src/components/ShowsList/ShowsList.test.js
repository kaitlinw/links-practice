import React from "react";
import ShowsList from "./ShowsList";
import { linkData } from "../../data/linkData.js";
import { render, fireEvent, screen } from "@testing-library/react";

describe("ShowsList", () => {
  beforeEach(() => {
    const showData = linkData.links.find((link) => {
      return link.linkType === "showsList";
    });

    render(<ShowsList linkData={showData} />);
  });

  describe("When a user clicks on a Show List Link", () => {
    test.each`
      date
      ${"Jul 14 2019"}
      ${"Jul 22 2019"}
      ${"Jul 24 2019"}
    `("the $platform show is visible", ({ date }) => {
      fireEvent.click(screen.getByText(/UK Tour/i));
      expect(screen.getByText(date)).toBeVisible();
    });
  });
});
