import { Col, Divider, Row } from 'antd'
import React, { Fragment } from 'react'

export default function Abilities({ data, title }) {
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
                                    Name
                                </div>
                                <p className='value'>
                                    {res?.ability?.name}
                                </p>
                            </Col>
                            <Col xs={24} md={12}>
                                <div className="title">
                                    Url
                                </div>
                                <p className='value'>
                                    {res?.ability?.url}
                                </p>
                            </Col>
                            <Col xs={24} md={12}>
                                <div className="title">
                                    is Hidden
                                </div>
                                <p className='value'>
                                    {res?.is_hidden ? 'yes' : 'no'}
                                </p>
                            </Col>

                            <Col xs={24} md={12}>
                                <div className="title">
                                    Slot
                                </div>
                                <p className='value'>
                                    {res?.slot}
                                </p>
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
