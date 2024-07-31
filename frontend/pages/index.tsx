import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import ChatWindow from "@/components/ChatWindow";
import KnowledgeAdder from "@/components/KnowledgeAdder";
import Image from "next/image";
import marqoLogo from "../assets/MarqoLogo.svg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Google Gemma 2 x Marqo</title>
        <meta name="description" content="Google Gemma 2 integrated with Marqo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
          <Image src={marqoLogo} alt="Marqo logo" width={200} />
          <h1>Google Gemma 2 + Marqo Q&A</h1>
          <ChatWindow />
          <h3>Add Knowledge</h3>
          <KnowledgeAdder />
        </div>
      </main>
    </>
  );
}
