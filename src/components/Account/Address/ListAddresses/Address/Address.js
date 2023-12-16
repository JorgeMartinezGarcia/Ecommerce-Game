import { Button, Icon } from "semantic-ui-react";
import styles from "./Address.module.scss";

export function Address(props) {
  const { addressId, address } = props;

  return (
    <>
      <div className={styles.address}>
        <div>
          <p className={styles.title}>{address.title}: </p>
          <p className={styles.addressInfo}>
            {address.name}, {address.address}, {address.state}, {address.city},{" "}
            {address.postal_code}
          </p>
        </div>

        <div className={styles.actions}>
          <Button primary icon>
            <Icon name="pencil" />
          </Button>
          <Button primary icon>
            <Icon name="trash" />
          </Button>
        </div>
      </div>
    </>
  );
}
