import React, { useEffect, useState } from 'react'
import CardMovie from './CardMovie'
import { Row } from 'react-bootstrap'
import Pajination from './Pajination'
import { useDispatch, useSelector } from 'react-redux'
import { getAllMoves } from '../Redux/Action/MovieAction'


const MoviesList = () => {

    const [movise, setmMvise] = useState([])
    const disbtch = useDispatch();
    useEffect(() => {
        disbtch(getAllMoves())
    }, [])
    const dataMoves = useSelector((State) => State.Movies)

    useEffect(() => {
        setmMvise(dataMoves)
    }, [])
    return (
        <Row className='mt-3'>
            {movise.length >= 1 ? (movise.map((mov) => {
                return (<CardMovie key={mov.id} mov={mov} />)
            })) : <h2> لا يوجد افلام</h2>}
            <Pajination />
        </Row>
    )
}

export default MoviesList
