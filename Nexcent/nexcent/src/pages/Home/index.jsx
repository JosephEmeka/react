import Hero from "./Hero";
import Clients from "./Clients";
import Member from "./Member";
import Unlock from "./Unlock";
import image1 from "../../asset/Frame 35.png";
import image2 from "../../asset/pana.png"
import Calender from "./Calender";
import Achievement from "./Achievement";
import Customer from "./Customers";
import Community from "./Community";
let textA = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed"
let textB = "accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed"
let textC = "porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam"
let textD = "quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."
let textE = "Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt "
let textF = "molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at"
let textG = "libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta"
let textH = "nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer"
let textI = "in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi "
let textJ = "ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida."
const Home = () =>{

    return(
        <>
            <Hero/>
            <Clients/>
            <Member/>
            <Unlock image={image1}
                    text1={textA}
                    text2={textB}
                    text3={textC}
                    text4={textD}
                    buttontxt={"Learn More"}
            />
            <Achievement/>

            <Calender image={image2}
                    text1={textE}
                    text2={textF}
                    text3={textG}
                    text4={textH}
                    text5={textI}
                    text6={textJ}
                    buttontxt={"Learn More"}
            />

            <Customer/>
            <Community/>

        </>
    )
}

export default Home;