import Image from "next/image"
import { Icons } from "../../constants/icons"

type ImageIconProps = {
    name: string
    alt: string
    icon: keyof typeof Icons
}

export default function ImageIcon({ name, icon, alt }: ImageIconProps) {
    return (
        <Image src={icon} alt={alt} />
    )
}