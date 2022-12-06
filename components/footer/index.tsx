/*
 * @Author: rick_liu hermanyu666@gmail.com
 * @Date: 2022-11-28 11:13:16
 * @LastEditors: rick_liu hermanyu666@gmail.com
 * @LastEditTime: 2022-12-02 11:47:49
 * @FilePath: \study\next_app\components\footer\index.tsx
 * @Description: 
 * 
 * Copyright (c) 2022 by rick_liu hermanyu666@gmail.com, All Rights Reserved. 
 */
import { FC, useState } from "react";
import { ChildComponent } from './ChildComponent'

interface IFooterProps { }



export const Footer: FC<IFooterProps> = ({ }) => {
  const [xiaohong, setXiaohong] = useState('xiao hong onCalled!')
  const [xiaoMing, setXiaoMing] = useState('xiao ming onCalled!')
  return (
    <>
      <button onClick={() => { setXiaohong(new Date().getTime() + "") }}>xiaohong</button>
      <button onClick={() => { setXiaoMing(new Date().getTime() + "") }}>xiaoMing</button>
      <ChildComponent name={xiaohong}>{xiaoMing}</ChildComponent>
    </>
  )
};
