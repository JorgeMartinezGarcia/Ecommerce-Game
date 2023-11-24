import Link from "next/link";
import { JoinLayout } from "@/layouts";
import { RegisterForm } from "@/components/Auth";
import styles from "./sign-up.module.scss";

export default function SignUpPage() {
  return (
    <>
      <JoinLayout>
        <div className={styles.signIn}>
          <h3>Crear cuenta</h3>
          <RegisterForm />

          <div className={styles.actions}>
            <Link href="/join/sign-in">Atras</Link>
          </div>
        </div>
      </JoinLayout>
    </>
  );
}
