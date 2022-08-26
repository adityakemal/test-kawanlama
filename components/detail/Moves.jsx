import { Col, Divider, Row } from 'antd'
import React, { Fragment } from 'react'

export default function Moves({ data, title }) {
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
                                    {res?.move?.name}
                                </p>
                            </Col>
                            <Col span={12}>
                                <div className="title">
                                    Url
                                </div>
                                <p className='value'>
                                    {res?.move?.url}
                                </p>
                            </Col>
                            <Col span={24}>
                                <div className="title">
                                    Version Group Details
                                </div>
                                <Row gutter={[10, 10]}>
                                    {
                                        res?.version_group_details?.map((v, j) => (
                                            <Col span={8} className='card'>
                                                <div className="box">
                                                    <p className='value'>
                                                        move_learn_method : {v?.move_learn_method?.name}
                                                    </p>
                                                    <p className='value'>
                                                        level_learned_at : {v?.level_learned_at}
                                                    </p>
                                                    <p className='value'>
                                                        version_group : {v?.version_group?.name}
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
