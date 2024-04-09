import styles from "./Panel.module.scss";
import { Button, Container, Icon, Image } from "semantic-ui-react";
import { fn } from "@/utils";

export function Panel(props) {
  const { gameId, game } = props;

  return (
    <Container className={styles.panel}>
      <div className={styles.imgContiner}>
        <Image src={game.cover.data.attributes.url} />
      </div>

      <div className={styles.actionsContainer}>
        <div>
          <h2>{game.title}</h2>
        </div>
      </div>
    </Container>
  );
}
