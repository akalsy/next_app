/*
 * @Author: lsy155497 LiuSY155497@yimidida.com
 * @Date: 2022-11-14 16:12:28
 * @LastEditors: lsy155497 LiuSY155497@yimidida.com
 * @LastEditTime: 2022-11-14 16:18:36
 * @FilePath: /next/my-app/pages/api/articleInfo.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by lsy155497 LiuSY155497@yimidida.com, All Rights Reserved. 
 */
import { CMSDOMAIN } from "@/utils";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { IArticleProps } from "../article/[articleId]";

const getArticleInfoData = (
    req: NextApiRequest,
    res: NextApiResponse<IArticleProps>
) => {
    const { articleId } = req.query;
    axios.get(`${CMSDOMAIN}/api/article-infos/${articleId}`).then((result) => {
        const data = result.data || {};
        res.status(200).json(data);
    });
};
export default getArticleInfoData


