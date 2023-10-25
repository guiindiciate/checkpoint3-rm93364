import Image from "next/image";
import Link from "next/link";

export default function Bone() {
  
  return (
    <div>
        <h1>Boné</h1>
        <br />
      <div >
        <figure className="sap">
                <Image
            src="https://thenorthface.vteximg.com.br/arquivos/ids/206948-1000-1000/Bone-murdder-trucker-verde-5FXA-37U_1.png?v=638270138508070000"
            alt="Boné"
            width={300}
            height={300}
            />
            </figure>
            <p>O Boné Mudder Trucker, possui um design moderno e clássico. Feito com poliéster reciclado, seus painéis posteriores são em mesh, e a faixa de antitranspiração, possui tecnologia FlashDry™, que mantém a cabeça seca e fresca. O Boné é um acessório indispensável para se usar ao ar livre. Seja em aventuras, passeios, viagens, tenha sempre ele para sua proteção.</p>
        </div>
    </div>
  )
}
