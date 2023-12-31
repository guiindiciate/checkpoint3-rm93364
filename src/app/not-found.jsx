import Image from "next/image";

export default function NotFound() {
    return (
        <div className="bg-red-500 font-extrabold h-full w-full fixed">
            <h1 className="text-center mb-5">OOPSS! 404</h1>
            
            <Image className="mx-auto w-50" src="https://http.cat/images/404.jpg" alt="404" width={500} height={500} />
            
            
            <p className="text-center mt-5">Not Found!</p>
        </div>
    )
}