import { Card } from "@/components/Card";
import { Title } from "@/components/Title";

export default function Page() {
    return(
        <>
            <Title />
            <div className="flex justify-center w-full px-8">
                <Card.Root />
            </div>
        </>
    )
}