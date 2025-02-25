import Card from "@/components/module/Card/Card";
import styles from "./CategoriesPage.module.css";
import { useState } from "react";
import { router } from "next/router";


function CategoriesPage({ data }) {
  const [query, setQuery] = useState({ difficulty: "", time: "" });


  const changeHandler = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  }
  const searchHandler = () => {
    router.push({ patchname: '/categories', query });
  }

  return (
    <div className={styles.container}>
      <h2>Categories</h2>
      <div className={styles.subContainer}>
        <div className={styles.select}>
          <select value={query.difficulty} name="difficulty" onChange={changeHandler}>
            <option value="">Difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          <select value={query.time} name="time" onChange={changeHandler}>
            <option value="">Cooking Time</option>
            <option value="more">More than 30 min</option>
            <option value="less">Less than 30 min</option>
          </select>
          <button onClick={searchHandler}>Search</button>
        </div>
        <div className={styles.cards}>

          {/* <Card /> */}

        </div>
      </div>
    </div>
  );
}

export default CategoriesPage;
