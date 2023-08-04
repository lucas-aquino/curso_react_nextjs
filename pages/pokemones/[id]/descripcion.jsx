import useIsMounted from "@/hooks/useIsMounted"
import { useRouter } from "next/router"

const Descripcion = () => {
  const isMounted = useIsMounted() 
  const router = useRouter()

  if (!isMounted) {
    return null
  }
  console.log({ router })
  return (
    <div>
      <p>Descripcion de pokemon { router.query.id }</p>
    </div>
  )
}

export default Descripcion