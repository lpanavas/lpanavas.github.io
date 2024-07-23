import React from "react";
import Layout from "../../components/Layout";
import { SectionTitle, Paragraph } from "../../styles";
import { Col, Image, Row, Card, CardDeck } from "react-bootstrap";
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
              <Card.Link href={item.link}>Details</Card.Link>
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
            <Paragraph>
              I am a CS PhD student at the{" "}
              <a href="https://visualization.khoury.northeastern.edu/#/">
                Northeastern University Data Visualization Lab
              </a>{" "}
              advised by{" "}
              <a href="https://visualization.khoury.northeastern.edu/people/Cody-Dunne/">
                Cody Dunne
              </a>
              . I have presented work at top tier conferences in human-computer
              interaction (ACM CHI 2022) and data visualization (IEEE Vis 2022).
              I have experience prototyping and deploying visual analytics
              software as well as running quantitative and qualitative
              evaluations of user experiences.
            </Paragraph>
            <Paragraph>
              {" "}
              My research focuses on explainable AI for object detection
              algorithms as well as{" "}
              <a href="https://visdunneright.github.io/Privacy-Plot-Viewer/">
                visualization for differentially private data
              </a>
              . My goal is to help everyday users evaluate and assess the
              utility of complicated model outputs. If this area of research
              interests you, please reach out to me for more information or to
              set up collaborations.
            </Paragraph>
            <Paragraph>
              I've had the privilege to work with amazing collaborators at
              research institutions and corporate labs. Notably, I interned at{" "}
              <a href="https://social-dynamics.net/">Nokia Bell Labs</a>, where
              I engineered a cloud-based survey to gather public sentiment on EU
              AI policy. Concurrently, I served as an{" "}
              <a href="https://opendp.org/blog/meet-2023-opendp-fellows-pauline-maury-laribiere-and-liudas-panavas">
                OpenDP Fellow
              </a>{" "}
              at Harvard University's Privacy Tools Project, conducting
              practitioner interviews to pinpoint challenges in the field of
              differential privacy. I have also worked with collaborators from{" "}
              <a href="https://rachelcummings.com/">Columbia University</a>,{" "}
              <a href="https://www.melanietory.com/">the Roux Institute</a>, and{" "}
              <a href="https://groups.cs.umass.edu/asarv/">UMass Amherst</a>.
            </Paragraph>

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
