import Image from "next/image";
import Link from "next/link";

export default function Oculos() {
  return (
    <div>
        <h1>Óculos</h1>
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, dolorum voluptatem. Rem dolor quia facilis repudiandae nobis voluptatem vitae? Cumque quo ullam dolorum fugiat est officia sint quis. Fugit, modi?</p>
            <figure>
                <Image
                    src=""
                    alt="Óculos"
                    width={300}
                    height={300}
                    />
            </figure>
        </div>
    </div>
  )
}
