import useIsMounted from "@/hooks/useIsMounted"
import { useRouter } from "next/router"

const Usuario = () => {
  const isMounted = useIsMounted() 
  const router = useRouter()

  if (!isMounted) {
    return null
  }
  console.log({ router }, router.query.id)
  return(
    <div>
      <p>usuario 1</p>
    </div>
  )
}

export default Usuario