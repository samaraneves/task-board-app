import Image from "next/image";
import Logo from "@/../public/Logo.svg";
import Edit_duotone from "@/../public/Edit_duotone.svg";

export function Title() {
    return (
        <header className="flex flex-row items-start gap-4 py-8">
            <Image src={Logo} alt="Task Board APP logo"/>
            <div className="flex flex-col justify-center flex-row gap-4">
                <h1 className="text-2xl lg:text-4xl">My Task Board</h1>
                <strong className="text-base font-normal">Tasks to keep organised</strong>
            </div>
            <Image src={Edit_duotone} alt="Task Board APP logo"/>
        </header>
    )
}