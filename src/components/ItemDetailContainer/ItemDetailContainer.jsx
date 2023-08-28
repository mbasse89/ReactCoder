import React from "react"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"

export default function ItemDetailContainer () {
    const [detail, set Detail] = useState ({})
    const {id} = useParams ()

    useEffect(() => {} ,
        console.log (id)
    [id])

     return(
        <div><ItemDetailContainer></ItemDetailContainer></div>
    )
}