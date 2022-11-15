import React from "react";
import Layout from "../../components/Layout";
import { SectionTitle, Paragraph } from "../../styles";
import { Col, Image, Row, Card, CardDeck } from "react-bootstrap";
import Media from "../../components/Media";
// import { ProfileLink } from './styles';

const Cards = ({ items }) => {
  return (
    <CardDeck>
      {items.map((item, index) => (
        <Card key={index} style={{ width: "22rem" }}>
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.summary}</Card.Text>
            <Card.Link href={item.link}>Details</Card.Link>
          </Card.Body>
        </Card>
      ))}
    </CardDeck>
  );
};

const Home = ({ user }) => {
  return (
    <Layout user={user}>
      <Row>
        <Col>
          <Image src="happyTwitterPic.jpg" width={360} />
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
              My research focuses on explaiable AI for object detection
              algorithms as well as{" "}
              <a href="https://visdunneright.github.io/Privacy-Plot-Viewer/">
                visualization for private data
              </a>
              . I am currently working on evaluating the quality of{" "}
              <a href="https://towardsdatascience.com/creating-synthetic-time-series-data-67223ff08e34">
                synthetic time series data
              </a>
              . My goal is to help everyday users evaluate and assess the
              utility of complicated model outputs. If this area of research
              interests you, please reach out to me for more information or to
              set up collaborations.
            </Paragraph>
            <Paragraph>
              {" "}
              In my spare time I also enjoy activities such as hiking &#129406;
              (White mountains, camping), reading &#128218; (fantasy, memoirs,
              sci-fi), boxing &#129354; (really clears the head), traveling
              &#9992; (hope to see more of South America), pickleball &#127934;
              (everyones doing it these days), basketball &#127936; (would help
              to hit another growth spurt), and building &#128666; (I have
              joined the masses of van lifers).
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
