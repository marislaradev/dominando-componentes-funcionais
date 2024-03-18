import { TimeService } from "../../services/TimeService";
import styles from "../MusicList/MusicList.module.css";

export default function MusicList(props) {
  function isSelected(music) {
    return props.selectedMusic === music ? styles.selected : "";
  }

  return (
    <ul className={styles.music_list}>
      {props.musics.map((music) => (
        <li className={`${styles.music_list_item} ${isSelected(music)}`} key={music.id} onClick={() => props.onSelect(music)}>
          <div className={styles.information}>
            <span className={styles.title}>{music.name}</span>
            <span className={styles.artist}>{music.artist}</span>
            <span className={styles.time}>{TimeService.timeDisplay(music.time)}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
