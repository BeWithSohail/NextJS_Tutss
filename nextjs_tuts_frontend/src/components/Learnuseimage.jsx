import Image from 'next/image';
import naturalImage from "../../public/image/24701-nature-natural-beauty.jpg"

const Learnuseimage = () => {
  return (
      <div>
          <Image
                src={naturalImage}
                alt="Description of the image"
                width={500}
                height={300}
          />  
    </div>
  )
}

export default Learnuseimage;