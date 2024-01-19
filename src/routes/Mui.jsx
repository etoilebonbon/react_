import React from 'react'
import Layout from '../components/Layout'
import { Button, TextField } from '@mui/material'
import { MdLightMode, MdDarkMode } from "react-icons/md";

export default function Mui() {
  return (
    <Layout>
        <div className="w-full lex justify-center py-16">
            <div className="w-[1200px] flex flex-col space-y-4">
            <h1>Mui Test</h1>
            <Button variant="text">Mui 버튼</Button>
            <Button variant="contained" color="secondary">버튼 컨테인드</Button>
            <Button variant="outlined" color="success">아웃라인</Button>
            <Button variant="outlined" endIcon={<MdDarkMode/>}>Delete</Button>
            <TextField id="outlined-basic" label="이름" variant="outlined" />
            <TextField id="outlined-basic" label="이메일" variant="outlined" />
            </div>
        </div>
    </Layout>
  )
}
