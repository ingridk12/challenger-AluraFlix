import { Imagen } from "../UI/Estilos";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const CardVideoLink = styled.a`

`;

const CarrucelImagen = styled(Imagen)`
    border: 2px solid ${({color}) => color };
    box-sizing: border-box;
`;
const TituloVideo =styled.h3`
font-size: 1.5rem;
font-weight: bold;
color: #fff;
text-align: center;
margin: 10px 0;
`

const BotonEditar =styled.button`
display: flex;
 justify-content: center;
margin-top: 10px;
background-color: #23e06c;
color: #fff;
border: none;
text-decoration: none;
padding: 10px 20px;
border-radius: 5px;
cursor: pointer;
font-size: 24px;
text-align: center;
`
const ContenedorCard =styled.div`
display: grid;
grid-template-columns: repeat(1, 1fr);
`

    

export function CardVideo({id, link, src, color, onVideoEliminado}) {
    const navigate = useNavigate();
     
   
     
  const handleEditar = () => {
    navigate(`/editar-video/${id}`);
  };
  
    return (
        <ContenedorCard>
         <CardVideoLink href={link} target="__blank" >
            <CarrucelImagen src={src} color={color} ></CarrucelImagen>
        </CardVideoLink>
        <TituloVideo></TituloVideo>
           
            <BotonEditar onClick={handleEditar}>Acciones</BotonEditar>
         </ContenedorCard>
    );    
}