import { Button } from "./Button";

import "../styles/card.css";

interface CardProps {
    imgSrc?: string;
    text: string;
    title: string;
    size: "small" | "medium" | "large" | "all";
    heigth?: "h-small" | "h-medium" | "h-large" | "h-auto";
    bottomOptions?: boolean;
}

export const Card = ({ imgSrc, text, title, size, heigth, bottomOptions }: CardProps) => {
    return (
        <div className={`container ${size} ${heigth || "h-auto"}`}>
            <div className="top">
                <div className="photo-title">
                    {
                        imgSrc &&
                        <img src={imgSrc} alt="" />
                    }
                    <h3>{title}</h3>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(33, 91, 184, 1)" }}><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
            </div>

            <p>O Observatório tem como principal objetivo o mapeamento das áreas de pesquisa, perfis de professores e elaboração de indicadores de pesquisa. O Observatório faz parte do Grupo de Pesquisa em Mineração da Dados e Imagens (MiDI) do IFTM Campus Avançado Uberaba Parque Tecnológico. As estatísticas são realizadas usando o currículo Lattes dos professores permanentes da instituição.
                Para maiores informações {text}</p>

            {
                bottomOptions &&
                <div className="bottom">
                    <Button text="Acessar" onClick={() => { }} style="no-back-color" />

                    <div className="icons">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(33, 91, 184, 1)" }}><path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z"></path></svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(33, 91, 184, 1)" }}><path d="M5.5 15a3.51 3.51 0 0 0 2.36-.93l6.26 3.58a3.06 3.06 0 0 0-.12.85 3.53 3.53 0 1 0 1.14-2.57l-6.26-3.58a2.74 2.74 0 0 0 .12-.76l6.15-3.52A3.49 3.49 0 1 0 14 5.5a3.35 3.35 0 0 0 .12.85L8.43 9.6A3.5 3.5 0 1 0 5.5 15zm12 2a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5zm0-13A1.5 1.5 0 1 1 16 5.5 1.5 1.5 0 0 1 17.5 4zm-12 6A1.5 1.5 0 1 1 4 11.5 1.5 1.5 0 0 1 5.5 10z"></path></svg>
                    </div>
                </div>
            }

        </div>
    )
}