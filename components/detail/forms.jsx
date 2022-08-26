import { Col, Divider, Row } from 'antd'
import React, { Fragment } from 'react'

export default function Forms({ data, title }) {
    return (
        data.length !== 0 &&
        <div className="boxdetail" id={title}>
            <h3>{title} </h3>
            <Divider style={{ marginTop: 10 }}></Divider>
            <Row>
                {
                    data.map((res, i) => (
                        <Fragment key={i}>
                            <Col span={12}>
                                <div className="title">
                                    Name
                                </div>
                                <p className='value'>
                                    {res?.name}
                                </p>
                            </Col>
                            <Col span={12}>
                                <div className="title">
                                    Url
                                </div>
                                <p className='value'>
                                    {res?.url}
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
