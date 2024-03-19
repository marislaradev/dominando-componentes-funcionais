import styles from "../TimeLine/TimeLine.module.css";

export default function TimeLine(props) {
  return (
    <div className={styles.timeline_container}>
      <div className={styles.timeline_line} style={{'--width': `${props.width}%`}} />
      <input
        type="range"
        className={styles.timeline_slider}
        onChange={(event) => props.onChangeWidth(event.target.value)}
      />
    </div>
  );
}
