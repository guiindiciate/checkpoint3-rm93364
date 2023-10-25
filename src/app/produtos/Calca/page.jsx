import Image from "next/image";
import Link from "next/link";

export default function Calca() {
  return (
    <div>
        <h1>Calça</h1>
        <br />
        <div>
        <figure className="sap">
                <Image
            src="https://thenorthface.vteximg.com.br/arquivos/ids/205280-1000-1000/calca-masculina-logo-cuffed-preta-A013NJK3-1.png?v=638224372039230000"
            alt="Calça"
            width={300}
            height={300}
            />
            </figure>
            <p>Muito confortável e macia, a Calça Masculina Logo Cuffed irá se tornar sua calça de moletom preferida. Perfeita para o dia a dia, viagens e atividades ao ar livre, essa calça combina versatilidade, aquecimento e durabilidade.</p>
        </div>
    </div>
  )
}
