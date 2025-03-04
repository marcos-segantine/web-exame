import { useEffect, useState } from "react"

import { Card } from "../components/Card"

import { exampleAPI } from "../server/example"

import "../styles/home.css"

export const Home = () => {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        document.title = "Observatório IFTM";

        exampleAPI().then((response) => {
            setData(response);
            console.log(response, "response");

        });
    }, []);

    if (data === null) {
        return <div>Carregando...</div>
    }

    return (
        <div className="content">
            <div className="row">
                {
                    data.firstRow.map((data: any) => {
                        return (
                            <Card imgSrc={data.imgSrc} text={data.text} title={data.title} size={data.size} heigth={data.heigth} />
                        );
                    })
                }
            </div>

            {
                data.bottomRows.map((data: any) => {
                    return (
                        <div className="row">
                            <Card text={data.text} title={data.title} size={data.size} heigth={data.heigth} />
                        </div>
                    );
                })
            }
        </div>
    )
}
