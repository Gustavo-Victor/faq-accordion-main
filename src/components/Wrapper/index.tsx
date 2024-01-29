import { DefaultProps } from "../../types/faqTypes";

export default function Wrapper({ children }: DefaultProps) {
    return (
        <section className="wrapper">{children}</section>
    )
}