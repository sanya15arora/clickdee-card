import "./style.css"
import {useEffect, useState} from "react";

export default function ChooseItemCard(props) {

    let {count}= props

    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches
    )

    useEffect(() => {
        window
            .matchMedia("(min-width: 768px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);

    return (
        <div className={'Clickdee-choose-item'} style={{ background: ( matches && count % 2 !== 0) ? '#fff': ''}}>
            <div className={'item-container'}>
                <div>
                    <div className={'item-icon-holder'}>
                        <img
                            className={'item-img'}
                            src={'https://media.istockphoto.com/id/1282050925/vector/target-icon-on-transparent-background.jpg?s=1024x1024&w=is&k=20&c=Uyg1Tyry8OaJ8M5YuWspbLUO_uQCISsDEY5-suSamps='}
                            alt={'sample-img'}/>
                        <h3 className={'item-heading'}>Choose Your <br/> Local Targeting</h3>
                    </div>
                </div>
                <p className={'item-desc'}>Our targeted and tracked calls are tailored to your business needs, audience,
                    and geolocation.</p>
            </div>
        </div>
    )
}