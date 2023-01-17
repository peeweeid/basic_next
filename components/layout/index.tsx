import { ReactNode } from "react";
import Header from "../header";
import Head from "next/head";
interface LayoutProps {
    children: ReactNode;
    pageTitle: string;
}
export default function Layout(props: LayoutProps) {
    const {children , pageTitle} = props;
    return (
        <>  
            <Head>
                <title>react web
                {' '}
                {pageTitle}
                </title>
                <meta name="description" content="website nextjs basic"/>
            </Head>
            <div>
                <Header/>
                <div>{children}</div>
            </div>
        </>
      
  )
}
