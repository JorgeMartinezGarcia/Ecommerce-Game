import { BasicLayout } from "@/layouts";
import { Info } from "@/components/Account";

export default function AccountPage() {
  return (
    <>
      <BasicLayout isContainer relative>
        <Info />
      </BasicLayout>
    </>
  );
}
