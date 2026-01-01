import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // 1. Seed States
  const states = [
    {
      statename: "Maharashtra",
      description: "This is a description for Mahrashtra PAPIA.",
      svg: "<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'><circle cx='50' cy='50' r='40' fill='blue' /></svg>",
    },
    // Add other states here...
  ];

  for (const state of states) {
    await prisma.stateInfo.upsert({
      where: { statename: state.statename },
      update: {},
      create: state,
    });
  }

  // 2. Seed Locations
  const locations = [
    {
      locationname: "Gateway of India",
      statename: "Maharashtra",
      coords: "18.9220,72.8347",
    },
    // Add other locations here...
  ];

  for (const loc of locations) {
    await prisma.locationPopupInfo.create({
      data: loc,
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
