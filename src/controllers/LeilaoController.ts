import { Prisma } from "@prisma/client";
import {Request, Response} from 'express';
import LeilaoService from "../service/LeilaoService";

class LeilaoController{
    constructor(){

    }

    async listLeiloes(req: Request, res: Response){
        const leiloes = await LeilaoService.listLeiloes() as unknown as  Prisma.LeilaoCreateInput[];

        const filteredLeiloes = leiloes.filter((leilao: Prisma.LeilaoCreateInput) => leilao.idLeilao != null)

        return res.status(200).json({
            status: 'ok',
            users: filteredLeiloes
        })
    }  
    
    async createLeilao(req: Request, res: Response){
        const dados: Prisma.LeilaoCreateInput = req.body;
        console.log(dados);
        if(dados){
            console.log("entrou no if");
            const newleilao = await LeilaoService.createLeilao(dados);
            console.log("saiu do createLeilao");
            console.log(newleilao);
            res.status(200).json({
                status: '20',
                newleilao: newleilao
            });
        }else{
            res.status(400).json({
                status: 'error',
                mensage: 'tem que colocar os dados'
            });
        }
        
    
        res.end('Incluir Leilao');
    }

    async deleteLeilao(req: Request, res: Response): Promise<void>{
        // o Promise<void> retorna void se nao entrar em nd
        try {
            const { idLeilao } = req.params;
            const leilao = await LeilaoService.deleteLeilao(idLeilao);
            
            if (leilao !== null) {
              res.status(200).json(leilao);
            } else {
              res.status(404).json({ error: 'Leilao não encontrado' });
            }

        } catch (error) {
           console.log(error);
        }
        // serve para deletar  as informações
        res.send('Deleta Leilao');
    }

    async updateLeilao(req: Request, res: Response): Promise<void> {
        try {
            const { idLeilao } = req.params;
            const { produto, preco, datalimite } = req.body;
            const leilaoAtualizado = await LeilaoService.updateLeilao(idLeilao, { produto, preco, datalimite });
      
            if (leilaoAtualizado) {
              res.status(200).json(leilaoAtualizado);
            } else {
              res.status(404).json({ error: 'Leilao não encontrado' });
            }
          } catch (error) {
              console.log(error);
          }
        // serve para atualizar as informações
        res.send('Atualizar Leilao');
    }
}

export default new LeilaoController;