import { Card } from "@/components/Card";
import { Title } from "@/components/Title";

export default function Page() {
    return(
        <div className="flex flex-col justify-center w-full px-8 lg:max-w-xl m-auto">
            <Title />
            <main className="lg:mt-3">
                <Card />
            </main>
        </div>
    )
}