import { Container } from "semantic-ui-react";
import { BasicLayout } from "@/layouts";
import { Home } from "@/components/Home";
import { Separator, BarTrust } from "@/components/Shared";

const platformsId = {
  playstation: 1,
  xbox: 2,
  nintendo: 3,
  pc: 4,
};

export default function Homepage() {
  return (
    <>
      <BasicLayout>
        <Home.BannerLastGamePublished />

        <Separator height={100} />

        <Container>
          <Home.LatestGames title="Ultimos lanzamientos" />
        </Container>

        <Separator height={100} />

        <BarTrust />

        <Separator height={100} />

        <Container>
          <Home.LatestGames
            title="PlayStation"
            limit={3}
            platformId={platformsId.playstation}
          />
        </Container>

        <Separator height={100} />
      </BasicLayout>
    </>
  );
}
