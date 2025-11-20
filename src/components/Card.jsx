import styles from "./Card.module.css";
import BasicModal from "./Modal";

export default function Card({ character }) {
  return (
    <div className={styles.card}>
      <BasicModal character={character} />
      <img src={character.image} alt={character.name} width="200px" />
    </div>
  );
}
