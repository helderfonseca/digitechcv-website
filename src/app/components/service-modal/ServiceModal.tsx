'use client'

import React from "react";
import { Modal, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "./serviceModal.css";

interface ServiceModalProps {
    showModal: boolean;
    handleCloseModal: () => void;
    selectedContentIndex: number | null;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ showModal, handleCloseModal, selectedContentIndex }) => {

    let modalContent;
    switch (selectedContentIndex) {
        case 0:
            modalContent = {
                image: "https://cdn-icons-png.flaticon.com/128/1163/1163463.png",
                title: "Desenvolvimento de Software",
                description: ["Landing Page", "One Page", "Institucional", "E-commerce", "Mobile"]
            };
            break;
        case 1:
            modalContent = {
                image: "https://cdn-icons-png.flaticon.com/128/7576/7576835.png",
                title: "Help Desk",
                description: "Nosso serviço de Help Desk oferece suporte técnico abrangente para resolver rapidamente qualquer problema que você possa enfrentar com seus sistemas e equipamentos informáticos. Nossa equipe  está disponível para fornecer assistência remota ou presencial, garantindo que seus sistemas funcionem sem problemas. Além disso, oferecemos serviços de manutenção e reparação de equipamentos informáticos para garantir o desempenho máximo e a confiabilidade de seus dispositivos, desde computadores desktop e laptops."
            };
            break;
        case 2:
            modalContent = {
                image: "https://cdn-icons-png.flaticon.com/128/10242/10242258.png",
                title: "Formações nas TICs",
                description: "Nossa formação em Tecnologias da Informação e Comunicação (TICs) é projetada para atender tanto às necessidades das empresas quanto dos indivíduos. Oferecemos cursos práticos e personalizados para capacitar sua equipa empresarial com as habilidades necessárias em áreas como programação, segurança cibernética, administração de sistemas e muito mais. Além disso, nossos programas de formação também estão disponíveis para particulares que desejam aprimorar suas habilidades em TI, seja para avançar em suas carreiras ou simplesmente para expandir seu conhecimento em tecnologia."
            };
            break;
        case 3:
            modalContent = {
                image: "https://cdn-icons-png.flaticon.com/128/3141/3141181.png",
                title: "Marketing Digital",
                description: ["Criação de Paginas nas Redes Sociais", "Gestão de Páginas de Redes Sociais", "Criação de Conteúdo Multimídia para Redes Sociais", "Tráfego pago", "Estratégias de Marketing"]
            };
            break;
        default:
            modalContent = {
                image: "",
                title: "",
                description: "",
            };
    }

    return (
        <Modal size="lg" aria-labelledby="modal-title-vcenter" centered show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title id="modal-title-vcenter">{modalContent.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Image src={modalContent.image} alt={modalContent.title} style={{ width: '100px' }} />
                {Array.isArray(modalContent.description) ? (
                    <ul>
                        {modalContent.description.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    <p>{modalContent.description}</p>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="" onClick={handleCloseModal}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ServiceModal;
