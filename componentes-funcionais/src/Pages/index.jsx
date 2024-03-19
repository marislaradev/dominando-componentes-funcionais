import { useState } from "react";
import MusicList from "../components/MusicList";
import AudioPlayer from "../components/AudioPlayer";

const musics = [
  {
    id: 1,
    name: "Bigmouth Strikes Again",
    artist: "Smiths",
    time: "215",
    url: 'musics/bigmouthstrikesagain.mp3',
  },
  {
    id: 2,
    name: "Half a Person",
    artist: "Smiths",
    time: "242",
    url: 'musics/halfaperson.mp3',
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
      <AudioPlayer music={musics[0]}  onComplete={() => console.log('Finished')}/>
    </div>
  );
}
