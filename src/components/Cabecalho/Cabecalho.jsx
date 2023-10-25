import Link from "next/link";

export default function Cabecalho() {
  
  return (
    <header className='bg-slate-700 h-20 text-white'>
    <nav>
      <ul>
        <li><Link href="/">HOME</Link></li>
        <div className="cabeca">

        <li><Link href="/produtos/Camisa">Camisa</Link></li>
        <li><Link href="/produtos/Calca">Calça</Link></li>
        <li><Link href="/produtos/Bone">Boné</Link></li>
        <li><Link href="/produtos/Oculos">Óculos</Link></li>
        <li><Link href="/produtos/Sapato">Sapato</Link></li>
        </div>
      </ul>
    </nav>
  </header>
  )
}