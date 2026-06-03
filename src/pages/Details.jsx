import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function Details() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [isNewProduct, setIsNewProduct] = useState(false);

  const [nomeProduto, setNomeProduto] = useState("");
  const [quantidade, setQuantidade] = useState(0);

  useEffect(() => {
    async function buscarProduto() {
      try {
        const docRef = doc(db, "produtos", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setNomeProduto(docSnap.data().nome_produto);
          setQuantidade(docSnap.data().quantidade);
          setIsNewProduct(false);
        } else {
          setIsNewProduct(true);
        }
      } catch (error) {
        console.error("Erro ao buscar no Firebase:", error);
        alert(
          "Erro de conexão. Verifique se configurou o Firebase corretamente.",
        );
      } finally {
        setLoading(false);
      }
    }

    buscarProduto();
  }, [id]);

  const handleCadastrar = async () => {
    try {
      await setDoc(doc(db, "produtos", id), {
        id_produto: id,
        nome_produto: nomeProduto,
        quantidade: Number(quantidade),
      });
      alert("Produto cadastrado com sucesso!");
      navigate("/scanner");
    } catch (error) {
      console.error(error);
      alert("Erro ao cadastrar.");
    }
  };

  const handleAtualizarEstoque = async () => {
    try {
      await updateDoc(doc(db, "produtos", id), {
        quantidade: Number(quantidade),
      });
      alert("Estoque atualizado!");
      navigate("/scanner");
    } catch (error) {
      console.error(error);
      alert("Erro ao atualizar.");
    }
  };

  if (loading) {
    return (
      <div
        style={{
          padding: "50px",
          textAlign: "center",
          fontFamily: "sans-serif",
        }}
      >
        Carregando dados do banco...
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "24px",
        fontFamily: "sans-serif",
        backgroundColor: "#F7F7F7",
        minHeight: "100vh",
      }}
    >
      <header
        style={{
          backgroundColor: "#0A8754",
          padding: "16px",
          borderRadius: "8px",
          color: "white",
          marginBottom: "30px",
          textAlign: "center",
        }}
      >
        <h2 style={{ margin: 0 }}>
          {isNewProduct ? "Cadastrar Novo Produto" : "Detalhes do Produto"}
        </h2>
      </header>

      <div
        style={{
          backgroundColor: "white",
          padding: "24px",
          borderRadius: "12px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        }}
      >
        <p style={{ fontSize: "14px", color: "#666", margin: "0 0 5px 0" }}>
          Código lido (ID):
        </p>
        <h3 style={{ margin: "0 0 20px 0", color: "#333" }}>{id}</h3>

        <label
          style={{
            display: "block",
            marginBottom: "8px",
            fontWeight: "bold",
            color: "#333",
          }}
        >
          Nome do Produto
        </label>
        <input
          type="text"
          value={nomeProduto}
          onChange={(e) => setNomeProduto(e.target.value)}
          disabled={!isNewProduct}
          placeholder="Ex: Caixa de Parafusos"
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            marginBottom: "20px",
            boxSizing: "border-box",
          }}
        />

        <label
          style={{
            display: "block",
            marginBottom: "8px",
            fontWeight: "bold",
            color: "#333",
            textAlign: "center",
          }}
        >
          Quantidade em Estoque
        </label>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          <button
            onClick={() => setQuantidade((q) => (q > 0 ? q - 1 : 0))}
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: "#0A8754",
              color: "white",
              border: "none",
              borderRadius: "25px",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            {" "}
            -{" "}
          </button>

          <span
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              minWidth: "60px",
              textAlign: "center",
            }}
          >
            {quantidade}
          </span>

          <button
            onClick={() => setQuantidade((q) => q + 1)}
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: "#0A8754",
              color: "white",
              border: "none",
              borderRadius: "25px",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            {" "}
            +{" "}
          </button>
        </div>
      </div>

      <button
        onClick={isNewProduct ? handleCadastrar : handleAtualizarEstoque}
        style={{
          marginTop: "30px",
          padding: "16px",
          backgroundColor: "#0A8754",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontSize: "18px",
          fontWeight: "bold",
          cursor: "pointer",
          width: "100%",
        }}
      >
        {isNewProduct ? "Salvar Novo Produto" : "Atualizar Estoque"}
      </button>

      <button
        onClick={() => navigate("/scanner")}
        style={{
          marginTop: "15px",
          padding: "16px",
          backgroundColor: "transparent",
          color: "#0A8754",
          border: "2px solid #0A8754",
          borderRadius: "8px",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
          width: "100%",
        }}
      >
        Cancelar / Voltar
      </button>
    </div>
  );
}
