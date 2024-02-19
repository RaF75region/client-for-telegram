import Card from "@mui/joy/Card"
import { Suspense } from "react";
// import CardServer from "../server-components/Card";
import dynamic from 'next/dynamic'
import Loading from "@/app/loading";

const CardServer = dynamic(() => import('../server-components/Card'), {
    suspense: true,
    ssr: false,
  })
  

export default async function Cards(){
    
    return <Suspense fallback={<Loading />}>
        <CardServer />
    </Suspense>
}