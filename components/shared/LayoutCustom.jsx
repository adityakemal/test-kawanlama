import { Button, Col, Divider, Layout, Row } from 'antd'
import { Content, Footer, Header } from 'antd/lib/layout/layout'
import Sider from 'antd/lib/layout/Sider'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux'

export default function LayoutCustom({ children, title, isBack, siderChild, isSider, isBackHome }) {
  const router = useRouter()
  const handleBack = () => router.back()
  const handleBackHome = () => router.push('/home')

  const { bagData } = useSelector(state => state.home)

  return (
    <Layout>

      <Header style={{ position: 'sticky', zIndex: 100, width: '100%', top: 0 }}>
        <Row justify="center" gutter={12}>
          <Col xs={24} sm={24} md={24} lg={16} xl={16}>
            <div className='flex-between'>
              <Link href="/home">
                <a>
                  <h1 style={{ textAlign: "center", color: 'white' }}>Pokem👾n </h1>
                </a>
              </Link>
              <Link href="/bag">
                <a>
                  <h1 className='flex-between'>
                    🎒 <small style={{ color: 'white', fontSize: 12 }}>({bagData.length})</small>
                  </h1>
                </a>
              </Link>
            </div>
          </Col>
        </Row>
      </Header>

      <Layout>
        {
          isSider &&
          <Sider
            width={160}
            style={{
              overflow: 'auto',
              height: '100vh',
              position: 'fixed',
              left: 0,
              top: 0,
              bottom: 0,
              color: 'white',
              paddingTop: 70,
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            <div>{siderChild()}</div>
          </Sider>
        }
        <Content>
          <Row justify="center" gutter={12}>
            <Col xs={24} sm={24} md={24} lg={16} xl={16}>
              <div className="flex-between backheader">
                {
                  isBack &&
                  <Button className='backbutton' onClick={handleBack}>
                    ⬅️ Back
                  </Button>
                }
                {
                  isBackHome && <Button className='backbutton' onClick={handleBackHome}>
                    ⬅️ Home
                  </Button>
                }
                <h2>{title}</h2>

                <span></span>
              </div>

            </Col>
          </Row>
          <main>
            {children}
          </main>
        </Content>

      </Layout>

      <Footer>
        <pre style={{ textAlign: "center" }}>
          <small>© 2022 Test KawanLama.com. Site by Kemal Aditya Zulfiqar.</small>
        </pre>
      </Footer>
    </Layout>
  )
}
