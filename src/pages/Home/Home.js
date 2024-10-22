import React from "react";
import Layout from "../../components/Layout";
import { SectionTitle, Paragraph } from "../../styles";
import { Col, Image, Row, Card, Button, CardDeck } from "react-bootstrap";
import Media from "../../components/Media";
import "../../Styles/homePage.css";
// import { ProfileLink } from './styles';

const Cards = ({ items }) => {
  return (
    <Row>
      {items.map((item, index) => (
        <Col md={4} key={index} className="d-flex">
          <Card className="flex-grow-1" style={{ marginBottom: "20px" }}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.summary}</Card.Text>
              {/* <Card.Link href={item.link}>Details</Card.Link> */}
              <Button variant="secondary" href={item.link}>Details</Button> 
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

const Home = ({ user }) => {
  return (
    <Layout user={user}>
      <Row>
        <Col>
          <Image
            src="headshot.jpg"
            width={400}
            style={{ paddingTop: "40px" }}
          />
          <Media media={user.basics} />
        </Col>
        <Col>
          <div>
            <SectionTitle>About Me</SectionTitle>
            <Paragraph>I am a 5th-year PhD student in Computer Science at <a href="https://vis.khoury.northeastern.edu/people/Liudas-Panavas/">Northeastern University</a>, advised by <a href="https://dunne.dev/">Cody Dunne</a>. My research spans <a href="https://osf.io/5t68s">differential privacy</a>, <a href="https://osf.io/r3dy2">data visualization</a>, <a href="https://osf.io/mya85">human-computer interaction (HCI)</a>, and <a href="https://colab.research.google.com/drive/1-tuGJ9RpCm3ROBjUD2lHiRK2H9Tgoc6V?usp=sharing">machine learning model evaluation</a>. Currently, I’m focused on transitioning differential privacy from theory to practical application, particularly addressing usability challenges that are often overlooked. My goal is to make this technology more accessible to everyday users by making it understandable and easy to implement.</Paragraph>

          <Paragraph>In addition to my research experience, I’ve had the opportunity to get experience working at a variety of places. In summer 2024, I interned at <a href="https://www.rand.org/jobs/summer-associates.html">RAND Corporation</a>, designing a differentially private system for releasing <a href="https://www.urban.org/research/publication/privacy-preserving-validation-server-version-2">IRS tax records</a>. As an intern at <a href="https://social-dynamics.net/">Nokia Bell Labs</a>, I contributed to research on AI policy through an interactive survey. As a visiting scholar at Columbia University, I explored <a href="https://tpdp.journalprivacyconfidentiality.org/2024/pdfs/A%20Visualization%20Tool%20to%20Help%20Technical%20Practitioners%20of%20Differential%20Privacy.pdf">differential privacy practitioner challenges</a>.</Paragraph>

        <Paragraph>Technically, I have experience in full-stack development, data analysis, and differential privacy implementation. My expertise includes Python, JavaScript, React, D3, and AWS. I’ve developed <a href="https://manati.ece.neu.edu/dictionary/diz_test/client/build/#__utma=72955916.1812345410.1692196394.1702846292.1704463675.37&__utmb=72955916.2.10.1704463675&__utmc=72955916&__utmx=-&__utmz=72955916.1704463675.37.32.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided)&__utmv=-&__utmk=211474707">dashboards for private databases</a>, <a href="https://dpeducation.streamlit.app/">interactive educational tools</a> for understanding differential privacy, and a <a href="https://pypi.org/project/setmlvis/">Python package</a> to visually compare object detection models in Jupyter notebooks.</Paragraph>

<Paragraph>Ultimately, I want to continue building practical solutions that make advanced technologies usable for individuals and organizations.</Paragraph>


            {/* <Paragraph>{user.basics.summary}</Paragraph> */}
          </div>
        </Col>
      </Row>
      {/* <Row>
        <div>
          <SectionTitle>Selected Papers</SectionTitle>
          <Cards items={user.selectedpapers} />
        </div>
      </Row> */}
      {
        <Row>
          <div>
            <SectionTitle>Selected Projects</SectionTitle>
            <Cards items={user.selectedprojects} />
          </div>
        </Row>
      }
    </Layout>
  );
};

export default Home;
