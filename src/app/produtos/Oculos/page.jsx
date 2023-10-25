import Image from "next/image";
import Link from "next/link";

export default function Oculos() {
  return (
    <div>
        <h1>Óculos</h1>
        <br />
        <div>
        <figure className="sap">
                <Image
            src="https://img.freepik.com/fotos-gratis/oculos-e-oculos-de-sol-refletindo-a-elegancia-e-o-design-do-verao-gerados-pela-ia_188544-19634.jpg?w=1380&t=st=1698193848~exp=1698194448~hmac=488d4dd5a51e1e115ae1e229b7a3738350fb61843c35c38282d74f1efd038f43"
            alt="Óculos"
            width={300}
            height={300}
            />
            </figure>
        <p>Lentes com tecnologia X-VYSN™, proporcionando cores mais vivas e nítidas, remoção da difusão de luz, e evita a refração prismática não interferindo na posição visual de nenhum objeto. Os óculos de sol são o acessório perfeito para adicionar um toque de estilo e proteção aos seus olhos. Este par de óculos de sol combina funcionalidade com moda, proporcionando uma experiência visual incrível em qualquer ambiente.</p>
        </div>
    </div>
  )
}
