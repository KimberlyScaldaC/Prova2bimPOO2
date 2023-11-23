import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class UsuarioService{

    constructor(){ }

    async createUsuario(dados: Prisma.UsuarioCreateInput){
        try{
            console.log("entrou no try");
            //await prisma.usuario.create({data: dados});
            const newusuario = await prisma.usuario.create({
                data: dados
                
            })
            console.log(newusuario);
            return newusuario;

        }catch(error){
            console.log(error);
        }

    }

    async updateUsuario(idUsuario: string, updateUsuario: Prisma.UsuarioUpdateInput){
        try{

            const newUsuario = await prisma.usuario.update({
                where: {
                    idUsuario
                }, data: updateUsuario
                 
            })

            return newUsuario;

        }catch(error){
            console.log(error);
        }
    }

    async listUsuarios(idUsuario?: string): Promise<Prisma.UsuarioCreateInput[] | Prisma.UsuarioCreateInput | undefined | null>{
        try{
            // se nao axiste esse id
            if(!idUsuario){
                const usuarios = await prisma.usuario.findMany();
                return usuarios;
            }else{
                const usuario = await prisma.usuario.findUnique({
                    where: {
                        idUsuario
                    }
                })
                return usuario;
            }
        }catch(error){
            console.log(error);
            return null;
        }
        
    }

    async deleteUsuario(idUsuario: string){
        try{
            await prisma.usuario.delete({
                where: {
                   idUsuario
                }
            })   
            return idUsuario;
        }catch(error){
            console.log(error);
        }
    }
}

export default new UsuarioService();