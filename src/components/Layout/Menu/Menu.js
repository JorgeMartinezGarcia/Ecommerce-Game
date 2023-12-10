import { useState, useEffect } from "react";
import { Image, Icon, Input } from "semantic-ui-react";
import { Platform } from "@/api";
import styles from "./Menu.module.scss";

const plataformCtrl = new Platform();

export function Menu(props) {
  const { isOpenSearch } = props;
  const [platforms, setPlatforms] = useState(null);
  console.log(platforms);

  useEffect(() => {
    (async () => {
      try {
        const response = await plataformCtrl.getAll();
        setPlatforms(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div>
      <h2>Menu</h2>
    </div>
  );
}
