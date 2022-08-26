import { Col, Divider, Row } from 'antd'
import React, { Fragment } from 'react'

export default function SingleObject({ data, title }) {
    return (
        <div className="boxdetail" id={title}>
            <h3>{title} </h3>
            <Divider style={{ marginTop: 10 }}></Divider>
            <Row>

                <Col span={12}>
                    <div className="title">
                        Name
                    </div>
                    <p className='value'>
                        {data?.name}
                    </p>
                </Col>
                <Col span={12}>
                    <div className="title">
                        Url
                    </div>
                    <p className='value'>
                        {data?.url}
                    </p>
                </Col>

            </Row>
        </div>
    )
}
