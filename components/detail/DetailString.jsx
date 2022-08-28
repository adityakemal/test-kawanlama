import { Col, Divider, Row } from 'antd'
import React from 'react'

export default function DetailString({ title, value }) {
    return (
        <div className="boxdetail basestring" id={title}>
            <Row>
                <Col span={6} >

                    <h3 className='title' style={{ textAlign: 'left', marginBottom: 0 }}>{title} </h3>

                </Col>
                <Col xs={24} sm={24} md={16}>
                    <p className='value' style={{ marginBottom: 0 }}>
                        {value}
                    </p>
                </Col>
            </Row>
        </div>
    )
}
