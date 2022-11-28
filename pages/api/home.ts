/*
 * @Author: lsy155497 LiuSY155497@yimidida.com
 * @Date: 2022-11-14 16:00:38
 * @LastEditors: lsy155497 LiuSY155497@yimidida.com
 * @LastEditTime: 2022-11-14 16:07:27
 * @FilePath: /next/my-app/pages/api/home.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by lsy155497 LiuSY155497@yimidida.com, All Rights Reserved. 
 */
import { CMSDOMAIN } from "@/utils";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

interface IHomeProps {
    title: string;
    description: string
}

const getHomeData = (req: NextApiRequest, res: NextApiResponse<IHomeProps>) => {
    axios.get(`${CMSDOMAIN}/api/homes`).then((result) => {
        const { title, description } = result.data || {}
        res.status(200).json({
            title, description
        })
    })
}


export default getHomeData