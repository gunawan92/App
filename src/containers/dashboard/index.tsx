import React from 'react';
import { Alert, Card, Col, Layout, PageHeader, Row, Typography } from 'antd';
import { GithubFilled, TwitterSquareFilled } from '@ant-design/icons';
import { RouteComponentProps } from 'react-router-dom';
import { RedditIcon, RedditShareButton, TelegramIcon, TelegramShareButton, TwitterIcon, TwitterShareButton } from 'react-share';
import { LEAGUES } from 'configs/LeagueConstants';

const { Title } = Typography;
const { Header, Footer, Sider, Content } = Layout;
const { Meta } = Card;

interface RouterProps {
}

interface IProps extends RouteComponentProps<RouterProps> {
}

interface IState {
}

export class DashboardContainer extends React.Component<IProps, IState> {

  state = {
  }

  componentDidMount = async () => {

  }

  render() {
    return (
      <>
        <Layout>
          {/* <Header>Header</Header> */}
          <Content>
            <PageHeader
              title="Home"
              subTitle="Compare team's last season and this season"
              // avatar={{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' }}
              // breadcrumb={{
              //   routes: [{
              //     path: '/',
              //     breadcrumbName: 'Home',
              //   },
              //   ]
              // }}
              extra={[
              
                <TelegramShareButton
                  url="http://adupenalti.com"
                  title="Compare team's last season and this season"
                  className="Demo__some-network__share-button"
                >
                  <TelegramIcon size={32} round />
                </TelegramShareButton>
              ]}
            />
            <Row
              justify="center"
              align="middle"
              // style={{ marginTop: 20 }}
              gutter={[20, 20]}
            >
              
            </Row>
            <Row
              justify="center"
              align="middle"
              // style={{ marginTop: 20 }}
              gutter={[20, 20]}
            >
              <Title level={3}>Leagues</Title>
            </Row>
            <Row
              justify="center"
              align="middle"
              gutter={[10, 10]}
            >
              {LEAGUES.map((team: any) => {
                return (
                  <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 6 }}
                lg={{ span: 4 }}
                xl={{ span: 4 }}
              >
                
                <Card
                  // title={team.name}
                  // headStyle={{ textAlign: "center" }}
                  hoverable
                  // style={{ width: 400, height:400 }}
                  bordered={false}
                  onClick={(e: any) => {
                    this.props.history.push(`/league/${team.code}`);
                  }}
                  // cover={<img alt="example" src={require(`assets/images/leagues/${team.code}.png`)} />}
                >
                  {/* <Meta
                    // avatar={<Avatar src="https://img.icons8.com/color/48/000000/chelsea-fc.png" />}
                    // title="English Premier League"
                  // description="This is the description"
                  /> */}
                  <Meta
                        // avatar={<Avatar src="https://img.icons8.com/color/48/000000/chelsea-fc.png" />}
                        title={team.name}
                      // description="This is the description"
                      />
                </Card>
              </Col>
                )
               })
               }
              
            </Row>
          </Content>
          <Footer>
            <Row
              justify="center"
              align="middle"
              gutter={[10, 10]}
            >
              
            </Row>

          </Footer>
        </Layout>

      </>

    );
  }
}
