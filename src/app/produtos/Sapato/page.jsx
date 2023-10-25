import Image from "next/image";
import Link from "next/link";

export default function Sapato() {
  return (
    <div>
        <h1>Sapato</h1>
        <br />
        <div>
        <figure className="sap">
                <Image
            src="https://thenorthface.vteximg.com.br/arquivos/ids/208125-1000-1000/Tenis-masculino-vectiv-infinite-2-verde-7W5M-FM9_1.png?v=638320483765470000"
            alt="Sapato"
            width={300}
            height={300}
            />
            </figure>
            <p>Projetado com uma sola curva, perfeita para aguentar diferentes tipos de terrenos, o Tênis Masculino Vectiv Infinite 2 é ideal para corrida de rua. Feito para acomodar todos os formatos de pés, o Vectiv Infinite 2 traz sua sola curva a tecnologia VECTIV 2.0, placa em TPU 3D e design do calcanhar bifurcado, elementos que proporcionam maior deslocamento e estabilidade lateral. Sola feita em borracha Surface CTRL™, com saliências de 5 mm e design para solo macio, são responsáveis para alta tração em terreno extremamente acidentado. * A cor do produto pode variar de acordo com a tela do seu dispositivo.</p>
        </div>
    </div>
  )
}
