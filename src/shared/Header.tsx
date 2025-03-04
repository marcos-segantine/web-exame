import { Link } from "react-router-dom";

import "../styles/header.css";

export const Header = () => {
    return (
        <header>
            <div className="header-top">
                <div className="logo">
                    <img src="src/assets/images/obs.png" alt="" />
                    <span className="separator"></span>
                    <h1>Observatório <strong>IFTM</strong></h1>
                </div>

                <nav>
                    <ul>
                        <li>
                            <a href="https://www.gov.br/economia/acl_users/credentials_cookie_auth/require_login?came_from=https%3A//www.gov.br/economia/pt-br/canais_atendimento/ouvidoria/simplifique">Simplifique!</a>
                        </li>
                        <li>
                            <a href="https://www.gov.br/secom/pt-br/acesso-a-informacao/comunicabr/">Comunica BR</a>
                        </li>
                        <li>
                            <a href="https://www.gov.br/pt-br/participacao-social/">Participe!</a>
                        </li>
                        <li>
                            <a href="https://www.gov.br/acessoainformacao/pt-br">Acesso à informação</a>
                        </li>
                    </ul>

                    <span className="separator"></span>

                    <div className="icons">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgb(33, 91, 184, 1)" }}><path d="M13 6h2v11h-2zm4-3h2v14h-2zM9 9h2v8H9zM4 19h16v2H4zm1-7h2v5H5z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(33, 91, 184, 1)" }}><path d="M12 2C6.486 2 2 6.486 2 12v4.143C2 17.167 2.897 18 4 18h1a1 1 0 0 0 1-1v-5.143a1 1 0 0 0-1-1h-.908C4.648 6.987 7.978 4 12 4s7.352 2.987 7.908 6.857H19a1 1 0 0 0-1 1V18c0 1.103-.897 2-2 2h-2v-1h-4v3h6c2.206 0 4-1.794 4-4 1.103 0 2-.833 2-1.857V12c0-5.514-4.486-10-10-10z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(33, 91, 184, 1)" }}><path d="M12 2C6.486 2 2 5.589 2 10c0 2.908 1.898 5.515 5 6.934V22l5.34-4.005C17.697 17.852 22 14.32 22 10c0-4.411-4.486-8-10-8z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(33, 91, 184, 1)" }}><path d="M12 2C6.579 2 2 6.58 2 12s4.579 10 10 10 10-4.58 10-10S17.421 2 12 2zm0 17V5c3.829 0 7 3.169 7 7 0 3.828-3.171 7-7 7z"></path></svg>
                    </div>

                    <div className="login-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(33, 91, 184, 1)" }}><path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"></path></svg>
                        <span>Entrar</span>
                    </div>
                </nav>
            </div>
            <div className="header-bottom">
                <div className="contains-menu-title">
                    <div className="menu-mobile">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div className="header-title">
                        <h1>Bem vindo ao Observatório IFTM</h1>
                        <span>Página Inicial</span>
                    </div>
                </div>

                <div className="search-box">
                    <input className="search" type="text" placeholder="Oque você procura?" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(33, 91, 184, 1)" }}><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path></svg>
                </div>
            </div>
        </header>
    )
}