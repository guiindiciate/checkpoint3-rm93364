import Image from "next/image";
import Link from "next/link";

export default function Camisa() {
  return (
    <div>
        <h1>Camisa</h1>
        <br />
        <div>
        <figure className="sap">
                <Image
            src="https://thenorthface.vteximg.com.br/arquivos/ids/202172-1000-1000/camiseta-masculina-earth-day-preta-A012NJK3-1.png?v=638167408867230000"
            alt="Camisa"
            width={300}
            height={300}
            />
            </figure>
            <p>Cuidar do nosso planeta, é cuidar da nossa casa!
              A camiseta Earth day é uma homenagem e uma forma de nos conscientizarmos, sobre a importância de cuidar do nosso planeta TERRA.
              Feita em 100% algodão, a Camiseta Earth Day possui uma imagem que pode ser observada por cima do icônico logo da marca, em 3 variantes diferentes.
              As camisetas The North Face unem conforto, qualidade e durabilidade em um tecido de qualidade e técnicas de estamparia avançadas, para o dia a dia dos exploradores.</p>
        </div>
    </div>
  )
}
