/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
        remotePatterns:[
            {
            protocol: "https",
            hostname: "img.freepik.com",
            port: "",
            pathname: "/**"
        }
        ,
        {
            protocol: "https",
            hostname: "thenorthface.vteximg.com.br",
            port: "",
            pathname: "/**"
        }
        ,
        {
            protocol: "https",
            hostname: "http.cat",
            port: "",
            pathname: "/images/**"
        }
        ,
        
    ],
    },
}
