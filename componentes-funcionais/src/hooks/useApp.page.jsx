import { useState } from "react";

const musicList = [
  {
    id: 1,
    name: "Bigmouth Strikes Again",
    artist: "Smiths",
    time: "215",
    url: "musics/bigmouthstrikesagain.mp3",
  },
  {
    id: 2,
    name: "Half a Person",
    artist: "Smiths",
    time: "242",
    url: "musics/halfaperson.mp3",
  },
];

export function useApp() {
  const [selectedMusic, setSelectedMusic] = useState();
  const [time, setTime] = useState(0);

  function selectMusic(music) {
    setTime(0);
    setSelectedMusic(music);
  }

  return {
    selectedMusic,
    time,
    setTime,
    selectMusic,
    musicList,
  };
}
