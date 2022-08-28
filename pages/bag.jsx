
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/router'

import { Button, Col, Image, Row, Space, Table } from "antd";
import { handleRemoveBag } from "../redux/home/home.reducer";
import LayoutCustom from "../components/shared/LayoutCustom";


export default function Bag() {
    const dispatch = useDispatch()
    const router = useRouter()


    const { bagData, loading } = useSelector(state => state.home)

    const handleRemove = (name) => {
        dispatch(handleRemoveBag(name))
    }

    return (

        <LayoutCustom title='My Bag 🎒' isBack isBackHome>
            <div className="home">
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
                                                {/* <pre> */}
                                                <h3 style={{ textTransform: 'capitalize', marginBottom: 0 }}>{v?.replaceAll('-', ' ')}</h3>
                                                {/* </pre> */}
                                            </div>
                                        )
                                    }

                                },

                                {
                                    title: "Action",
                                    key: "operation",
                                    fixed: "center",
                                    width: "fit-content",
                                    render: (_, obj) => {
                                        const idObj = obj.url.split('/')
                                        const idPoke = idObj[idObj.length - 2]
                                        return (
                                            <Space size={[8, 16]} wrap align="center" direction='horizontal'>
                                                <Button danger onClick={() => handleRemove(obj.name)}>
                                                    🗑 Remove
                                                </Button>
                                                <Button onClick={() => router.push(`/home/${idPoke}`)}>
                                                    🔍 Detail
                                                </Button>
                                            </Space>
                                        )
                                    }

                                },
                            ]}
                            dataSource={bagData}
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
