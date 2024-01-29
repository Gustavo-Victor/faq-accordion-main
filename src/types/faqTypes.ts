import { ReactNode } from "react"

export type faqProps = {
    key: number,
    title: string, 
    text: string 
}   

export type DefaultProps = {
    children: ReactNode
}