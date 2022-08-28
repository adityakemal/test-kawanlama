import { Col, Divider, Row } from 'antd'
import React, { Fragment } from 'react'

export default function HeldItems({ data, title }) {
    return (
        data.length !== 0 &&
        <div className="boxdetail" id={title}>
            <h3>{title} </h3>
            <Divider style={{ marginTop: 10 }}></Divider>
            <Row>
                {
                    data.map((res, i) => (
                        <Fragment key={i}>
                            <Col xs={24} md={12}>
                                <div className="title">
                                    Item
                                </div>
                                <p className='value'>
                                    {res?.item?.name}
                                </p>
                            </Col>
                            <Col xs={24} md={12}>
                                <div className="title">
                                    Url
                                </div>
                                <p className='value'>
                                    {res?.item?.url}
                                </p>
                            </Col>
                            <Col span={24}>
                                <div className="title">
                                    Version Details
                                </div>
                                <Row gutter={[10, 10]}>
                                    {
                                        res?.version_details?.map((v, j) => (
                                            <Col xs={24} md={6} className='card'>
                                                <div className="box">
                                                    <p className='value'>
                                                        Rarity : {v?.rarity}
                                                    </p>
                                                    <p className='value'>
                                                        name : {v?.version?.name}
                                                    </p>
                                                </div>
                                            </Col>
                                        ))
                                    }
                                </Row>
                            </Col>

                            {
                                i !== (data.length - 1) &&
                                <Col span={24}><hr /></Col>
                            }
                            {
                                data.length === 0 &&
                                <Col span={24}><i>Data not available</i></Col>
                            }

                        </Fragment>
                    ))
                }



            </Row>
        </div>
    )
}
