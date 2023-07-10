import IntroCard from "./IntroCard";
import ChooseItemCard from "./ChooseItemCard";
import "./style.css"
import {useEffect, useState} from "react";

export default function ClickdeeChoose() {

    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches
    )

    useEffect(() => {
        window
            .matchMedia("(min-width: 768px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);


    const totalItems = 5;

    const items = new Array(totalItems).fill(null);

    return (

        <div className={'Clickdee-choose'}>
            {!matches && <IntroCard/>}
            <div className={'Clickdee-choose-wrapper'}>
                {matches && <IntroCard/>}
                {items.map((elementInArray, index) => <ChooseItemCard key={index} count={index}/>)}
            </div>
        </div>

    )
}