/*
 * @Author: lsy155497 LiuSY155497@yimidida.com
 * @Date: 2022-10-08 17:03:20
 * @LastEditors: lsy155497 LiuSY155497@yimidida.com
 * @LastEditTime: 2022-11-18 14:54:04
 * @FilePath: /next/my-app/pages/article/[articleId].tsx
 * @Description: 
 * 
 * Copyright (c) 2022 by lsy155497 LiuSY155497@yimidida.com, All Rights Reserved. 
 */
import { LOCALDOMAIN } from "@/utils";
import axios from "axios";
import { NextPage } from "next";
import styles from "./styles.module.scss";
const showdown = require("showdown");
interface IProps {
  articleId: number;
}

export interface IArticleProps {
  title: string;
  author: string;
  description: string;
  createTime: string;
  content: string;
}

const Article: NextPage<IArticleProps> = ({
  title,
  author,
  description,
  createTime,
  content,
}) => {
  const converter = new showdown.Converter();
  return (
    <div className={styles.article}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.info}>
        作者：{author} | 创建时间: {createTime}
      </div>
      <div className={styles.description}>{description}</div>
      {/* <div>{converter.makeHtml(content)}</div> */}
      <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(content) }} />
    </div>
  );
};
Article.getInitialProps = async (context) => {
  const { articleId } = context.query;
  const { data } = await axios.get(`${LOCALDOMAIN}/api/articleInfo`, {
    params: {
      articleId,
    },
  });
  console.log(data)
  return data.data.attributes;
};

export default Article;
