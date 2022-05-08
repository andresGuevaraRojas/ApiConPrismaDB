const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

(async function main(){
    try {
        const woopa = await prisma.explorer.upsert({
            where:{name:'woopa'},
            update:{},
            create:{
                name:'woopa',
                username:'ajolonauta',
                mission:'Node'
            }
        });

        const woopa1 = await prisma.explorer.upsert({
            where:{name:'woopa1'},
            update:{},
            create:{
                name:'woopa1',
                username:'ajolonauta1',
                mission:'Node'
            }
        });

        const woopa2 = await prisma.explorer.upsert({
            where:{name:'woopa2'},
            update:{},
            create:{
                name:'woopa2',
                username:'ajolonauta2',
                mission:'Java'
            }
        });

        const woopa3 = await prisma.explorer.upsert({
            where:{name:'woopa3'},
            update:{},
            create:{
                name:'woopa3',
                username:'ajolonauta3',
                mission:'Node'
            }
        });

        const woopa4 = await prisma.explorer.upsert({
            where:{name:'Andres'},
            update:{},
            create:{
                name:'Andres',
                username:'ajolonauta4',
                mission:'Node'
            }
        });

        console.log('Create 3 explorers');
    } catch (error) {
        console.log(error)
        process.exit(1);
    } finally{
        await prisma.$disconect();
    }
})();