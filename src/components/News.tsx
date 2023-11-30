import '../styles/news.scss'
import Company1 from '../assets/images/company-1.svg'
import Company2 from '../assets/images/company-2.svg'
import Company3 from '../assets/images/company-3.svg'
import Company4 from '../assets/images/company-4.svg'

interface NewsCardProps {
  image: string
  alt: string
  content: string
  date: string
}

const NewsCard = ({ image, alt, content, date }: NewsCardProps) => {
  return (
    <a
      href="https://github.com/NeonNature"
      target="_blank"
      className="news-card"
    >
      <div className="news-card-img">
        <img src={image} alt={alt} />
      </div>
      <div className="news-card-content">{content}</div>
      <div className="d-flex justify-content-between">
        <div className="news-more">
          <div className="text">Read more</div>
          <div className="icon"></div>
        </div>
        <div className="news-date">{date}</div>
      </div>
    </a>
  )
}

const News = () => {
  return (
    <div className="news-container">
      <div className="news-wrapper">
        <div className="news-title">Press & News</div>
        <h2 className="news-header">See what the press says about Deliver X</h2>
      </div>
      <div className="news-grid">
        <NewsCard
          image={Company1}
          alt="Logo of Company 1"
          content="Deliver X raises $26M in series B funding in growth"
          date="Janurary 22, 2023"
        />
        <NewsCard
          image={Company2}
          alt="Logo of Company 2"
          content="Deliver X claims to be the #1 player in the delivery industry"
          date="Nov 15, 2022"
        />
        <NewsCard
          image={Company3}
          alt="Logo of Company 3"
          content="Introducting curbside ordering with Deliver X"
          date="Sep 18, 2022"
        />
        <NewsCard
          image={Company4}
          alt="Logo of Company 4"
          content="Introducing the Square POS integration with Deliver X"
          date="Mar 12, 2022"
        />
      </div>
    </div>
  )
}

export default News
