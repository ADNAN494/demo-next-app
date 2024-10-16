"use-client";
import styles from "./page.module.css";
import EventsFunctionsState from "./components/EventsFunctionsState";
import home from "./home/page";
import Link from "next/link";
export default function Home() {
  return (
    <div className={styles.page}>
      {/* <EventsFunctionsState/>
     <home/> */}
      <button><Link href='/mongo-post-emp'>Add Employee</Link></button><br /><br />
      <button><Link href='/get-monog-data'>Get Employee</Link></button>
    </div>
  );
}
