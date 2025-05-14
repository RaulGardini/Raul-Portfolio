import React from "react";
import Footer from "../../componentes/Footer";
import './Projetos.css'

function Projetos() {
    return (
        <>
            <main>
                <Footer />
                <div className="projetos">
                    <div className="titulo"><h1>Projetos Principais</h1></div>
                    <div className="displayflex">
                        <div className="projeto1">
                            <h1>WebDanca</h1>
                            <div className="linha"></div>
                            <p className="textos">WebPassos é um sistema de gestão desenvolvido especialmente para academias de dança. Seu principal objetivo é facilitar o gerenciamento administrativo, financeiro e operacional dessas instituições, oferecendo recursos que otimizam processos como controle de alunos, turmas, professores, horários e pagamentos. Atualmente, o WebPassos possui um frontend funcional, e a integração com um banco de dados está prevista para as próximas fases do desenvolvimento. Com essa evolução, será possível armazenar e consultar informações em tempo real.</p>
                            <div className="link">
                                <h4>Link:</h4>
                                <a href="https://github.com/RaulGardini/WebPassos"
                                    target="_blank">https://github.com/RaulGardini/WebPassos</a>
                            </div>
                        </div>
                        <div className="projeto2">
                            <h1>Alarme</h1>
                            <div className="linha"></div>
                            <p className="textos">Meu Alarme é um aplicativo mobile desenvolvido em React Native, projetado para ajudar os usuários a gerenciar seus horários com praticidade. Com uma interface simples e intuitiva, o app permite configurar múltiplos alarmes personalizados, oferecendo controle total sobre horários, repetições e notificações.</p>
                            <div className="link">
                                <h4>Link:</h4>
                                <a href="https://github.com/RaulGardini/Alarme"
                                    target="_blank">https://github.com/RaulGardini/Alarme</a>
                            </div>
                        </div>
                        <div className="projeto3">
                            <h1>Motoclube</h1>
                            <div className="linha"></div>
                            <p className="textos">Criei um layout responsivo inspirado no esquema de produção de dinheiro falso do motoclube no GTA V. O design simula o fluxo de produção e gerenciamento dos recursos financeiros do negócio ilegal dentro do jogo, com foco visual e organizacional. A interface é clara e intuitiva, destacando informações como estoque, produção, segurança e upgrades,</p>
                            <div className="link">
                                <h4>Link:</h4>
                                <a href="https://github.com/RaulGardini/Motoclube"
                                    target="_blank">https://github.com/RaulGardini/Motoclube</a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Projetos;