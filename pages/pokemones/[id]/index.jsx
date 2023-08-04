import useIsMounted from "@/hooks/useIsMounted"
import { useRouter } from "next/router"
import Link from "next/link"
import Image from "next/image"

const Pokemon = () => {
  const isMounted = useIsMounted() 
  const router = useRouter()

  if (!isMounted) {
    return null
  }

  const { id } = router.query

  return (
    <div>
      <div>
        Pokemon {id}
      </div>
      <Image src='/meme.png' width={400} height={400}></Image>
      <Link href={`/pokemones/${id}/descripcion`}>Descripcion</Link>
    </div>
  )
}

export default Pokemon
