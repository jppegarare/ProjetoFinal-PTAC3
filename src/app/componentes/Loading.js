import Image from "next/image";

export default function Spinner() {
    return(
        <Image width={100} alt="" height={100} src={"/carregar.svg"} />
    )
}