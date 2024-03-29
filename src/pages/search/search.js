import { useEffect } from "react";
import { BasicLayout } from "@/layouts";

export default function SearchPage(props) {
  console.log(props);
  useEffect(() => {
    document.getElementById("search-games").focus();
  }, []);

  return (
    <>
      <BasicLayout relative isOpenSearch>
        <h2>Estamos en la busqueda</h2>
      </BasicLayout>
    </>
  );
}
