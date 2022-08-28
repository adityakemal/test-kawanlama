import React from 'react'

import { handleFetchingData } from '../../helper'
import LayoutCustom from '../../components/shared/LayoutCustom'
import { Button, Col, Image, Row } from 'antd'
import Abilities from '../../components/detail/Abilities'
import DetailString from '../../components/detail/DetailString'
import Forms from '../../components/detail/forms'
import GameIndices from '../../components/detail/GameIndices'
import HeldItems from '../../components/detail/HeldItems'
import Moves from '../../components/detail/Moves'
import SingleObject from '../../components/detail/SingleObject'
import Stats from '../../components/detail/Stats'
import Types from '../../components/detail/Types'


export default function DetailPokemon({ data }) {

    // const [refacData, setRefacData] = useState([])

    const {
        abilities,
        base_experience,
        forms,
        game_indices,
        height,
        held_items,
        id,
        is_default,
        location_area_encounters,
        moves,
        name,
        order,
        past_types,
        species,
        sprites,
        stats,
        types,
        weight
    } = data

    const allTitle = [
        "id",//done
        "name", //done
        "base_experience", //done
        "location_area_encounters", //done
        "height",//done
        "weight",//done
        "order", //done
        "is_default",//done

        "abilities", //done
        "forms", //done
        "game_indices", //done
        "held_items", //done
        "moves", //done
        // "past_types", //nothing !!!
        "species", //done
        // "sprites", // skip to much null
        "stats", //done
        "types", //done
    ]

    const siderChild = () => {
        const acceptedLink = [
            "abilities", //done
            "forms", //done
            "game_indices", //done
            "held_items", //done
            "moves", //done
            // "past_types", //nothing !!!
            "species", //done
            // "sprites", // skip to much null
            "stats", //done
            "types", //done
        ]

        const linksComp = () => acceptedLink.map((res, i) => (
            data[res].length !== 0 &&
            <a href={`#${res}`} key={i}>
                <Button className='butchild' size=''>
                    {res} 👉
                </Button>
            </a>
        ))
        return linksComp()

    }

    return (
        <LayoutCustom title={'Detail Pokemon'} isBackHome isSider siderChild={siderChild}>
            <div className="detail">
                <Row justify="center" gutter={12}>
                    <Col xs={24} sm={24} md={24} lg={16} xl={16}>
                        <Row gutter={12} align={'center'}>
                            <Col justify={'center'}>
                                <div className="warpimage">
                                    <Image
                                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                                        width={220}
                                        fallback="https://via.placeholder.com/75x75?text=404"
                                        style={{ border: '1px solid #e3e3e3' }}
                                    />
                                </div>
                            </Col>
                        </Row>

                        <DetailString title={`id`} value={id} />
                        <DetailString title={`name`} value={name} />
                        <DetailString title={`height`} value={height} />
                        <DetailString title={`weight`} value={weight} />
                        <DetailString title={`base_experience`} value={base_experience} />


                        <DetailString title={`location_area_encounters`} value={location_area_encounters} />
                        <DetailString title={`order`} value={order} />
                        <DetailString title={`is_default`} value={is_default ? 'yes' : 'no'} />

                        <Abilities data={abilities} title={'abilities'} />

                        <Forms data={forms} title={'forms'} />

                        <GameIndices data={game_indices} title={'game_indices'} />

                        <HeldItems data={held_items} title={'held_items'} />

                        <Moves data={moves} title={'moves'} />


                        <SingleObject data={species} title={'species'} />

                        <Stats data={stats} title={'stats'} />

                        <Types data={types} title={'types'} />



                    </Col>
                </Row>
                <pre>
                    {/* <small>
                        {JSON.stringify(weight, null, 2)}
                    </small> */}
                </pre>
            </div>
        </LayoutCustom>
    )
}

export async function getServerSideProps(context) {
    const { id } = context.params;
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`
    try {
        const data = await handleFetchingData(url)
        return {
            props: {
                data: data
            }, // will be passed to the page component as props
        }

    } catch (error) {

    }

}
