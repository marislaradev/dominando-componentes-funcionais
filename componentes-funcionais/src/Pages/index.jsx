import MusicList from "../components/MusicList";

const musics = [
  {
    id: 1,
    name: 'Bigmouth Strikes Again',
    artist: 'Smiths',
    time: '215'
  },
  {
    id: 2,
    name: 'Half a Person',
    artist: 'Smiths',
    time: '242'
  },
]

export default function Index() {
  return (
    <div>
      <MusicList musics={musics} selectedMusic={musics[0]} onSelect={() => {}}/>
    </div>
  );
}
