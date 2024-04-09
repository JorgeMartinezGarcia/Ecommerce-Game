import { BasicLayout } from "@/layouts";
import { Game } from "@/components/Game";
import { Separator } from "@/components/Shared";

export default function GamePage(props) {
  const { game } = props;
  const wallpaper = game.attributes.wallpaper;

  return (
    <>
      <BasicLayout>
        <Game.HeaderWallpaper image={wallpaper.data.attributes.url} />
        <Game.Panel gameId={game.id} game={game.attributes} />

        <Separator height={50} />
      </BasicLayout>
    </>
  );
}
