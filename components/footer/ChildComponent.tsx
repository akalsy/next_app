/*
 * @Author: rick_liu hermanyu666@gmail.com
 * @Date: 2022-12-02 13:46:42
 * @LastEditors: rick_liu hermanyu666@gmail.com
 * @LastEditTime: 2022-12-02 16:37:27
 * @FilePath: \study\next_app\components\footer\ChildComponent.tsx
 * @Description: 
 * 
 * Copyright (c) 2022 by rick_liu hermanyu666@gmail.com, All Rights Reserved. 
 */
import { FC, useMemo } from "react"

interface childProps {
    name: string
    children: string
}

export const ChildComponent: FC<childProps> = ({ name, children }) => {

    function changeXiaoHong(name: string): string {
        console.log('他來了')
        return `${name},啦啦啦`
    }
    const actionXiaohong = useMemo(() => changeXiaoHong(name), [name])
    return <>
        <div>{actionXiaohong}</div>
        <div>{children}</div>
    </>
}