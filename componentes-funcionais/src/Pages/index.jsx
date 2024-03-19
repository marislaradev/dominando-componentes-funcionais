import { useState } from "react";
import MusicList from "../components/MusicList";
import TimeLine from "../components/MusicList/TimeLine";

const musics = [
  {
    id: 1,
    name: "Bigmouth Strikes Again",
    artist: "Smiths",
    time: "215",
  },
  {
    id: 2,
    name: "Half a Person",
    artist: "Smiths",
    time: "242",
  },
];

export default function Index() {
  const [width, setWidth] = useState(20);
  return (
    <div>
      <MusicList
        musics={musics}
        selectedMusic={musics[0]}
        onSelect={() => {}}
      />
      <TimeLine width={width} onChangeWidth={setWidth} />
    </div>
  );
}
