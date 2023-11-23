import { Prisma } from "@prisma/client";
import {Request, Response} from 'express';
import UsuarioService from "../service/UsuarioService";

class UsuarioController{
    constructor(){

    }

    async listUsuarios(req: Request, res: Response){
        const usuarios = await UsuarioService.listUsuarios() as Prisma.UsuarioCreateInput[];

        const filteredUsuarios = usuarios.filter((usuario: Prisma.UsuarioCreateInput) => usuario.nome != null)

        return res.status(200).json({
            status: 'ok',
            users: filteredUsuarios
        })
    }  
    
    async createUsuario(req: Request, res: Response){
        const dados: Prisma.UsuarioCreateInput = req.body;
        console.log(dados);
        if(dados){
            console.log("entrou no if");
            const newusuario = await UsuarioService.createUsuario(dados);
            console.log("saiu do createUsuario");
            console.log(newusuario);
            res.status(200).json({
                status: '20',
                newusuario: newusuario
            });
        }else{
            res.status(400).json({
                status: 'error',
                mensage: 'tem que colocar os dados'
            });
        }
        
    
        res.end('Incluir Usuarios');
    }

    async deleteUsuario(req: Request, res: Response): Promise<void>{
        // o Promise<void> retorna void se nao entrar em nd
        try {
            const { idUsuario } = req.params;
            const usuario = await UsuarioService.deleteUsuario(idUsuario);
            
            if (usuario) {
              res.status(200).json(usuario);
            } else {
              res.status(404).json({ error: 'Usuário não encontrado' });
            }

        } catch (error) {
           console.log(error);
        }
        // serve para deletar  as informações
        res.send('Deleta Usuario');
    }

    async updateUsuario(req: Request, res: Response): Promise<void> {
        try {
          const { idUsuario } = req.params;
          const { nome, email } = req.body;
          const usuarioAtualizado = await UsuarioService.updateUsuario(idUsuario, { nome, email });
    
          if (usuarioAtualizado) {
            res.status(200).json(usuarioAtualizado);
          } else {
            res.status(404).json({ error: 'Usuário não encontrado' });
          }
        } catch (error) {
            console.log(error);
        }
        // serve para atualizar as informações
        res.send('Atualizar Usuario');
    }
}

export default new UsuarioController;