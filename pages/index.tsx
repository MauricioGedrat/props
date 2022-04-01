import type { NextPage } from "next";
import { useState } from "react";
import Collapse from "../components/Collapse";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1 className="text-5xl font-bold">Hello World</h1>
      <Collapse
        titulo="lorem ipsum dolor sit amet consectetur adipiscing elit"
        content="lorem ipsum dolor sit amet consectetur adipiscing elit"
      ></Collapse>
    </div>
  );
};

export default Home;
