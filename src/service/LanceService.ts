import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class LanceService{

    constructor(){ }

    async createLance(dados: Prisma.LanceCreateInput){
        try{

            const newlance = await prisma.lance.create({data: dados});
            return newlance;

        }catch(error){
            console.log(error);
        }

    }

    async updateLance(idLance: string, updateLance: Prisma.LanceUpdateInput){
        try{

            const newlance = await prisma.lance.update({
                where: {
                    idLance
                }, data: updateLance
                 
            })

            return newlance;

        }catch(error){
            console.log(error);
        }
    }

    async listLances(idLance?: string){
        try{
            if(!idLance){
                const lances = await prisma.lance.findMany();
                return lances;
            }else{
                const lance = await prisma.lance.findUnique({
                    where: {
                        idLance
                    }
                })
                return lance;
            }
        }catch(error){
            console.log(error);
            return null;
        }
        
    }

    async deleteLance(idLance: string){
        try{
            await prisma.lance.delete({
                where: {
                   idLance
                }
            })   
        }catch(error){
            console.log(error);
        }
    }
}

export default new LanceService();