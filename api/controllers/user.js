import {db} from "../db.js";

export const getAgency = (_, res) => {
    const q = "SELECT * FROM nullbankBD.agencia";

    db.query(q, (err, data) => {
        if(err) return res.json(err);
        
        return res.status(200).json(data)
    });
}

export const addAgency = (req, res) => {
    const q =
      "INSERT INTO nullbankBD.agencia(`numero`, `nome`, `cidade`) VALUES(?)";
  
    const values = [
      req.body.numero,
      req.body.nome,
 
      req.body.cidade,
    ];
  
    db.query(q, [values], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Agência criada com sucesso.");
    });
};

export const updateAgency = (req, res) => {
    const q =
      "UPDATE nullbankBD.agencia SET `numero` = ?, `nome` = ?, `cidade` = ? WHERE `numero` = ?";
  
    const values = [
        req.body.numero,
        req.body.nome,
        
        req.body.cidade,
    ];
    
    db.query(q, [...values, req.params.numero], (err) => {
      if (err) return res.json(err);
      return res.status(200).json("Agência atualizada com sucesso.");
    });
  };

  export const deleteAgency = (req, res) => {
    const q = "DELETE FROM agencia WHERE (`numero` = ?)";
  
    db.query(q, [req.params.numero], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Agência deletada com sucesso.");
    });
  }; 