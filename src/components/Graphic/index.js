import { CustomLi } from "./style"
import { IoInformationCircle } from "react-icons/io5"
import { GiHamburgerMenu } from "react-icons/gi"
import ReactApexChart from "react-apexcharts"

const Graphic = ({type,content}) =>{

    return(
        <CustomLi>
            <div>
                <h2>
                    {type} 
                    <IoInformationCircle/>
                </h2>
            </div>
            
            <section>
            <ReactApexChart options={content.options} series={content.series} type={type}/>  
            </section>
            

        </CustomLi>
    )
}

export default Graphic