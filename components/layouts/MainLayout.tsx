import Head from "next/head";
import {FC, ReactNode} from "react";
import {Footer} from "../ui/Footer";
import {Header} from "../ui/Header";

interface IMainLayout {
    children: ReactNode,
    title: string
}

export const MainLayout: FC<IMainLayout> = ({children, title}) => {
    return (
        <>
            <Head>
                <title>{title} | Ecommerce</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <Header/>
            <main className={"h-screen"}>
                {children}
            </main>
            <Footer/>
        </>
    )
}

