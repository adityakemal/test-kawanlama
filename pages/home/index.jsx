
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/router'

import { Button, Col, Image, Row, Table, Tag } from "antd";
import { getPokemon } from "../../redux/home/home.api";
import { handleAddToBag, handleRandomizeArray } from "../../redux/home/home.reducer";
import LayoutCustom from "../../components/shared/LayoutCustom";

import Search from "antd/lib/input/Search";



export default function Home() {
    const dispatch = useDispatch()
    const router = useRouter()


    const { pokemonData, loading, bagData } = useSelector(state => state.home)

    const [Data, setData] = useState([])

    useEffect(() => {
        dispatch(getPokemon())
    }, [])

    useEffect(() => {
        setData(pokemonData)
    }, [pokemonData])

    const handleRandom = () => {
        dispatch(handleRandomizeArray())

        setFilter('')
        setFilterInput('')
    }

    const handleBag = (obj) => dispatch(handleAddToBag(obj))

    const handleResetData = () => {
        setFilter('')
        setFilterInput('')
    }


    const handleChange = (e) => {
        if (e.target.value.length === 0) {

            handleResetData()
            setData(pokemonData)
        } else {
            setFilterInput(e.target.value)
        }
    }


    const [filterInput, setFilterInput] = useState('')
    const [Filter, setFilter] = useState('')

    const onSearch = (v) => setFilter(v);

    useEffect(() => {
        handleFilter()
    }, [Filter])

    const handleFilter = () => {

        if (Filter.length !== 0) {
            const filtered = pokemonData.filter(res => res.name.includes(Filter))
            setData(filtered)
        } else {
            setData(pokemonData)
        }

    }



    return (

        <LayoutCustom title='List Pokemons' >

            <div className="home">
                <Row justify="center" gutter={12}>
                    <Col xs={24} sm={24} md={24} lg={16} xl={16}>
                        <div className="flex-between" style={{ marginBottom: 10 }}>
                            <div className="flex-between">
                                <Search
                                    placeholder="Search pokemon"
                                    allowClear
                                    name='filter'
                                    value={filterInput}
                                    onSearch={onSearch}
                                    onChange={handleChange}
                                    size="large"
                                    style={{
                                        maxWidth: "300px",
                                    }}
                                    className="mb-4"
                                />
                                &nbsp;
                                {
                                    Filter && <Tag closable color="success" onClose={handleResetData}>{Filter}</Tag>
                                }

                            </div>
                            <Button onClick={handleRandom}> ♻️ Randomize</Button>
                        </div>
                    </Col>
                </Row>

                <Row justify="center" gutter={12}>
                    <Col xs={24} sm={24} md={24} lg={16} xl={16}>
                        <Table
                            columns={[
                                {
                                    title: "Image",
                                    dataIndex: "name",
                                    key: "name",
                                    fixed: "left",
                                    width: "fit-content",
                                    render: (v, obj) => {
                                        const idObj = obj.url.split('/')
                                        const idPoke = idObj[idObj.length - 2]
                                        return (
                                            <div className="d-flex align-items-center">
                                                <Image
                                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idPoke}.png`}
                                                    width={75}
                                                    fallback="https://via.placeholder.com/75x75?text=404"
                                                    style={{ border: '1px solid #e3e3e3' }}
                                                />
                                            </div>
                                        )
                                    }
                                },
                                {
                                    title: "Name",
                                    dataIndex: "name",
                                    key: "name",
                                    fixed: "left",
                                    width: "fit-content",
                                    render: (v, obj) => {

                                        return (
                                            <div >
                                                <h3 style={{ textTransform: 'capitalize', marginBottom: 0 }}>{v?.replaceAll('-', ' ')}</h3>
                                            </div>
                                        )
                                    }
                                },
                                {
                                    title: "",
                                    key: "bag",
                                    fixed: "center",
                                    width: "fit-content",
                                    render: (_, obj) => (
                                        <div className="action-buttons" style={{ textAlign: 'center' }}>
                                            {
                                                bagData.some((v) => v.name === obj.name) ?
                                                    <small><i>-Already in Bag-</i></small>
                                                    :
                                                    <Button
                                                        onClick={() => handleBag(obj)}
                                                    >
                                                        🎒 Save To Bag!
                                                    </Button>
                                            }
                                        </div>
                                    ),
                                },

                                {
                                    title: "",
                                    key: "operation",
                                    fixed: "center",
                                    width: "fit-content",
                                    render: (_, obj) => {
                                        const idObj = obj.url.split('/')
                                        const idPoke = idObj[idObj.length - 2]
                                        return (
                                            <div className="action-buttons" style={{ textAlign: 'center' }}>
                                                <Button onClick={() => router.push(`/home/${idPoke}`)}>
                                                    🕵️‍♂️ Detail
                                                </Button>
                                            </div>
                                        )
                                    }

                                },
                            ]}
                            dataSource={Data}
                            size="middle"
                            loading={loading}
                            pagination={{
                                defaultPageSize: 5,
                                showSizeChanger: true,
                                pageSizeOptions: ['5', '10', '20', '30'],
                                // onShowSizeChange: (e, v) => console.log(e, v),
                                showTotal: (total, range) => (
                                    <span style={{ left: 0, position: "absolute" }}>
                                        Showing {range[0]} to {range[1]} of {total} results
                                    </span>
                                ),
                            }}
                            scroll={{
                                x: "100%",
                                // y: 300,
                            }}
                        />
                    </Col>
                </Row>
            </div>
        </LayoutCustom>
    )
}
