import SideBar from "../components/Sidebar/SideBar";
import { Container } from "../styles/pages/dashboard";
import { whithSSRAuth } from "../utils/whithSSRAuth";

export default function Login() {
  return (
    <Container>
      <SideBar />
    </Container>
  )
}


export const getServerSideProps = whithSSRAuth(async ctx => {
  return {
    props: {}
  }
})
