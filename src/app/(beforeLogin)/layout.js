import styles from "@/app/(beforeLogin)/_components/main.module.css";

export default function Layout({ children, modal }) {
  return (
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  );
}
