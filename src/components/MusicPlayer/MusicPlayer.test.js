import React from "react";
import MusicPlayer from "./MusicPlayer";
import { linkData } from "../../data/linkData.js";
import { render, fireEvent, screen } from "@testing-library/react";

describe("MusicPlayer", () => {
  beforeEach(() => {
    const musicPlayerData = linkData.links.find((link) => {
      return link.linkType === "musicPlayer";
    });

    render(<MusicPlayer linkData={musicPlayerData} />);
  });

  describe("When a user clicks on a Music Player Link", () => {
    test.each`
      platform
      ${"Spotify"}
      ${"Apple Music"}
      ${"Tidal"}
      ${"Soundcloud"}
      ${"Deezer"}
      ${"YouTube Music"}
      ${"Bandcamp"}
    `("the $platform streaming platform is visible", ({ platform }) => {
      fireEvent.click(screen.getByText(/listen to/i));
      expect(screen.getByText(platform)).toBeVisible();
    });
  });
});
