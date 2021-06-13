import React, { useEffect } from "react";
import { Card } from "@material-ui/core";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteContent, startGetContent } from "../../actions/content";

const ResultadosContainer = styled.div`
  padding-top: 30px;
  box-sizing: border-box;
  display: inline-block;
  font-size: 1rem;
  text-align: center;
  width: 100%;
`;

const Resultado = styled.p`
  text-align: left;
`;

const Foto = styled.img`
  width: 100px;
  border-radius: 3px;
  float: right;
`;
const Tit = styled.span`
  font-weight: bolder;
  color: rgb(249, 143, 18);
`;

const Tit_1 = styled.p`
  font-weight: bolder;
  font-size: 1.5rem;
  color: rgb(249, 143, 18);
  width: 100%;
  display: inline;
`;

export default function ListaResultados() {
  // const { titulo, tipo, profesor, precio,id } = useSelector(
  //   (state) => state.content
  // );
  const dispatch = useDispatch();

  const { content } = useSelector((state) => state.content);

  useEffect(() => {
    //Trae el contenido del state
    dispatch(startGetContent())
  },[content]);



  const handleDeleteCard = (item) => {
    dispatch(deleteContent(item.id));
  };

  const handleUpdateCard = () => {
    alert("Accion de editar card");
  };

  const typeOfUser = "admin";


  return (
    <>
      {/* Muestra unas tarjetas mostrando las ofertas que hay si es que hay, de lo contrario muestra un aviso de que no se encontró */}
      <ResultadosContainer className="container-fluid mt-1">
        {content?.length >= 1 ? (
          content?.map((item, i) => (
            <Card
              key={item.id}
              variant="outlined"
              style={{
                marginTop: "10px",
                textAlign: "left",
                padding: "25px",
                borderRadius: "8px",
                background: "#ffffff",
                boxShadow: "0px 0px 1px 0px #3A2D31",
                cursor: "pointer",
              }}
            >
              <Resultado>
                <Foto src="https://i.ibb.co/9NZbMcm/logo-educapp-recortado.png" />
                <Tit_1>{item.titulo}</Tit_1>
                <br />
                <Tit>Tipo: </Tit>{item.capacitador}
                <br />
                <Tit>Tipo: </Tit>
                {item.tipo}
                <br />
                <Tit>Precio: </Tit>
                {item.precio}
                <br />
                <Tit>Prestador: </Tit>
                {item.profesor}
                <br />
                <Tit>Tipo: </Tit>
                {item.tipo}
                <br />
                <Tit>Precio: </Tit>
                {item.precio}

                {/* Opciones para administrador */}

                {typeOfUser === "admin" ? (
                  <>
                    <hr />
                    <p style={{ textAlign: "right" }}>
                      <a
                        className="link link-danger"
                        onClick={() => handleDeleteCard(item)}
                      >
                        {" "}
                        Borrar{" "}
                      </a>{" "}
                      |
                      <a
                        className="link link-success"
                        onClick={handleUpdateCard}
                      >
                        {" "}
                        Editar{" "}
                      </a>
                    </p>
                  </>
                ) : null}
              </Resultado>
            </Card>
          ))
        ) : (
          <div
            variant="outlined"
            style={{
              marginTop: "5px",
              textAlign: "left",
              padding: "25px",
              borderRadius: "8px",
              background: "#afafaf",
            }}
          >
            <>No se encontraron resultados que coincidan con la búsqueda...</>
          </div>
        )}
      </ResultadosContainer>
    </>
  );
}
