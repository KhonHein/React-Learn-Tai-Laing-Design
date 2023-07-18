import SectionHeader from "../../components/SectionHeader"
import { FaQuestion } from "react-icons/fa"
import { faqs } from '../../data'
import FAQ from "../../components/FAQ"

const About = () => {
  return (
    <section className="faqs">
        <div className="container faqs_container">
            <SectionHeader icon={<FaQuestion/>} title="About" />
            <div className="faqs_wrapper">
                {
                    faqs.map(({id, question , answer})=>{
                        return <FAQ key={id} question={question} answer={answer}/>
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default About