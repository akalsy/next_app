/*
 * @Author: lsy155497 LiuSY155497@yimidida.com
 * @Date: 2022-11-09 10:35:24
 * @LastEditors: lsy155497 LiuSY155497@yimidida.com
 * @LastEditTime: 2022-11-14 17:10:48
 * @FilePath: /next/my-app/pages/api/articleIntro.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { CMSDOMAIN } from "@/utils";

export interface IArticleIntro {
    label: string;
    info: string;
    articleId: number;
}

interface IArticleIntroProps {
    list: Array<{ label: string; info: string; articleId: number }>;
    total: number;
}

const getArticleIntroData = (
    req: NextApiRequest,
    res: NextApiResponse<IArticleIntroProps>
) => {
    debugger
    const { pageNo, pageSize } = req.body;
    axios
        .get(`${CMSDOMAIN}/api/article-introductions`, {
            params: {
                pageNo,
                pageSize,
            },
        })
        .then((result) => {
            const { data, meta } = result.data || {};

            res.status(200).json({
                list: Object.values(data),
                total: meta.pagination.total,
            });
        });
};

export default getArticleIntroData;