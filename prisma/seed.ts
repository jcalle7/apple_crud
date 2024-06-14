import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    const product1 = await prisma.product.upsert({
      where: { id: '550e8400-e29b-41d4-a716-446655440000' }, 
      update: {}, 
      create: {
        productName: 'Apple',
        description: 'Empresa dedicada a vender smartphones Apple',
        quantityInStock: 100,
        unitPrice: 100,
      },
    });

    console.log('Producto sembrado correctamente:', product1);
  } catch (error) {
    console.error('Error al sembrar el producto:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((error) => {
  console.error('Error en la función principal:', error);
  process.exit(1);
});


