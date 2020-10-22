import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Demonstração de que o prisma, com o comando generate,
 * recebe toda a base de dados atual, e transforma em método,
 *
 * onde temos o método 'user', e o método 'post'
 */

const cadastrar = async () => {
  try {
    await prisma.user
      .create({
        data: {
          email: 'christian.ff@hotmail.com',
          name: 'Christian',
          posts: { create: [{ title: 'Post 1' }, { title: 'Post 2' }] },
        },
      })
      .then((res) => {
        console.log('cadastrar', res);
      });
  } catch (error) {
    console.log(error);
  } finally {
    prisma.$disconnect();
  }
};

const listarUsuarios = async () => {
  try {
    const users = await prisma.user.findMany();
    console.log('listar: ', { users });
    return users;
  } catch (error) {
    console.log(error);
  } finally {
    prisma.$disconnect();
  }
};

const listarRelations = async () => {
  try {
    const allData = await prisma.user.findMany({ include: { posts: true } });
    console.log('relations: ', { allData });
  } catch (error) {
    console.log(error);
  } finally {
    prisma.$disconnect();
  }
};

const excluir = async () => {
  const res = await prisma.user.delete({ where: { id: 1 } });
  console.log('excluir: ', res);
};

// cadastrar();
listarUsuarios();
listarRelations();
// excluir();
