import Image from "next/image";
import Logo from "@/assets/Logo.svg";
import Edit_duotone from "@/assets/Edit_duotone.svg";

export function Title() {
    return (
        <header className="flex justify-center flex-row gap-4 py-8">
            <Image src={Logo} alt="Task Board APP logo"/>
            <h1 className="text-2xl lg:text-4xl">My Task Board</h1>
            <Image src={Edit_duotone} alt="Task Board APP logo"/>
        </header>
    )
}