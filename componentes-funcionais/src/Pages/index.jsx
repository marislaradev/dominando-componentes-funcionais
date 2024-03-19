import { useContext } from "react";
import { AppContext } from "../App";
import MusicList from "../components/MusicList";
import AudioPlayer from "../components/AudioPlayer";
import styles from "./index.module.css";

export default function Index() {
  const { selectedMusic, time, setTime, selectMusic, musicList } =
    useContext(AppContext);

  return (
    <div className={styles.page_container}>
      <MusicList
        musics={musicList}
        selectedMusic={selectedMusic}
        onSelect={selectMusic}
      />
      <AudioPlayer
        music={selectedMusic}
        onTimeChange={setTime}
        onComplete={() => console.log("Finished")}
      />
    </div>
  );
}
