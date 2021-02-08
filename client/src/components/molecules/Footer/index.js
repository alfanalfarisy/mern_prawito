import React from 'react'
import './footer.scss'
import { ICGithub, ICInstagram, ICTelegram, ICTwitter } from '../../../assets'

const Icon = ({img}) => {
    return (
        <div className="icon-wrapper">
            <img className="icon-medsos" src={img} alt="icon"/>
        </div>
    )
}

const Footer = () => {
    return (
        <div >
            <div className="footer">
                <div className="social-wrapper">
                    <Icon img={ICTwitter} />
                </div>
                <div className="social-wrapper">
                    <Icon img={ICTwitter}/>
                    <Icon img={ICTelegram}/>
                    <Icon img={ICGithub}/>
                    <Icon img={ICInstagram}/>
                </div>
            </div>
            <div className="copyright">
                <p>Copyright</p>
            </div>
        </div>
    )
}

export default Footer