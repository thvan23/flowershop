"use client"
import { useEffect, useState } from "react"
import api from "../../lib/api"

interface Flower {
  id: string
  name: string
  category: string
}

export default function Home() {
  const [data, setData] = useState<Flower[]>([])

  useEffect(() => {
    api.get("/flowers")
      .then((res: { data: Flower[] }) => setData(res.data))
  }, [])

  return (
    <div>
      {data.map(i => (
        <p key={i.id}>{i.name}</p>
      ))}
    </div>
  )
}